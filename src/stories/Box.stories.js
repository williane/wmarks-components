import React from 'react'
import { Box, palette } from '../lib'

export default {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    backgroundColor: {
      control: {
        type: 'select',
        options: Object.keys(palette)
      }
    },
    shadowColor: {
      control: {
        type: 'select',
        options: Object.keys(palette)
      }
    }
  }
}

const Template = (args) => <Box {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor: 'colorBlackThird',
  shadowColor: 'colorSecond'
}
