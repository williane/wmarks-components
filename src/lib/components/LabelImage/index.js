import React from 'react'
import { Wrapper, Text } from './style'

function LabelImage({ backgroundColor, color, shadowColor, children }) {
  return (
    <Wrapper backgroundColor={backgroundColor} shadowColor={shadowColor}>
      <Text color={color}>{children}</Text>
    </Wrapper>
  )
}

export default LabelImage
