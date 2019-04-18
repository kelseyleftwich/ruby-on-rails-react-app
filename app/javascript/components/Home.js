import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col p-3 m-3">
            <h1 className="display-1">Zonkar</h1>
            <h5 className="text-muted">Design Inclusion. Tech Driven.</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Let's move things forward</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Become part of the story</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
