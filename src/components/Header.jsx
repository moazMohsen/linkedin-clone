import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { signOutAPI } from "../redux/actions";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="/">
                <img src="/images/nav-home.svg" alt="" />
                <span>home</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-jobs.svg" alt="" />
                <span>jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-messaging.svg" alt="" />
                <span>messaging</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-network.svg" alt="" />
                <span>my network</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-notifications.svg" alt="" />
                <span>notifications</span>
              </a>
            </NavList>
            <User>
              <a href="/">
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>
                  my
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
              <SignOut onClick={() => props.signOut()}>
                <a href="/">sign out</a>
              </SignOut>
            </User>
            <Work>
              <a href="/">
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  padding: 0 24px;
  width: 100vw;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translatey(-50%);
  font-size: 0;
  pointer-events: none;
  display: flex;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
  }
`;
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: rgba(0, 0, 0, 0.9);
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    background: transparent;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    span {
      text-transform: capitalize;
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      font-weight: 600;
      @media (max-width: 768px) {
        min-width: 70px;
      }
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  position: relative;
`;
const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background-color: #ffffff;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition: 0.2s;
  text-align: center;
  box-shadow: -1px 4px 6px 0px rgb(0 0 0 / 10%);
  z-index: 1000;
  display: none;
  & > a {
    color: rgba(0, 0, 0, 0.7);
    text-transform: capitalize;
    font-weight: 600;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
