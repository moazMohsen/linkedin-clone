import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
const LeftSide = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a href="/">
            <Photo />
            <Link>
              welcome,{props.user ? props.user.displayName : "there!"}{" "}
            </Link>
          </a>
          <a href="/">
            <AddPhotoText>add photo text</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a href="/">
            <div>
              <span>connections</span>
              <span>grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            my items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a href="/">
          <span>groups</span>
        </a>
        <a href="/">
          <span>
            events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a href="/">
          <span>follow hashtag</span>
        </a>
        <a href="/">
          <span>descover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftSide;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  transform: 0.8s;
  position: relative;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 1px rgb(0 0 0 / 20%), 0 0 0 rgb(0 0 0 / 15%);
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-break: break-word;
  word-wrap: break-word;
`;
const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;
const Photo = styled.div`
  background: url("/images/photo.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff;
  box-sizing: border-box;
  background-clip: content-box;
  background-size: 70%;
  width: 72px;
  height: 72px;
  margin: -38px auto 12px;
  border: 2px solid #fff;
  border-radius: 50%;
`;
const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;
const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 600;
`;
const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;
  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:last-child {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
`;
const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 4px 12px 4px 12px;
    font: 12px;
    &:hover {
      color: #0a66c2;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
export default connect(mapStateToProps)(LeftSide);
