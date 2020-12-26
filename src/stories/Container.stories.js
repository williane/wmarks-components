import React from 'react'
import { Container, palette } from '../lib'

export default {
  title: 'Components/Container',
  component: Container,
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

const Template = (args) => <Container {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor: 'colorBlackThird',
  shadowColor: 'colorSecond'
}
