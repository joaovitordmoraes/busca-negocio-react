import React from 'react';
import HeaderMain from './components/HeaderMain';
import IconSearch from './components/IconSearch';
import LogoMain from './components/LogoMain';
import ServiceFilter from './components/ServiceFilter';

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>

      <ServiceFilter />
    </>
  );
}

export default App;
