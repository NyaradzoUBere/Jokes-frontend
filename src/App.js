import React from 'react';
import JokeCard from './components/JokeCard'

import './App.css';

const baseUrl = "http://localhost:3000"
const jokesUrl = `${baseUrl}/jokes`

class App extends React.Component {

  state = {
    jokes: []
  }

  componentDidMount() {
    fetch(jokesUrl)
      .then(response => response.json())
      .then(jokes => this.setState({jokes}))
  }

  showJokes = () => {
    return this.state.jokes.map(joke => {
      return <JokeCard joke = {joke} />
    })
  }
  
  render() {

    
    return (
      <div className="App">
        <h1>Jokes App</h1>
        <ul className = "joke-list">
          {this.showJokes()}
        </ul>
      </div>
    );
  }
}

export default App;
