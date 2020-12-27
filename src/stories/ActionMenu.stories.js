import React from 'react'
import { ActionMenu } from '../lib'
import pageBuilder from '../lib/assets/images/pageBuilder.png'

export default {
  title: 'Components/ActionMenu',
  component: ActionMenu
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
  children: 'Create Page Builder'
}
