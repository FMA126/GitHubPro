import Nav from './components/Nav/Nav';

import { Container } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <>
    <Nav/>
    <Container maxWidth="sm">
      <div>Hello World!</div>
    </Container>
    </>
  );
}

export default App;
