import React from 'react';

class ListingImg extends React.Component {
  render() {
    return (
      <div>
        <img
          className="listingImg"
          style={{ height: 225, width: 325, borderRadius: '5px' }}
          src={this.props.imageLink}
        />
      </div>
    );
  }
}

export default ListingImg;
