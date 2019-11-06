import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Demo from "../img/demo.gif";

// Styled-components
const About = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 3px;
`;

const H1 = styled.div`
  font-size: 45px;
  color: white;
`;

const H2 = styled.div`
  font-size: 20px;
  color: #e5627e;
  margin-top: 30px;
  line-height: 1.5em;
`;

const Intro = styled.div`
  width: 100%;
  height: 100%;
  font-weight: bold;
  margin-top: 30px;
`;

const DemoBackground = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 7px 9px 28px 1px rgba(201, 201, 201, 0.92);
  -moz-box-shadow: 7px 9px 28px 1px rgba(201, 201, 201, 0.92);
  box-shadow: 7px 9px 28px 1px rgba(201, 201, 201, 0.92);
`;

// Home Component
function Home() {
  return (
    <>
      <Header />
      <About>
        <Intro>
          <H1>Check Your Repo Easily!</H1>
          <H2>Just Type In The GitHub Account You Wanna Search!</H2>
        </Intro>
        <DemoBackground>
          <img src={Demo} alt="demo-video" />
        </DemoBackground>
      </About>
    </>
  );
}

export default Home;
