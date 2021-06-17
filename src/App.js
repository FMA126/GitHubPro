import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import ResultList from './components/ResultList/ResultList'
import { getUsers, getUserData} from './api/api';

import { Container } from '@material-ui/core';
import './App.css';
import { useEffect, useReducer, useState } from 'react';

function reducer(state, action) {
  console.log(action)
  switch (action.type) {
      case 'category':
        console.log('payload', action.payload)
          return { params: 
            { ...state.params,
            category: action.payload }
          };
      case 'searchText':
        console.log('payload', action.payload)
        return { params: 
          { ...state.params,
          searchText: action.payload }
        };
      case 'page':
        return { params: 
          { ...state.params,
          page: action.payload }
        };
    default:
      console.log('Something went wrong');
  }
}


function App() {
  const [userList, setUserList] = useState(null);
  const [searchParams, dispatchSearchParams] = useReducer(reducer, { params: {
    category: '',
    searchText: '',
    page: '',
  } })
  useEffect(() => {
    if (searchParams.params.category && searchParams.params.searchText) {
      console.log('state', searchParams)
      const fetchUserData = async () => {
        console.log(searchParams.params)
        const userRes = await getUsers(searchParams.params);
        
        const userListDataRes = await Promise.all(
          userRes.data.items.map(async (item) => {
            const userData = await getUserData(item.login)
            return userData;
          })
        )
        // console.log(userListDataRes)
        setUserList(userListDataRes);
      }
      fetchUserData();
    }
  }, [searchParams])

  return (
    <>
      <Nav/>
      <Container maxWidth="sm">
        <Search searchFields={searchParams} dispatch={dispatchSearchParams}/>
      </Container>
      <Container maxWidth="sm">
        <ResultList userData={userList}/>
      </Container>
    </>
  );
}

export default App;
