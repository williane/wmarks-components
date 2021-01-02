import React from 'react'
import { Label, Content, Input } from './style'

function Field({ label, placeholder, onChange }) {
  return (
    <Label>
      <Content>{label}</Content>
      <Input type="text" placeholder={placeholder} onChange={onChange} />
    </Label>
  )
}

export default Field
