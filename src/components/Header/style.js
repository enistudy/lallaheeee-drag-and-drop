import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 5rem;
  height: 5rem;
  padding: 1rem 1rem;
`;

const Li = styled.li`
  display: inline;
  padding: 0 4rem;
`;

const A = styled(Link)`
  & {
    line-height: 5rem;
    color: #4a4c88;
    font-weight: bold;
    text-transform: uppercase;
    opacity: 0.7;
  }

  &:hover {
    opacity: 1;
  }
`;

export {
  Header,
  Logo,
  Li,
  A,
};
