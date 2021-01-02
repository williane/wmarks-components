import React from 'react'
import { Label, Content, Input } from './style'

function Field({ label, placeholder, onChange, value, readOnly, required }) {
  return (
    <Label>
      <Content>{label}</Content>
      {value ? (
        <Input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          readOnly={readOnly}
          required={required}
        />
      ) : (
        <Input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          required={required}
        />
      )}
    </Label>
  )
}

export default Field
