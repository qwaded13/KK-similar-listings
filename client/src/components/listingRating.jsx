import React from 'react';

function getStars(rating) {
  rating = Math.round(rating * 2) / 2;
  let output = [];

  for (var i = rating; i >= 1; i--) {
    output.push(<span className="fa fa-star" aria-hidden="true"></span>);
  }
    
  if (i == .5) output.push(<i class="fa fa-star-half-o" aria-hidden="true"></i>);

  for (let i = (5 - rating); i >= 1; i--)
    output.push(<i class="fa fa-star-o" aria-hidden="true"></i>);
  
  return output;
}

class ListingRating extends React.Component {
  render() {
    return (
      <span className="listingRating">
        {getStars(this.props.rating)}
      </span>
    )}
}

export default ListingRating;
