import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';

import { Container } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <>
    <Nav/>
    <Container maxWidth="sm">
      <Search/>
    </Container>
    </>
  );
}

export default App;
