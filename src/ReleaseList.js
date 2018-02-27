import React from 'react';
import { connect } from 'react-redux';

class ReleaseList extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      { 
        !!this.props.albumResults.length &&
        <h3>{this.props.releaseType.toUpperCase()}</h3>
      }
      </div>
    )
  }
}

const mapStateToProps = store => ({
  albumResults: store.albumResults, 
})

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseList);
