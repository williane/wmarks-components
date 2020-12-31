import React from 'react'
import { Button, palette } from '../lib'

const colors = {
  control: {
    type: 'select',
    options: [...Object.keys(palette), false]
  }
}

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: colors,
    color: colors,
    shadowColor: colors,
    borderColor: colors
  }
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'delete',
  backgroundColor: 'colorFirst',
  color: 'colorBlackFirst',
  shadowColor: 'colorBlackFourth',
  borderColor: 'colorBlackFirst',
  borderRadius: true,
  blur: true,
  medium: false,
  small: true
}

export const Next = Template.bind({})
Next.args = {
  children: 'NEXT',
  backgroundColor: 'colorSecond',
  color: 'colorThird',
  borderColor: 'colorSecond',
  borderRadius: true,
  blur: false,
  medium: false,
  small: true
}

export const Square = Template.bind({})
Square.args = {
  children: 'Sem border radius',
  backgroundColor: 'colorFirst',
  color: 'colorBlackFirst',
  borderColor: 'colorFirst',
  shadowColor: 'colorSecond',
  borderRadius: false,
  blur: false,
  medium: false,
  small: true
}
