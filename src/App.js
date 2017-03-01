import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',

    };
  }
// scripts
  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
