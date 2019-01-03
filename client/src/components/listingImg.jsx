import React from 'react';

class ListingImg extends React.Component {
  render() {
    return (
      <img
          className="listingImg"
          style={{ 'height': 225, 'width': 325, 'borderRadius': '3px'}}
          src={this.props.imageLink}
        />
    );
  }
}

export default ListingImg;