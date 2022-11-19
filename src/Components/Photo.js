import React from 'react';

export default function Photo(props) {
  const { description, imageLink } = props.item;
  return (
    <figure className="figure">
      <img className="photo" src={imageLink} alt="" />
      <figcaption>
        <p>{description}</p>
      </figcaption>
      <div className="button-container">
        <button
          className="remove-button"
          onClick={() => props.rem(description)}
        >
          Remove
        </button>
      </div>
    </figure>
  );
}
