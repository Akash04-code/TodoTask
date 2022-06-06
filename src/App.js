import React from 'react';
import './App.css';
import Form from './Component/Form';
import ApiApp from './Component/ApiApp'
import LoginForm from './Component/LoginForm';
import Todotask from './Component/Todotask';

function App() {
 
  return (
    <div className="App"> 
     {/* <ApiApp /> */}
     {/* <Form/> */}
     {/* <LoginForm/> */}
     <Todotask/>
    </div>
  );
}

export default App; 
