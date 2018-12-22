import React from 'react';
import axios from 'axios';

class ListingImg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl:
        'https://i.pinimg.com/originals/5f/d9/78/5fd9786dc347122dfc4b7ceaed697a0a.jpg'
    }
  }

  // when the component mounts, make a request to the correct endpoint for a listing's data

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default ListingImg;
