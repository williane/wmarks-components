import styled, { css } from 'styled-components'
import { Wrapper as WrapperStyles } from '../ActionMenu/style'

const hasMoreThanFour = ({ length }) =>
  length > 4 &&
  css`
    ${WrapperStyles} {
      width: 25rem;
      height: 20rem;

      & h2 {
        font-size: 1.5rem;
      }
    }
  `

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  height: 35%;

  ${hasMoreThanFour};
`
