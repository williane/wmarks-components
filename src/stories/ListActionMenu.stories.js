import React from 'react'
import { ListActionMenu } from '../lib'
import pageBuilder from '../lib/assets/images/pageBuilder.png'
import api from '../lib/assets/images/api.png'
import extension from '../lib/assets/images/extension.jpg'

export default {
  title: 'Components/ListActionMenu',
  component: ListActionMenu
}

const Template = (args) => <ListActionMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  actionMenus: [
    {
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
    },
    {
      backgroundColor: 'colorBlackThird',
      shadowColor: 'colorSecond',
      src: api,
      lBackgroundColor: 'colorFirst',
      color: 'colorBlackFirst',
      lShadowColor: 'colorSecond',
      borderColor: 'colorSecond',
      children: 'Api Travel Sequence',
      sizeHeight: '25',
      sizeWidth: '28'
    },
    {
      backgroundColor: 'colorBlackThird',
      shadowColor: 'colorSecond',
      src: extension,
      lBackgroundColor: 'colorFirst',
      color: 'colorBlackFirst',
      lShadowColor: 'colorSecond',
      borderColor: 'colorSecond',
      children: 'Extension Store',
      sizeHeight: '25',
      sizeWidth: '28'
    }
  ]
}

export const sixMenus = Template.bind({})
sixMenus.args = {
  actionMenus: [
    {
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
    },
    {
      backgroundColor: 'colorBlackThird',
      shadowColor: 'colorSecond',
      src: api,
      lBackgroundColor: 'colorFirst',
      color: 'colorBlackFirst',
      lShadowColor: 'colorSecond',
      borderColor: 'colorSecond',
      children: 'Api Travel Sequence',
      sizeHeight: '25',
      sizeWidth: '28'
    },
    {
      backgroundColor: 'colorBlackThird',
      shadowColor: 'colorSecond',
      src: extension,
      lBackgroundColor: 'colorFirst',
      color: 'colorBlackFirst',
      lShadowColor: 'colorSecond',
      borderColor: 'colorSecond',
      children: 'Extension Store',
      sizeHeight: '25',
      sizeWidth: '28'
    },
    {
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
    },
    {
      backgroundColor: 'colorBlackThird',
      shadowColor: 'colorSecond',
      src: api,
      lBackgroundColor: 'colorFirst',
      color: 'colorBlackFirst',
      lShadowColor: 'colorSecond',
      borderColor: 'colorSecond',
      children: 'Api Travel Sequence',
      sizeHeight: '25',
      sizeWidth: '28'
    },
    {
      backgroundColor: 'colorBlackThird',
      shadowColor: 'colorSecond',
      src: extension,
      lBackgroundColor: 'colorFirst',
      color: 'colorBlackFirst',
      lShadowColor: 'colorSecond',
      borderColor: 'colorSecond',
      children: 'Extension Store',
      sizeHeight: '25',
      sizeWidth: '28'
    }
  ]
}
