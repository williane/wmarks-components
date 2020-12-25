import styled, { css } from 'styled-components'
import { palette } from '../../index'

const hasMedium = ({ medium }) =>
  medium &&
  css`
    padding-top: var(--gap-medium);
    padding-bottom: var(--gap-medium);
  `

const hasBig = ({ big }) =>
  big &&
  css`
    padding-top: var(--gap-big);
    padding-bottom: var(--gap-big);
  `

const hasBiggest = ({ biggest }) =>
  biggest &&
  css`
    padding-top: var(--gap-biggest);
    padding-bottom: var(--gap-biggest);
  `

const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? palette[backgroundColor] : 'var(--color-first)'};
  border-bottom: 0.5rem solid
    ${({ borderColor }) =>
      borderColor ? palette[borderColor] : 'var(--color-black-first)'};
  padding: var(--gap-small) var(--gap-medium);

  ${hasMedium};
  ${hasBig};
  ${hasBiggest};
`

export default Section
