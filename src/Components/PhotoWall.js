import React from 'react';
import Photo from './Photo';

export default function PhotoWall(props) {
  return (
    <div className="photoGrid">
      {props.posts.map((item, i) => {
        return <Photo key={i} item={item} rem={props.rem} />;
      })}
    </div>
  );
}
