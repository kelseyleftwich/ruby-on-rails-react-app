import React, { Component } from "react";
import Cards from "./Home/Cards";
import Heading from "./Home/Heading";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Heading />
        <Cards />
      </>
    );
  }
}

export default Home;
