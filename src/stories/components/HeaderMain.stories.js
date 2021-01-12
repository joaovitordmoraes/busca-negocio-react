import React from 'react'
import HeaderMain from '../../components/HeaderMain'
import LogoMain from '../../components/LogoMain'
import IconSearch from '../../components/IconSearch'

export default {
  title: 'Components/HeaderMain',
  component: HeaderMain
}

export const Default = () => (
  <HeaderMain>
    <LogoMain />
    <IconSearch />
  </HeaderMain>
)
