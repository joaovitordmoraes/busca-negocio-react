import styled from 'styled-components';
import IconFilter from '../IconFilter';

const ServiceFilter = styled.nav`
  background-color: #3a4042;
  display: flex;
  padding: 0 16px;

  & > ${IconFilter} {
    margin-right: 17px;
  }
`;

export default ServiceFilter;
