import React from 'react'
import { LabelImage, palette } from '../lib'

export default {
  title: 'Components/LabelImage',
  component: LabelImage,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'select',
        options: Object.keys(palette)
      }
    },
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

const Template = (args) => <LabelImage {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Create Page Builder',
  color: 'colorBlackFirst',
  shadowColor: 'colorSecond',
  backgroundColor: 'colorFirst'
}
