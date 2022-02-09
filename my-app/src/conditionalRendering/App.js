import './App.css';
import React from 'react'
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: false
    }; 
  }
  
  onStatusChange = () => {
    this.setState({
      status: !this.state.status
    })
  }
  
  render() {
    const changeStatus = () => {
      return <button onClick={this.onStatusChange}>{this.state.status ? 'Log in' : 'Log out'}</button>
    }
    return (
      <div className='App'>
          {/* {this.state.status ? <button onClick={this.onStatusChange}>Log in</button> : <button onClick={this.onStatusChange}>Log out</button>} */}
      {changeStatus()}
      </div>
    )
  }
}

export default App;
