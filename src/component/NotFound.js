import React from "react";
import Header from "./Header";
import styled from "styled-components";

// Styled-components
const WrongCode = styled.span`
  color: white;
  font-size: 250px;
  font-weight: bold;
`;

const NotFoundSign = styled.span`
  color: #e5627e;
  font-size: 100px;
  font-weight: bold;
`;

const WrongMinder = styled.span`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// NotFound Component
function NotFound() {
  return (
    <>
      <Header />
      <WrongMinder>
        <NotFoundSign>Oops!</NotFoundSign>
        <WrongCode>404</WrongCode>
        <NotFoundSign>NotFound</NotFoundSign>
      </WrongMinder>
    </>
  );
}

export default NotFound;
