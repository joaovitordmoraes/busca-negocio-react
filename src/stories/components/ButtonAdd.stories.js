import React from 'react'
import ButtonAdd from '../../components/ButtonAdd'

export default {
  title: 'Components/ButtonAdd',
  component: ButtonAdd
}

export const Template = args => {
  return <ButtonAdd title={args.title} />
}

export const Default = Template.bind({})
Default.args = {
  title: 'Button'
}
