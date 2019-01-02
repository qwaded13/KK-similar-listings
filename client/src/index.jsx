import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';

// Components
import ListingDesc from './components/listingDesc.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: []
    };
  }

  componentDidMount() {
    axios
      .get('/similar-listings/1')
      .then(({ data }) => {
        this.setState({
          listings: data
        });
      })
      .catch(() => {
        console.log('Could not get listing data from server');
      });
  }

  render() {
    return (
      <div className="multiple-items">

        {this.state.listings.length ? (
          this.state.listings.map((listing) => {
            return <ListingDesc listing={listing} key={listing.listingId} className="listing" />;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('carousel'));
