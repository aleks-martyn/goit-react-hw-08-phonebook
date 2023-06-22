import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  :nth-child(2n + 1) {
    margin-right: 20px;
  }
`;
