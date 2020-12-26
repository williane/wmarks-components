import React from 'react'
import { Icons } from '../lib'
import back from '../lib/assets/icons/back.png'
import home from '../lib/assets/icons/home.png'

export default {
  title: 'Components/Icons',
  component: Icons
}

const Template = (args) => <Icons {...args} />

export const Home = Template.bind({})
Home.args = {
  src: home
}

export const Back = Template.bind({})
Back.args = {
  src: back
}
