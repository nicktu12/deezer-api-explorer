/* eslint-disable import/no-named-as-default, import/no-named-as-default-member */

import React from 'react';
import Controls from './Controls';
import SearchResultsHeader from './SearchResultsHeader';
import ReleaseList from './ReleaseList';
import './index.css';

const App = () => (
  <div className="App">
    <Controls />
    <SearchResultsHeader />
    <ReleaseList releaseType="Albums" />
  </div>
);

export default App;
