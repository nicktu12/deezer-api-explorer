import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReleaseThumbnail from './ReleaseThumbnail';
import ReleaseDetails from './ReleaseDetails';
import { selectRelease } from './ReleaseList-actions';

class ReleaseList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="release-list">
        {
        !!this.props.albumResults.length &&
        <div>
          <hr />
          <h3>{this.props.releaseType.toUpperCase()}</h3>
          <article>
            {
            this.props.albumResults.map(album => (
              <ReleaseThumbnail
                albumImage={album.albumImage}
                albumTitle={album.albumTitle}
                albumId={album.albumId}
                selectRelease={this.props.selectReleaseAction}
                selectedRelease={this.props.selectedRelease}
              />
            ))
          }
          </article>
          <article className="details-article">
            {
            !!Object.keys(this.props.albumDetails).length &&
            <ReleaseDetails
              albumDetails={this.props.albumDetails}
            />
          }
          </article>
        </div>
      }
      </section>
    );
  }
}

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
