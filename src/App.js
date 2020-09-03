import React from 'react';
import HeaderMain from './components/HeaderMain';
import IconFilter from './components/IconFilter';
import IconSearch from './components/IconSearch';
import LogoMain from './components/LogoMain';
import ServiceFilter from './components/ServiceFilter';
import TitleMain from './components/TitleMain';

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>
      <ServiceFilter>
        <IconFilter />
        <TitleMain>Guia de serviços</TitleMain>
      </ServiceFilter>
    </>
  );
}

export default App;
