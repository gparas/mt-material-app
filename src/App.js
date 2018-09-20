import React from 'react';

import withRoot from './withRoot';
import Header from './components/Header/Header';
import Filter from './components/Filters/Filter';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Filter />
    </React.Fragment>
  );
}

export default withRoot(App);
