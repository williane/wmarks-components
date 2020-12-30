import React from 'react'
import { ActionMenu, palette } from '../lib'
import pageBuilder from '../lib/assets/images/pageBuilder.png'
import api from '../lib/assets/images/api.png'
import extension from '../lib/assets/images/extension.jpg'

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

export const PageBuilder = Template.bind({})
PageBuilder.args = {
  backgroundColor: 'colorBlackThird',
  shadowColor: 'colorSecond',
  src: pageBuilder,
  lBackgroundColor: 'colorFirst',
  color: 'colorBlackFirst',
  lShadowColor: 'colorSecond',
  borderColor: 'colorSecond',
  children: 'Create Page Builder',
  sizeHeight: '25',
  sizeWidth: '28'
}

export const Api = Template.bind({})
Api.args = {
  backgroundColor: 'colorBlackThird',
  shadowColor: 'colorSecond',
  src: api,
  lBackgroundColor: 'colorFirst',
  color: 'colorBlackFirst',
  lShadowColor: 'colorSecond',
  borderColor: 'colorSecond',
  children: 'Create Page Builder',
  sizeHeight: '25',
  sizeWidth: '28'
}

export const Extension = Template.bind({})
Extension.args = {
  backgroundColor: 'colorBlackThird',
  shadowColor: 'colorSecond',
  src: extension,
  lBackgroundColor: 'colorFirst',
  color: 'colorBlackFirst',
  lShadowColor: 'colorSecond',
  borderColor: 'colorSecond',
  children: 'Create Page Builder',
  sizeHeight: '25',
  sizeWidth: '28'
}
