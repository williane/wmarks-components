import styled from 'styled-components'
import { Title as toolsHeading, TextShadow } from '../../Styles/Tools'
import { palette } from '../../index'

const Title = styled.h1`
  ${toolsHeading};
  color: ${({ color }) => (color ? palette[color] : 'var(--color-second)')};
  ${TextShadow.smallest(({ shadowColor }) =>
    shadowColor ? palette[shadowColor] : 'var(--color-first)'
  )};
  text-align: center;
  margin-bottom: var(--gap-smallest);
`

export default Title
