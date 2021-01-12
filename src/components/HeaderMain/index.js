import styled from 'styled-components'
import IconSearch from '../IconSearch'
import LogoMain from '../LogoMain'

const HeaderMain = styled.header`
  background-color: #3c5268;
  display: flex;
  justify-content: space-between;
  padding: var(--size-three) var(--size-three) var(--size-four)
    var(--size-three);

  & > ${LogoMain}, & > ${IconSearch} {
    width: 24px;
  }
`

export default HeaderMain
