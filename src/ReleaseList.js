import React from 'react';
import { connect } from 'react-redux';
import ReleaseThumbnail from './ReleaseThumbnail';
import ReleaseDetails from './ReleaseDetails';
import { selectRelease } from './ReleaseList-actions.js';

class ReleaseList extends React.Component{
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
                albumLink={album.albumLink}
                selectRelease={this.props.selectReleaseAction}
                selectedRelease={this.props.selectedRelease}
              />
            ))
          }
          </article>
          <article>
          {
            this.props.selectedRelease &&
            <ReleaseDetails />
          }
          </article>
        </div>
      }
      </section>
    )
  }
}

const mapStateToProps = store => ({
  albumResults: store.albumResults, 
  selectedRelease: store.selectedRelease,
})

const mapDispatchToProps = dispatch => ({
  selectReleaseAction: (link) => dispatch(selectRelease(link))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseList);
