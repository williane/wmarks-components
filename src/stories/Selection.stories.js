import React from 'react'
import { Selection } from '../lib'

const values = ['true', 'false']

export default {
  title: 'Components/Selection',
  component: Selection
}

const Template = (args) => <Selection {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'PK:',
  values: [...values],
  vertical: true
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  label: 'PK:',
  values: [...values],
  vertical: false
}
