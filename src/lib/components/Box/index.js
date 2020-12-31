import styled, { css } from 'styled-components'
import { palette } from '../../index'

const changeColor = ({ backgroundColor, shadowColor }) => css`
  background-color: ${palette[backgroundColor]};
  box-shadow: 4px 4px 0px ${palette[shadowColor]};
`
const hasBorder = ({ borderColor }) =>
  borderColor &&
  css`
    border: 5px solid ${palette[borderColor]};
  `
const hasBorderRadius = ({ borderRadius }) =>
  borderRadius &&
  css`
    border-radius: 5px;
  `

const Box = styled.article`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background: var(--color-black-third);
  box-shadow: 4px 4px 0px var(--color-second);
  padding: var(--gap-small);

  ${changeColor};
  ${hasBorder};
  ${hasBorderRadius};
`

export default Box
