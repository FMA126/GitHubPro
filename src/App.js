import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import ResultList from './components/ResultList/ResultList'
import get from './api/api';

import { Container } from '@material-ui/core';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const res = get();
    console.log(res)
  })
  return (
    <>
      <Nav/>
      <Container maxWidth="sm">
        <Search/>
      </Container>
      <Container>
        <ResultList />
      </Container>
    </>
  );
}

export default App;
