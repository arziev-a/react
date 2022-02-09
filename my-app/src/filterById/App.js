import './App.css';
import React from 'react'
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeId: 1,
      data: [
        { id: 1, title: "London", content: "London is the capital city of England." },
        { id: 2, title: "Paris", content: "Paris is the capital of France." },
        { id: 3, title: "Tokyo", content: "Tokyo is the capital of Japan." },
        { id: 4, title: "Phoenix", content: "Phoenix is the capital of Arizona." },
        { id: 5, title: "Sacramento", content: "Sacramento is the capital of California." },
        { id: 6, title: "Montgomery", content: "Montgomery is the capital of Alabama." }
      ]
    }; 
  }
  
  handleClick = (event) => {
   this.setState({activeId:event})
   console.log(event)
  }
  
  render() {
    let filtered = this.state.data.filter(item => item.id === this.state.activeId)
    console.log(filtered)
    return (
      <div className='main'>
      <div className='App'>
       {this.state.data.map(item => {
         let activeId = this.state.activeId === item.id ? 'active' : ''
             return (
          <>
            <div className='card' id={item.id} key={item.id} onClick={() => this.handleClick(item.id)}>
             <div className={activeId}>{item.title}</div>
           </div>
             
          </>
         )
       })}
      </div>
       <div className='content'>
              <p>{filtered[0].content}</p>
             </div>
      </div>
    )
  }
}

export default App;
