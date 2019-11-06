import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../src/logo.svg";
import styled from "styled-components";

// Styled-components
const StyledHeader = styled.div`
  width: 100%;
  height: 60px;
  background: white;
  display: flex;
  flex-diresction: row;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.div`
  background: white;
  display: flex;
  flex-diresction: row;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #e5627e;
  font-size: 16px;
  margin-right: 30px;
`;

const StyledIMG = styled.img`
  width: 80%;
  margin-left: 30px;
`;

// Header Component
function Header() {
  return (
    <>
      <StyledHeader>
        <Link to="/">
          <StyledIMG src={logo} />
        </Link>
        <Nav>
          <StyledNavLink to="/search"> Getting Started </StyledNavLink>
        </Nav>
      </StyledHeader>
    </>
  );
}

export default Header;
