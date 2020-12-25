import { css } from 'styled-components'

const small = css`
  text-shadow: 0.5rem 0.5rem 0px var(--color-black-first);
`

const medium = css`
  text-shadow: 1rem 1rem 0px var(--color-black-first);
`

const smallest = (color) => css`
  text-shadow: 0px 0.25rem 0px ${color};
`

export const TextShadow = {
  small,
  medium,
  smallest
}
