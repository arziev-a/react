import './App.css';
import React from 'react'
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      card: [{name: "Javascript", id: 1, count: 0}, {name: "C++", id: 2, count: 0}, {name: "Python", id: 3, count: 0}]
    }; 
  }

  handleClick(e) {
    const newData = [...this.state.card]
    const index = newData.findIndex(i => i.id === e)

    newData[index].count += 1
    this.setState({card: newData})
  }

  render() {
    return (
      <div className='App'>
          {this.state.card.map(item => {
            return (
              <div className='card' key={item.id} id={item.id}>
                <div>{item.name}</div>
                <div>{item.count}</div>
                <button onClick={() => this.handleClick(item.id)}>Vote!</button>
              </div>
            )
          })}
      </div>
    )
  }
}

export default App;
