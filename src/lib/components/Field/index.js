import React from 'react'
import { Label, Content, Input } from './style'

function Field({ label, placeholder }) {
  return (
    <Label>
      <Content>{label}</Content>
      <Input type="text" placeholder={placeholder} />
    </Label>
  )
}

export default Field
