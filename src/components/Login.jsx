import React from "react";
import { Navigate } from "react-router-dom";

import { connect } from "react-redux";
import styled from "styled-components";
import { signinAPI } from "../redux/actions";

const Login = (props) => {
  return (
    <Container>
      {props.user && <Navigate to="/home" />}
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="linkd in logo" />
        </a>
        <div>
          <Join>join now</Join>
          <SignIn>sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="/images/google.svg" alt="" />
            sign in with google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div``;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 16px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
  & > div {
    display: flex;
    gap: 10px;
  }
`;

const Join = styled.a`
  padding: 10px 12px;
  border-radius: 8px;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;
const SignIn = styled(Join)`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  background-color: rgba(0, 0, 0, 0);
  padding: 10px 20px;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
  }
`;
const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  align-items: center;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  min-height: 700px;
  width: 100%;
  max-width: 1128px;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
const Hero = styled.div`
  width: 100%;
  h1 {
    width: 55%;
    font-size: 56px;
    text-transform: capitalize;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      height: initial;
      position: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 480px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%),
    inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  cursor: pointer;
  z-index: 0;
  transition: all 0.2s;
  font-size: 20px;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signinAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
