import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search/search.component";
class App extends Component {
  array = [1, 2, 3, 4];
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { monsters, search } = this.state;
    const results = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
        <Search
          placeholder="Search monsters..."
          handleChange={this.handleChange}
        />
        <CardList monsters={results} />
      </div>
    );
  }
}
export default App;
