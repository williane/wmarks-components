import React from 'react'
import { Field } from '../lib'

export default {
  title: 'Components/Field',
  component: Field
}

const Template = (args) => <Field {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Name'
}
