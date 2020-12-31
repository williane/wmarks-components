import styled from 'styled-components'
import { palette } from '../../index'

const Box = styled.article`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background: ${({ backgroundColor }) =>
    backgroundColor ? palette[backgroundColor] : 'var(--color-black-third)'};
  box-shadow: 4px 4px 0px
    ${({ shadowColor }) =>
      shadowColor ? palette[shadowColor] : 'var(--color-second)'};
  border-radius: 5px 5px 5px 5px;
  padding: var(--gap-small);
`

export default Box
