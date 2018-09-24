import React from 'react';

import withRoot from './withRoot';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Filters />
    </React.Fragment>
  );
}

export default withRoot(App);
