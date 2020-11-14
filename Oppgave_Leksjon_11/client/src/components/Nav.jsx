import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
`;

const NavMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 0 20px;
  align-items: center;
`;

const NavMenuItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 0 20px;

  &:first-child {
    padding-left: 0;
  }

  & > a {
    color: ;
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 0;
    text-decoration: none;
    margin: 10px;

    &.active {
      color: #0c049e;
      border-bottom: 4px solid #0c049e;
    }
  }
`;

const Nav = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/" activeClassName="active">
          Hjem
        </NavLink>
        <NavLink exact to="/newpoll" activeClassName="active">
          Lag ny poll
        </NavLink>
        <NavLink exact to="/signup" activeClassName="active">
          Registrer bruker
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Nav;
