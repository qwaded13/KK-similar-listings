import React from 'react';

class ListingImg extends React.Component {
  render() {
    return (
      <img
          className="listingImg"
          style={{ 'height': 200, 'width': 300, 'borderRadius': '7px'}}
          src={this.props.imageLink}
        />
    );
  }
}

export default ListingImg;