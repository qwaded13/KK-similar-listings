import React from 'react';

class ListingImg extends React.Component {
  render() {
    console.log(this.props.imageLink);
    return (
      <div>
        <img
          className="listingImg"
          style={{ height: 225, width: 325, borderRadius: '5px' }}
          src={`/test-images/test(${this.props.imageId}).webp`}
        />
      </div>
    );
  }
}

export default ListingImg;
