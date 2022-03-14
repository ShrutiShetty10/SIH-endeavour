import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Container from '@mui/material/Container';

import Graduating from './components/graduating';
import Register from './components/register';
import SignIn from './components/signin';
import Portal from './components/Portal';

import Home from './pages/Home';
function App() {
  return (
    <Container maxWidth="m">
    <Router>
      
      <Routes>
          <Route path='/' element={<div className="App">
        <Navbar/>
        <Graduating/>
        </div>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/portal" element={<Home/>}/>

        </Routes>
  </Router> 
  </Container>
     

    
    
  );
}

export default App;
