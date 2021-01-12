import styled from 'styled-components'
import IconFilter from '../IconFilter'

export const ServiceFilterStyle = styled.nav`
  background-color: #3a4042;
  display: flex;
  align-items: center;
  padding: var(--size-two) var(--size-three) var(--size-one) var(--size-three);

  & > ${IconFilter} {
    margin-right: var(--size-three);
  }
`

export const Label = styled.p`
  font-family: 'Comfortaa', cursive;
  font-size: 20px;
  font-weight: 300;
  color: #fffcee;
`
