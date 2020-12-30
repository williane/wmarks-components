import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ sizeHeight }) => (sizeHeight ? sizeHeight + 'rem' : '25rem')};
  width: ${({ sizeWidth }) => (sizeWidth ? sizeWidth + 'rem' : '28rem')};

  &:hover {
    transform: scale(1.1);
  }
`
