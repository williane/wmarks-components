import styled, { css } from 'styled-components'
import { palette } from '../../Styles/Settings/Colors/palette'
import { Title, Subtitle, Body2 } from '../../Styles/Tools/index'

const changeColor = ({ color, backgroundColor, borderColor }) => css`
  color: ${palette[color]};
  background-color: ${palette[backgroundColor]};
  border: 1px solid ${palette[borderColor]};
`

const shadowBox = ({ shadowColor }) =>
  shadowColor &&
  css`
    box-shadow: 4px 4px ${palette[shadowColor]};
  `

const hasBorderRadius = ({ borderRadius }) =>
  borderRadius &&
  css`
    border-radius: 5px;
  `

const hasBlur = ({ blur, shadowColor }) =>
  blur &&
  css`
    box-shadow: 4px 4px 4px ${palette[shadowColor]};
  `

const hasMedium = ({ medium }) =>
  medium &&
  css`
    ${Subtitle}
  `

const hasSmall = ({ small }) =>
  small &&
  css`
    ${Body2}
    padding: var(--gap-smallest);
  `

const Button = styled.button`
  background-color: var(--color-first);
  ${Title};
  padding: var(--gap-small);
  color: var(--color-third);
  text-decoration: none;
  text-align: center;

  &:hover {
    transform: translateY(calc(var(--gap-smallest) / -2)) scale(1.03);
  }
  ${hasBorderRadius};
  ${shadowBox};
  ${hasBlur};
  ${changeColor};
  ${hasMedium};
  ${hasSmall};
`

export default Button
