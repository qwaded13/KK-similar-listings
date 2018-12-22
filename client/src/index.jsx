import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ListingImg from './components/listingImg.jsx';
import ListingDesc from './components/listingDesc.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: []
    };
  }

  componentDidMount() {
    axios.get('/similar-listings/1')
      .then(({data}) => {
        this.setState({
          listings: [data]
        });
      })
      .catch(() => {
        console.log('Could not get listing data from server');
      });
  }

  // when the component mounts, make a request to the correct endpoint for a listing's data

  render() {
    return (
      <div>
        This is a test
        {/* <ListingImg /> */}
        {this.state.listings.map((listing) => {
          return <ListingDesc listing={listing}/>;
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
