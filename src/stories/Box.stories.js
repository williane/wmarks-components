import React from 'react'
import { Box, palette } from '../lib'

const colors = {
  control: {
    type: 'select',
    options: [...Object.keys(palette), false]
  }
}

export default {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    backgroundColor: colors,
    shadowColor: colors,
    borderColor: colors
  }
}

const Template = (args) => <Box {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor: 'colorBlackFourth',
  shadowColor: 'colorSecond',
  borderRadius: true
}

export const Border = Template.bind({})
Border.args = {
  backgroundColor: 'colorThird',
  shadowColor: 'colorSecond',
  borderColor: 'colorFirst',
  borderRadius: false
}
