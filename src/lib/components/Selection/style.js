import styled, { css } from 'styled-components'
import { Body1, Body2 } from '../../Styles/Tools'

const hasVertical = ({ vertical }) =>
  vertical &&
  css`
    flex-direction: row;
  `

export const Content = styled.span`
  margin-bottom: var(--gap-smallest);
  color: var(--color-black-first);
  font-weight: bold;
`

export const Select = styled.select`
  ${Body2};
  background-color: var(--color-third);
  color: var(--color-black-first);
  padding: var(--gap-smallest);
  border: none;
  border-radius: 5px;
`

export const Options = styled.option``

export const Label = styled.label`
  ${Body1};
  display: flex;
  flex-direction: column;
  margin-bottom: var(--gap-small);

  ${hasVertical};
`
