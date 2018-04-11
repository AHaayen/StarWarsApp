import React, { Component } from 'react';
import starWarsService from '../services/starwars.service';
import Character from './Characters'
import Pagination from './Pagination'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      currentPage:1,
      characters: []
    }
  }

  getCharacters = () => {
    starWarsService.getCharacters(this.state.currentPage).then((response) => {
      this.setState({
        characters:response.data.results
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  getCharacter = () =>{
    starWarsService.getCharacter(this.state.searchString).then((response)=> {
      this.setState({
        characters:response.data.results
      })
    })
  }

  nextPage = () =>{
    const page = this.state.currentPage;
    this.setState({
      currentPage: page + 1
    })
    this.getCharacters();
  }

  previousPage = () =>{
    const page = this.state.currentPage;
    if(page === 1){
      return
    }
    this.setState({
      currentPage: page - 1
    })

    this.getCharacters();
  }

  handleChange = (event) =>{
    this.setState({ searchString: event.target.value });
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Star wars characters</h1>
        </header>
        <br />
     <p>Search for you Star Wars Character</p>
        <input type="text"   className="form-control" value={this.state.searchString} onChange={this.handleChange} />
        <button className="btn btn-primary" onClick={this.getCharacter}>
        Search
          </button>
          <br />
        <button  className="btn btn-primary" onClick={this.getCharacters}>
         Get all
          </button>
          {
            this.state.characters.map((character) => {
              return <Character key={character.url} {...character} />
            })
          }
          <Pagination previousPage={this.previousPage} nextPage={this.nextPage} />
          <br />
          <h2>If you don't know any characters, follow <a href="https://en.wikipedia.org/wiki/List_of_Star_Wars_characters">this</a> link.</h2>
      </div>
    );
  }
}

export default App;
