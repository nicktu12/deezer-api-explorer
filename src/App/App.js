/* eslint-disable import/no-named-as-default, import/no-named-as-default-member */

import React from 'react';
import Controls from '../Controls/Controls';
import SearchResultsHeader from '../SearchResultsHeader/SearchResultsHeader';
import ReleaseList from '../ReleaseList/ReleaseList';
import '../Styles/index.css';

const App = () => (
  <div className="App">
    <Controls />
    <SearchResultsHeader />
    <ReleaseList releaseType="Albums" />
  </div>
);

export default App;
