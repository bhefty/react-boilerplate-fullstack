import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const IMG = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`

export default IMG
