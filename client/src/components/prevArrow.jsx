import React from 'react'

export default function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      className={className}
      key="slick-prev"
      viewBox="0 0 18 18"
      role="img"
      aria-label="Previous"
      focusable="false"
      style={{
        ...style,
        height: '24px',
        width: '24px',
        display: 'block',
        position: 'absolute',
        fill: 'rgb(118, 118, 118)'
      }}
      onClick={onClick}
    >
      <path
        d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
        fillRule="evenodd"
      ></path>
    </svg>
  )
}