import React from 'react'
import { ActionMenu, palette } from '../lib'
import pageBuilder from '../lib/assets/images/pageBuilder.png'

export default {
  title: 'Components/ActionMenu',
  component: ActionMenu,
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
    },
    lBackgroundColor: {
      control: {
        type: 'select',
        options: Object.keys(palette)
      }
    },
    lShadowColor: {
      control: {
        type: 'select',
        options: Object.keys(palette)
      }
    },
    borderColor: {
      control: {
        type: 'select',
        options: Object.keys(palette)
      }
    }
  }
}

const Template = (args) => <ActionMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor: 'colorBlackThird',
  shadowColor: 'colorSecond',
  src: pageBuilder,
  lBackgroundColor: 'colorFirst',
  color: 'colorBlackFirts',
  lShadowColor: 'colorSecond',
  borderColor: 'colorSecond',
  children: 'Create Page Builder'
}
