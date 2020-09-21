import React from 'react';
import HeaderMain from './components/HeaderMain';
import IconFilter from './components/IconFilter';
import IconSearch from './components/IconSearch';
import LogoMain from './components/LogoMain';
import { ServiceFilter, Label } from './components/ServiceFilter';

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>
      <ServiceFilter>
        <IconFilter />
        <Label>Guia de serviços</Label>
      </ServiceFilter>
    </>
  );
}

export default App;
