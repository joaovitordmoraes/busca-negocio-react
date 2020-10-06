import styled from 'styled-components';
import IconFilter from '../IconFilter';

export const ServiceFilterStyle = styled.nav`
  background-color: #3a4042;
  display: flex;
  align-items: center;
  padding: 10px 16px 8px 16px;

  & > ${IconFilter} {
    margin-right: 17px;
  }
`;

export const Label = styled.p`
  font-family: 'Comfortaa', cursive;
  font-size: 20px;
  font-weight: 300;
  color: #fffcee;
`;
