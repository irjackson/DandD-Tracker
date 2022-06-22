import React, { Component } from 'react';
import img from '../images/DnD_logo.png';

class App extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div id='login'>
        <h2>User Login</h2>
        <form method="POST" action='/login'>
          <center>
          <input name='username' placeholder='Username'></input>
          <input name='password' placeholder='Password'></input>
          <input type='submit' value='Log In'></input>
          </center>
        </form>
      </div>
    );
  }
}

export default App;