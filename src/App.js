import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import {Routes} from 'react-router-dom';

import Graduating from './components/graduating';
import Register from './components/register';
import SignIn from './components/signin';
function App() {
  return (
    <Router>
      
      <Routes>
          <Route path='/' element={<div className="App">
        <Navbar/>
        <Graduating/>
        </div>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
  </Router> 
     

    
    
  );
}

export default App;
