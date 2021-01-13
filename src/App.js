import React from 'react'
import HeaderMain from './components/HeaderMain'
import IconSearch from './components/IconSearch'
import LogoMain from './components/LogoMain'
import ServiceFilter from './components/ServiceFilter'
import ButtonAdd from './components/ButtonAdd'

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>

      <ServiceFilter />

      <ButtonAdd title="Insira o seu negócio" />
    </>
  )
}

export default App
