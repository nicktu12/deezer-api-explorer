import React from 'react';
import { connect } from 'react-redux';

class ReleaseList extends React.Component{
  render() {
    return (
      <h3>{this.props.releaseType.toUpperCase()}</h3>
    )
  }
}

const mapStateToProps = store => {
  
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseList);
