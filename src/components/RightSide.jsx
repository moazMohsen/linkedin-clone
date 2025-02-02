import React from "react";
import styled from "styled-components";

const RightSide = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <a href="/">
              <Avatar />
            </a>
            <div>
              <span>#linkdin</span>
              <button>follow</button>
            </div>
          </li>
          <li>
            <a href="/">
              <Avatar />
            </a>
            <div>
              <span>#video</span>
              <button>follow</button>
            </div>
          </li>
        </FeedList>
        <Rcommendation>
          view all roommendations
          <img src="/images/right-icon.svg" alt="" />
        </Rcommendation>
      </FollowCard>
      <BannerCard>
        <img src="images/linkdin-man.jpg" alt="" />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightSide;
`;
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 1px rgb(0 0 0 / 20%), 0 0 0 rgb(0 0 0 / 15%);
  padding: 12px;
`;
const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;
const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
      cursor: pointer;
    }
  }
`;
const Avatar = styled.div`
  background: url("/images/Hashtag.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;
const Rcommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export default RightSide;
