import React from "react";
import Header from "./Header";
import styled from "styled-components";

const wrongCode = styled.div`
  color: white;
  font-size: 50px;
`;

function NotFound() {
  return (
    <>
      <Header />
      <wrongCode>404</wrongCode>
      <div>NotFound</div>
    </>
  );
}

export default NotFound;
