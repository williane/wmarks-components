import React from 'react'
import { Wrapper } from './style'
import Container from '../Container'
import Image from '../Image'
import LabelImage from '../LabelImage'

function ActionMenu({
  backgroundColor,
  shadowColor,
  src,
  lBackgroundColor,
  color,
  lShadowColor,
  children,
  borderColor
}) {
  return (
    <Wrapper>
      <Container backgroundColor={backgroundColor} shadowColor={shadowColor}>
        <Image src={src} />
      </Container>
      <LabelImage
        backgroundColor={lBackgroundColor}
        color={color}
        shadowColor={lShadowColor}
        borderColor={borderColor}
      >
        {children}
      </LabelImage>
    </Wrapper>
  )
}

export default ActionMenu
