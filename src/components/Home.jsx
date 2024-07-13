import React from "react";
import styled from "styled-components";
import LeftSide from "./LeftSide";
import MainSide from "./MainSide";
import RightSide from "./RightSide";

const Home = () => {
  return (
    <Container>
      <Section>
        <h5>
          <a href="/">hiring in a urry?-</a>
        </h5>
        <p>
          find talented in record time with upwork and keep business moving.
        </p>
      </Section>
      <Layout>
        <LeftSide></LeftSide>
        <MainSide></MainSide>
        <RightSide></RightSide>
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 65px;
  max-width: 100%;
  text-transform: capitalize;
`;
// const Content = styled.div`
//   max-width: 1128px;
//   margin: 0 auto;
// `;
const Section = styled.div`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  gap: 8px;
  h5 {
    a {
      color: #0a66c2;
      font-weight: bold;
    }
  }
  p {
    font-size: 14px;
    color: #434679;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftSide mainSide rightSide";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  gap: 25px;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
export default Home;
