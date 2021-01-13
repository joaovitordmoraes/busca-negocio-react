import React from 'react'
import Reset from '../src/styles/generic/reset'
import Base from '../src/styles/elements/base';
import Settings from '../src/styles/settings/settings';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'Dark',
    values: [{
      name: 'Dark',
      value: '#3c5268'
    }]
  }
}

export const decorators = [(Story) => 
  <>
    <Reset />
    <Settings />
    <Base />
    <Story/>
  </>
];