import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Slider from 'react-slick';

// Components
import ListingDesc from './components/listingDesc.jsx';
import PrevArrow from './components/prevArrow.jsx'
import NextArrow from './components/nextArrow.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: []
    };
  }

  componentDidMount() {
    axios
      .get(`/similar-listings${window.location.pathname}`)
      .then(({data}) => {
        this.setState({
          listings: data
        });
      })
      .catch(() => {
        console.log('Could not get listing data from server');
      });
  }

  render() {
    let settings = {
      autoplay: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      variableWidth: false,
      rows: 1
    }

    return (
      <Slider {...settings}>
        {this.state.listings.length ? (
          this.state.listings.map((listing) => {
            return <ListingDesc listing={listing} key={listing.listingId} className="listing" />;
        })
        ) : (
          <div>Loading...</div>
          )}
      </Slider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('carousel'));
