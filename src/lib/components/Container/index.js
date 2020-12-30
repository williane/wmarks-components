import styled from 'styled-components'
import { palette } from '../../index'

const Container = styled.div`
  display: inline-block;
  box-sizing: border-box;
  height: 80%;
  width: 100%;
  background: ${({ backgroundColor }) =>
    backgroundColor ? palette[backgroundColor] : 'var(--color-black-third)'};
  box-shadow: 4px 0px 0px
    ${({ shadowColor }) =>
      shadowColor ? palette[shadowColor] : 'var(--color-second)'};
  border-radius: 10px 10px 0px 0px;
  padding: var(--gap-smallest);
`

export default Container
