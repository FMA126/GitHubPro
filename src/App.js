import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import ResultList from './components/ResultList/ResultList'
import { getUsers, getUserData} from './api/api';

import { Container } from '@material-ui/core';
import './App.css';
import { useEffect, useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
      case 'category':
          return { params: 
            { ...state.params,
            category: action.payload }
          };
      case 'searchText':
        return { params: 
          { ...state.params,
          searchText: action.payload }
        };
      case 'increase':
        return { params: 
          { ...state.params,
          page: state.params.page + 1 }
        };
      case 'decrease':
        return { params: 
          { ...state.params,
          page: state.params.page - 1 }
        };
    default:
      console.log('Something went wrong');
  }
}


function App() {
  const [userList, setUserList] = useState(null);
  const [totalPages, setTotalPages] = useState(0)
  const [searchParams, dispatchSearchParams] = useReducer(reducer, { params: {
    category: '',
    searchText: '',
    page: 1,
  } })
  useEffect(() => {
    if (searchParams.params.category && searchParams.params.searchText) {
      const fetchUserData = async () => {
        try {
          const userRes = await getUsers(searchParams.params);
          
          const userListDataRes = await Promise.all(
            userRes.data.items.map(async (item) => {
              const userData = await getUserData(item.login)
              return userData;
            })
          )
          setTotalPages(Math.ceil(userRes.data.total_count / 10))
          setUserList(userListDataRes);

        } catch (error) {
          alert('Something went wrong try again')
        }
      }

      fetchUserData();
    }
  }, [searchParams])

  return (
    <>
      <Nav/>
      <Container maxWidth="sm">
        <Search totalPages={totalPages} searchFields={searchParams} dispatch={dispatchSearchParams}/>
      </Container>
      <Container maxWidth="sm">
        <ResultList userData={userList}/>
      </Container>
    </>
  );
}

export default App;
