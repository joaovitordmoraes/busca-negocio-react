import styled from 'styled-components';
import IconSearch from '../IconSearch';
import LogoMain from '../LogoMain';

const HeaderMain = styled.header`
  background-color: #3c5268;
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 26px 16px;

  & > ${LogoMain}, & > ${IconSearch} {
    width: 24px;
  }
`;

export default HeaderMain;
