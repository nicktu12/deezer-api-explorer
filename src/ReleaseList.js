import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReleaseThumbnail from './ReleaseThumbnail';
import ReleaseDetails from './ReleaseDetails';
import { selectRelease } from './ReleaseList-actions';

const ReleaseList = props => (
  <section className="release-list">
    {
      props.albumResults.length > 0 &&
    <div>
      <hr />
      <h3>{props.releaseType.toUpperCase()}</h3>
      <article>
        {
        props.albumResults.map(album => (
          <ReleaseThumbnail
            albumImage={album.albumImage}
            albumTitle={album.albumTitle}
            albumId={album.albumId}
            selectRelease={props.selectReleaseAction}
            selectedRelease={props.selectedRelease}
          />
        ))
      }
      </article>
      <article className="details-article">
        {
          Object.keys(props.albumDetails).length > 0 &&
        <ReleaseDetails
          albumDetails={props.albumDetails}
        />
      }
      </article>
    </div>
  }
  </section>
)

const mapStateToProps = store => ({
  albumResults: store.albumResults,
  selectedRelease: store.selectedRelease,
  albumDetails: store.albumDetails,
});

const mapDispatchToProps = dispatch => ({
  selectReleaseAction: id => dispatch(selectRelease(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseList);

ReleaseList.propTypes = {
  albumResults: PropTypes.arrayOf(PropTypes.object),
  releaseType: PropTypes.string,
  selectReleaseAction: PropTypes.func,
  selectedRelease: PropTypes.string,
  albumDetails: PropTypes.object,
};
