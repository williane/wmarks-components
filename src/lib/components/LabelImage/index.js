import React from 'react'
import { Wrapper, Text } from './style'

function LabelImage({
  backgroundColor,
  color,
  shadowColor,
  children,
  borderColor
}) {
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      shadowColor={shadowColor}
      borderColor={borderColor}
    >
      <Text color={color}>{children}</Text>
    </Wrapper>
  )
}

export default LabelImage
