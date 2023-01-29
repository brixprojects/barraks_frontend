// import Login from './components/Login';
import Login from '../src/pages/authentication/Login.js';
import Home from './pages/Home.js'
import Register from './pages/authentication/Register.js'
import Dashboard from './pages/Dashboard.js'
import ForgotPassword from './pages/ForgotPassword.js'

import { useEffect } from 'react';
// import { Route, Router } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';

import {
  home,
  login,
  dashboard,
  register,
  forgotpassword
} from './components/Links/Links.js';


// import Login from "./components/Login";

function App() {
  // function handleCallbackResponse(response){


  //   console.log("Encoded JWT ID token: " + response.credentials);
    
  // useEffect(() => {
  //     google.accounts.id.initialize({
  //       client_id: "890779726484-2hrboltbt3id8s3o0cl1r76pj6e5v3vd.apps.googleusercontent.com",
  //       callback: handleCallbackResponse
  //     });
  //     google.accounts.id.renderButton(
  //       document.getElementById("SignInDiv"),
  //       { theme: "outline", size: "large"}
  //     );
  // }, []);
  return (

    <Router>
      <Routes>
    <Route exact path={login} element={<Login/>}/>
    <Route exact path={register} element={<Register/>}/>
    <Route exact path={dashboard} element={<Dashboard/>}/>
    <Route exact path={home} element={<Home/>}/>
    <Route exact path={forgotpassword} element={<ForgotPassword/>}/>
    
    </Routes>
    </Router>

    
  );
}

export default App;
