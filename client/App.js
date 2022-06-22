import React, { Component } from 'react';

class App extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <h2>User Login</h2>
        <form method="POST" action='/login'>
          <input></input>
        </form>
      </div>
    );
  }
}

export default App;