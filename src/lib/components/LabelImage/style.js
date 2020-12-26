import styled from 'styled-components'
import { palette } from '../../index'
import { Subtitle as toolsHeading, TextShadow } from '../../Styles/Tools'

export const Wrapper = styled.div`
  background: ${({ backgroundColor }) =>
    backgroundColor ? palette[backgroundColor] : 'var(--color-black-third)'};
  box-shadow: 4px 0px 0px
    ${({ shadowColor }) =>
      shadowColor ? palette[shadowColor] : 'var(--color-second)'};
  border-radius: 0px 0px 10px 10px;
  padding: var(--gap-small);
`

export const Text = styled.h2`
  ${toolsHeading};
  color: ${({ color }) => (color ? palette[color] : 'var(--color-second)')};
  text-align: center;
  margin-bottom: var(--gap-smallest);
`