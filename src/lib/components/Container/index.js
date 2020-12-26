import styled from 'styled-components'
import { palette } from '../../index'

const Container = styled.div`
  box-sizing: border-box;
  min-width: 20vw;
  min-height: 30vh;
  background: ${({ backgroundColor }) =>
    backgroundColor ? palette[backgroundColor] : 'var(--color-black-third)'};
  box-shadow: 4px 0px 0px
    ${({ shadowColor }) =>
      shadowColor ? palette[shadowColor] : 'var(--color-second)'};
  border-radius: 10px 10px 0px 0px;
  padding: var(--gap-small);
`

export default Container
