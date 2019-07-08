import React from 'react';

function getStars(rating) {
  let key = 0;
  rating = Math.round(rating * 2) / 2;
  let output = [];

  for (var i = rating; i >= 1; i--) {
    output.push(<span className="fa fa-star" aria-hidden="true" key={key++}></span>);
  }
    
  if (i == .5) output.push(<i className="fa fa-star-half-o" aria-hidden="true" key={key++}></i>);

  for (let i = (5 - rating); i >= 1; i--)
    output.push(<i className="fa fa-star-o" aria-hidden="true" key={key++}></i>);
  
  return output;
}

function ListingRating(props) {
  return (
    <span className="listingRating" key={props.listingId}>
      {getStars(props.rating)}
    </span>
  )
}

export default ListingRating;
