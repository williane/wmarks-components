import React from 'react'
import { Title, palette } from '../lib'

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    color: {
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

const Template = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Automatization Center',
  color: 'colorSecond',
  shadowColor: 'colorBlackThird'
}
