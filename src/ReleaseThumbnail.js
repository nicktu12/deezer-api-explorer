import React from 'react';

const ReleaseThumbnail = (props) => (
  <div className="thumbnail">
    <img src={props.albumImage} />
    <p>{props.albumTitle}</p>
  </div>
)

export default ReleaseThumbnail;
