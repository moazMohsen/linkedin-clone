import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  BsCameraReelsFill,
  BsFillCameraFill,
  BsCalendarWeekFill,
  BsChatLeftDotsFill,
  BsDot,
} from "react-icons/bs";
import PostModel from "./PostModel";
import { connect } from "react-redux";
import { getArticaleAPI } from "../redux/actions";
import ReactPlayer from "react-player";

const MainSide = (props) => {
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    props.getArticale();
  }, []);

  const handelModel = () => {
    setShowModel(!showModel);
  };

  return (
    <>
      {props.articles.length === 0 ? (
        <p>there is no artical</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
              <button
                disabled={props.loading ? true : false}
                onClick={handelModel}
              >
                start a post
              </button>
            </div>
            <div>
              <button>
                <BsFillCameraFill className="icon" />
                <span>photo</span>
              </button>
              <button>
                <BsCameraReelsFill className="icon" />
                <span>video</span>
              </button>
              <button>
                <BsCalendarWeekFill className="icon" />
                <span>event</span>
              </button>
              <button>
                <BsChatLeftDotsFill className="icon" />
                <span>artical</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {props.loading && <img src="/images/spiner.svg" alt="" />}
            {props.articles.length > 0 &&
              props.articles.map((article) => {
                return (
                  <Article>
                    <SharedActor>
                      <a href="/">
                        <img src={article.actor.image} alt="" />
                        <div>
                          <span>{article.actor.title}</span>
                          <span>{article.actor.description}</span>
                          <span>
                            {article.actor.date.toDate().toLocaleDateString()}
                          </span>
                        </div>
                      </a>
                      <button>
                        <span>
                          <BsDot />
                        </span>
                        <span>
                          <BsDot />
                        </span>
                        <span>
                          <BsDot />
                        </span>
                      </button>
                    </SharedActor>
                    <Discription>{article.description}</Discription>
                    <ShareImg>
                      <a href="/">
                        {!article.sharedImg && article.video ? (
                          <ReactPlayer width={"100%"} url={article.video} />
                        ) : (
                          article.sharedImg && (
                            <img src={article.sharedImg} alt="" />
                          )
                        )}
                      </a>
                    </ShareImg>
                    <SocialCounts>
                      <li>
                        <button>
                          <img src="/images/save.png" alt="" />
                          <img src="/images/like.png" alt="" />
                          <span>75</span>
                        </button>
                      </li>
                      <li>
                        <a href="/">2 comments</a>
                      </li>
                    </SocialCounts>
                    <SocialActtions>
                      <button>
                        <img src="/images/like.png" alt="" />
                        <span>like</span>
                      </button>
                      <button>
                        <img src="/images/share.png" alt="" />
                        <span>share</span>
                      </button>
                      <button>
                        <img src="/images/comment.png" alt="" />
                        <span>comment</span>
                      </button>
                      <button>
                        <img src="/images/send.png" alt="" />
                        <span>send</span>
                      </button>
                    </SocialActtions>
                  </Article>
                );
              })}
          </Content>
          {showModel && (
            <PostModel showModel={showModel} handelModel={handelModel} />
          )}
        </Container>
      )}{" "}
    </>
  );
};

const Container = styled.div`
  grid-area: mainSide;
`;

const CommomCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 1px rgb(0 0 0 / 20%), 0 0 0 rgb(0 0 0 / 15%);
`;

const ShareBox = styled(CommomCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: #fff;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      text-transform: capitalize;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: bold;
      gap: 8px;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        cursor: pointer;
        background-color: #fff;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        .icon {
          font-size: 22px;
        }
        &:nth-child(1) .icon {
          color: #3d5aff;
        }
        &:nth-child(2) .icon {
          color: #3dd2ff;
        }
        &:nth-child(3) .icon {
          color: #ffdb3d;
        }
        &:nth-child(4) .icon {
          color: #ffab3d;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;
const Article = styled(CommomCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
  padding-right: 40px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 8px;
  padding: 12px 16px 0;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: bolder;
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;

    span {
      font-size: 33px;
      margin: 0 -11.9px;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;
const Discription = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;
const ShareImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  align-items: center;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      align-items: center;
      background-color: #ffffff;
      border: 1px solid #c9c9c9;
      border-radius: 5px;
      img {
        width: 18px;
        height: 100%;
        margin: 1px 5px;
      }
    }
  }
`;

const SocialActtions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  gap: 5px;
  button {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #c9c9c9;
    border-radius: 5px;
    padding: 8px;
    color: #0a66c2;
    cursor: pointer;
    img {
      width: 22px;
      height: 100%;
      margin: 0 5px;
    }
  }
`;
const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;
const mapStateToProps = (state) => ({
  user: state.userState.user,
  loading: state.articalState.loading,
  articles: state.articalState.articles,
});

const mapDispatchToProps = (dispatch) => ({
  getArticale: () => dispatch(getArticaleAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSide);
