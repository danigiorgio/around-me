import React from "react";
import "./App.css";

import BusinessList from "./components/BusinessList/BusinessList";
import SearchBar from "./components/SearchBar/SearchBar";
import Yelp from "./util/Yelp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { businesses: [] };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Around Me</h1>
        <h2>
          {" "}
          This app lets you find interesting activities to do in a certain
          location. Give it a try!{" "}
          <span role="img" aria-label="smiling face with sunglasses emoji">
            😎
          </span>
        </h2>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
