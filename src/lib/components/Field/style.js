import styled from 'styled-components'
import { Body1, Body2 } from '../../Styles/Tools'

export const Content = styled.span`
  margin-bottom: var(--gap-smallest);
  color: var(--color-third);
  font-weight: bold;
`

export const Input = styled.input`
  ${Body2};
  background-color: var(--color-third);
  color: var(--color-black-first);
  padding: var(--gap-small);
  border: none;
  border-radius: 5px;
`

export const Label = styled.label`
  ${Body1};
  display: flex;
  flex-direction: column;
  margin-bottom: var(--gap-small);
`
