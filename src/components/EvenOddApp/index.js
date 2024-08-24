// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="count-text">Count {count}</h1>
          <p className="even-odd-text">
            {count % 2 === 0 ? 'Count is Even' : 'Count is Odd'}
          </p>
          <button
            className="increment-button"
            type="button"
            onClick={this.incrementCount}
          >
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
