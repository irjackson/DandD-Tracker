import React, { Component } from 'react';
import img from '../images/DnD_logo.png'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    }
  }

  componentDidMount(){
    fetch('/main')
    .then(res => res.json())
    .then((characters) => {
      if (!Array.isArray(characters)) characters = [];
      console.log(characters)
      return this.setState({
        characters,
      }) 
      .catch(err => console.log('Characters.componentDidMount: get characters: ERROR: ', err)); 
    })
  }
  render(){
    console.log(this.state.characters[0])
    return(
      <div id='login'>
        <h2>User Login</h2>
        <form method="POST" action='/'>
          <center>
          <input name='username' placeholder='Username'></input>
          <input name='password' placeholder='Password'></input>
          <input type='submit' value='Log In'></input>
          </center>
        </form>
        {this.state.characters[0]}
      </div>
    );
  }
}

export default App;