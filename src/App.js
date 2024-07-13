// tools
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import { useEffect } from "react";
import { getUserAuth } from "./redux/actions";
import { connect } from "react-redux";

//
function App(props) {

  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={
            <>
              <Header />
              <Home />
            </>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
