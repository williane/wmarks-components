import React from 'react'
import { Image } from '../lib'
import pageBuilder from '../lib/assets/images/pageBuilder.png'
import api from '../lib/assets/images/api.png'
import extension from '../lib/assets/images/extension.jpg'

export default {
  title: 'Components/Image',
  component: Image
}

const Template = (args) => <Image {...args} />

export const PageBuilder = Template.bind({})
PageBuilder.args = {
  src: pageBuilder
}

export const Api = Template.bind({})
Api.args = {
  src: api
}

export const Extension = Template.bind({})
Extension.args = {
  src: extension
}
