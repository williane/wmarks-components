import React from 'react'
import { Field } from '../lib'

export default {
  title: 'Components/Field',
  component: Field,
  argTypes: {
    onChange: { action: 'clicked' }
  }
}

const Template = (args) => <Field {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Name',
  required: false
}

export const Value = Template.bind({})
Value.args = {
  label: 'Name',
  value: 'Texto aqui',
  readOnly: true,
  required: true
}
