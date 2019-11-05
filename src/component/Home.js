import React from "react";
import Header from "./Header";
import styled from "styled-components";

const About = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Intro = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 35px;
  font-weight: bold;
  margin-top: 30px;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <About>
          <Intro>Check Your Repo Easily!</Intro>
        </About>
      </>
    );
  }
}

export default Home;
