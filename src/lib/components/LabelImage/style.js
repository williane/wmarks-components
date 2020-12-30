import styled, { css } from 'styled-components'
import { palette } from '../../index'
import { Subtitle as toolsHeading } from '../../Styles/Tools'

export const Wrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
  background: ${({ backgroundColor }) =>
    backgroundColor ? palette[backgroundColor] : 'var(--color-black-third)'};
  box-shadow: 4px 4px 0px
    ${({ shadowColor }) =>
      shadowColor ? palette[shadowColor] : 'var(--color-second)'};
  border-radius: 0px 0px 10px 10px;
  border-top: 0.3rem solid
    ${({ borderColor }) =>
      borderColor ? palette[borderColor] : 'var(--color-second)'};
  padding: var(--gap-small);
`

export const Text = styled.h2`
  ${toolsHeading};
  color: ${({ color }) => (color ? palette[color] : 'var(--color-second)')};
  text-align: center;
`
