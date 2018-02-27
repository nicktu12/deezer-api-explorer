import React from 'react';
import { connect } from 'react-redux';
import ReleaseThumbnail from './ReleaseThumbnail'

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
                albumLink={album.albumLink}
                albumTitle={album.albumTitle}
              />
            ))
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
})

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseList);
