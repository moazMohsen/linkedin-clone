import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import firebase from "firebase/compat/app";
import { postArticalAPI } from "../redux/actions";
import {
  BsFillXCircleFill,
  BsFillCameraVideoFill,
  BsFillCameraFill,
  BsFillChatTextFill,
} from "react-icons/bs";
import { connect } from "react-redux";

const PostModel = (props) => {
  const [editorText, setEditorText] = useState("");
  const [assetArea, setAssetArea] = useState("");
  const [shareImg, setShareImg] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const handelModel = (e) => {
    if (e.target.className.includes("overlay")) {
      props.handelModel();
    }
  };

  const handelChange = (e) => {
    const image = e.target.files[0];
    if (image === " " || image === undefined) {
      alert(`No image the file is ${typeof image}`);
      return;
    }
    setShareImg(image);
  };

  const switchAssetArea = (area) => {
    setShareImg("");
    setVideoLink("");
    setAssetArea(area);
  };

  const postArtical = (e) => {
    e.preventDefault();

    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      image: shareImg,
      video: videoLink,
      user: props.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    props.postArtical(payload);
  };

  return (
    <>
      {props.showModel && (
        <Container onClick={handelModel} className="overlay">
          <Contnet>
            <Header>
              <h2>create a post</h2>
              <button onClick={props.handelModel}>
                <BsFillXCircleFill className="icon" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {props.user ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                {props.user ? (
                  <span>{props.user.displayName}</span>
                ) : (
                  <span>name</span>
                )}
              </UserInfo>
              <Editor>
                <textarea
                  placeholder="add post"
                  autoFocus={true}
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                />
                <UplodeImg>
                  {assetArea === "image" ? (
                    <>
                      <input
                        type="file"
                        name="image"
                        id="file"
                        style={{ display: "none" }}
                        onChange={handelChange}
                      />
                      <p>
                        <label htmlFor="file">select an image to share</label>
                      </p>
                      {shareImg && (
                        <img src={URL.createObjectURL(shareImg)} alt="img" />
                      )}
                    </>
                  ) : (
                    assetArea === "video" && (
                      <>
                        <input
                          type="text"
                          placeholder="add a video link"
                          value={videoLink}
                          onChange={(e) => {
                            setVideoLink(e.target.value);
                          }}
                        />
                        {videoLink && (
                          <ReactPlayer width={"100%"} src={videoLink} />
                        )}
                      </>
                    )
                  )}
                </UplodeImg>
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton>
                  <BsFillCameraVideoFill
                    onClick={() => switchAssetArea("image")}
                    className="icon"
                  />
                </AssetButton>
                <AssetButton>
                  <BsFillCameraFill
                    onClick={() => switchAssetArea("video")}
                    className="icon"
                  />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <BsFillChatTextFill className="icon" />
                  <span>anyone</span>
                </AssetButton>
              </ShareComment>
              <PostButton
                onClick={(e) => postArtical(e)}
                disabled={editorText ? false : true}
              >
                post
              </PostButton>
            </ShareCreation>
          </Contnet>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
`;
const Contnet = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.274);
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.486);
    border-radius: 5px;
    .icon {
      font-size: 18px;
    }
  }
`;
const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background-color: transparent;
  padding: 8px 12px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;
const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
  .icon {
    font-size: 18px;
  }
`;
const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    .icon {
      margin-right: 4px;
    }
  }
`;
const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding: 0 16px;
  background-color: ${(props) =>
    props.disabled ? "#0a66c2" : "# rgba(0, 0, 0, 0.5)"};
  color: #fff;
  text-transform: capitalize;
  font-weight: bold;
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#013972" : "rgba(0, 0, 0, 0.6)"};
  }
`;
const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    padding: 8px;
    input {
      padding: 5px;
      width: 100%;
      height: 35px;
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
`;
const UplodeImg = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;
const Spiner = styled.div``;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postArtical: (payload) => dispatch(postArticalAPI(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostModel);
