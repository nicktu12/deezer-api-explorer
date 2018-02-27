import React from 'react';

const ReleaseThumbnail = (props) => (
  <div 
    className={ props.selectedRelease === props.albumId ? "selected thumbnail" : "thumbnail" }
    onClick={()=>props.selectRelease(props.albumId)}
  >
    <img src={props.albumImage} />
    <p>{props.albumTitle}</p>
  </div>
)

export default ReleaseThumbnail;
