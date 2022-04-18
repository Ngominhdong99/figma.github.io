import React from "react";
import Login from "./Login";
import { data } from "../data/loginData";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Home from "./Home";
import Validate from "./Validate";
import About from "./nav-components/About";
import { useSelector } from "react-redux";
import Profile from "./nav-components/Profile";
import Form from "./nav-components/Form";

function Container() {
  const [error, setError] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState([]);
  const [isHide, setIsHide] = React.useState();

  const state = useSelector((state) => state.form);

  let navigate = useNavigate();
  const handleSubmit = (inputValue) => {
    data.map((user) => {
      if (
        user.userName === inputValue.userName &&
        user.password === inputValue.userPassword
      ) {
        setCurrentUser(user);
        localStorage.setItem("accessToken", true);
        navigate("/home");
      }
    });
  };
  return (
    <>
      <Routes>
        <Route
          path="home"
          element={
            <Home
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              isHide={isHide}
              setIsHide={setIsHide}
            />
          }
        >
          <Route path="about" element={<About setError={setError} />} />
          <Route
            path="profile"
            element={<Profile currentUser={currentUser} />}
          />
          <Route
            path="form"
            element={<Form state={state} setIsHide={setIsHide} />}
          />
        </Route>
        <Route
          path="/"
          element={
            <Login
              data={data}
              error={error}
              setError={setError}
              handleSubmit={handleSubmit}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default Container;
