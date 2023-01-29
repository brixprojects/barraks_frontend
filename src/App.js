import logo from './logo.svg';
import './App.css';
import Login from './component/login';
import { useEffect } from 'react';

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
    <div className="App">
    <Login/>
    <div id="signInDev"></div>
    </div>
    
  );
}

export default App;
