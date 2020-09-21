import React from 'react';
import IconFilter from '../IconFilter';
import { Label, ServiceFilterStyle } from './styles';

function ServiceFilter() {
  return (
    <ServiceFilterStyle>
      <IconFilter />
      <Label>Guia de serviços</Label>
    </ServiceFilterStyle>
  );
}

export default ServiceFilter;
