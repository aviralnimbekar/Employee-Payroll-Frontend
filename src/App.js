import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      title: 'hello from Bridgelabz'
    }
  }


render() {
  return (
      <div className="App">
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default App;
