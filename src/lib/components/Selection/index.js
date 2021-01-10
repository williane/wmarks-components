import React from 'react'
import { Label, Content, Select, Options } from './style'

function Selection({ label, values, vertical }) {
  return (
    <Label vertical={vertical}>
      <Content>{label}</Content>
      <Select>
        {values.map((value) => (
          <Options key={'id_' + value} value={value}>
            {value}
          </Options>
        ))}
      </Select>
    </Label>
  )
}

export default Selection
