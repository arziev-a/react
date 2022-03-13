import './App.css';
import React from 'react'
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0
    }; 

    this.interval = null
  }
  
  onStart = () => {
      this.interval = setInterval(() => {
        this.setState({time: this.state.time + 1})
      }, 1000)
    }

    onStop = () => {
      
      clearInterval(this.interval)
      this.setState({time:0})
    }


  render() {
    return (
      <div className='App'>
        {this.state.time}
        <button onClick={this.onStart}>start</button>
        <button onClick={this.onStop}>stop</button>
      </div>
    )
  }
}

export default App;
