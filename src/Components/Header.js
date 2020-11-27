import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: rgba(20, 20, 20, 1);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 1.2em;
  width: 300px;
  right: 0;
`;

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 50vw;
  @media screen and (min-width: 768px) {
    width: 20vw;
  }
`;

const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50px;
  font-weight: 600;
  border-bottom: 5px solid ${(props) => (props.current ? "red" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  &:hover {
    border-bottom: 5px solid black;
    transition: border-bottom 0.5s ease-in-out;
  }
`;

const SLink = styled(Link)`
  &:hover {
    cursor: e-resize;
  }
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Logo>
      <SLink to="/">THE POSTERS</SLink>
    </Logo>
    <Nav>
      <NavItem current={pathname === "/movie"}>
        <SLink to="/movie">Movie</SLink>
      </NavItem>
      <NavItem current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </NavItem>
      <NavItem current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </NavItem>
    </Nav>
  </Header>
));
