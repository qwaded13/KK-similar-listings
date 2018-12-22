import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // when the component mounts, make a request to the correct endpoint for a listing's data
  

  render() {
    return (
      <div>
        This is a test
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));