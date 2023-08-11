import './App.css';
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{BrowserRouter as Router }from 'react-router-dom';
import Home from './Components/Home';
import AddEdit from './Components/AddEdit';
function App() {
  return (
    <div className="App">
      <ToastContainer position='top-center'/>
      <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addedit'  element={<AddEdit/>}/>
      <Route path='/update/:id' element={<AddEdit/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
