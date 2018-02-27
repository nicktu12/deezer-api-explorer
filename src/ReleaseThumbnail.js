import React from 'react';
import PropTypes from 'prop-types';

const ReleaseThumbnail = props => (
  <div
    className={props.selectedRelease === props.albumId ? 'selected thumbnail' : 'thumbnail'}
    onClick={() => props.selectRelease(props.albumId)}
  >
    <img src={props.albumImage} alt="album-cover" />
    <p>{props.albumTitle}</p>
  </div>
);

export default ReleaseThumbnail;

ReleaseThumbnail.propTypes = {
  selectedRelease: PropTypes.string,
  albumImage: PropTypes.string,
  albumTitle: PropTypes.string,
  selectRelease: PropTypes.func,
  albumId: PropTypes.number,
};
