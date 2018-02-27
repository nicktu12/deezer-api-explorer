import React from 'react';
import { connect } from 'react-redux';

const SearchResultsHeader = props => (
  <div className="search-results-header">
  {
    props.albumResults.length > 0 &&
    <h3>Search results for "{props.searchTerm}"</h3>
  }
  </div>
);

const mapStateToProps = store => ({
  searchTerm: store.searchTerm,
  albumResults: store.albumResults,
});

export default connect(mapStateToProps, null)(SearchResultsHeader);
