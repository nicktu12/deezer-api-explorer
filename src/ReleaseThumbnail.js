import React from 'react';

const ReleaseThumbnail = (props) => (
  <div 
    className="thumbnail"
    onClick={()=>props.selectRelease(props.albumLink)}
  >
    <img src={props.albumImage} />
    <p>{props.albumTitle}</p>
  </div>
)

export default ReleaseThumbnail;
