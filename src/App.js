import React from 'react';
import JokeCard from './components/JokeCard'
import Punchline from './components/Punchline'



import './App.css';

const baseUrl = "http://localhost:3000"
const jokesUrl = `${baseUrl}/jokes`

class App extends React.Component {

  state = {
    jokes: [],
    showPunchline: false
  }



  componentDidMount() {
    fetch(jokesUrl)
      .then(response => response.json())
      .then(jokes => this.setState({jokes}))
  }

  showJokes = () => {
    return this.state.jokes.map(joke => {
      return <JokeCard joke = {joke} handleClick = {this.handleClick} punchline = {this.state.showPunchline}/>
    })
  }

  showAnswer = () => {
    return this.state.jokes.map(joke => {
      return <Punchline joke = {joke} />
    })
  }

  handleClick = () => {
    this.setState({showPunchline: true});
   };
  
  
  render() {

    
    return (
      <div className="App">
        <div className = "title">
        <h1>Jokes App</h1>
        <h2>Animate Any Party With These Jokes</h2>
        </div>
        <ul className = "joke-list">
          {this.showJokes()}
          {/* {this.showAnswer()} */}
        </ul>

      </div>
    );
  }
}

export default App;
