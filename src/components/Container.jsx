import React from "react";
import Login from "./Login";
import { data } from "../data/loginData";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./nav-components/About";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/actions/action";

import Profile from "./nav-components/Profile";
import Form from "./nav-components/Form";
import Required from "./nav-components/Required";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Container() {
  const [error, setError] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem("currentUser"))
      ? JSON.parse(localStorage.getItem("currentUser"))
      : {}
  );
  const [isHide, setIsHide] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [userPerPage] = React.useState(4);
  const [menuFocus, setMenuFocus] = React.useState("home");

  const state = useSelector((state) => state.form);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (inputValue) => {
    data.map((user) => {
      if (
        user.userName === inputValue.userName &&
        user.password === inputValue.userPassword
      ) {
        setMenuFocus("home");
        setIsHide(false);
        localStorage.setItem("currentUser", JSON.stringify(user));
        setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
        navigate("/home");
        dispatch(getUsers());
      }
      return user;
    });
  };

  return (
    <>
      <Routes>
        <Route
          path="home"
          element={
            Object.values(currentUser).length > 0 ? (
              <Home
                state={state}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                isHide={isHide}
                setIsHide={setIsHide}
                currentPage={currentPage}
                userPerPage={userPerPage}
                setCurrentPage={setCurrentPage}
                setMenuFocus={setMenuFocus}
                menuFocus={menuFocus}
              />
            ) : (
              <Required />
            )
          }
        >
          <Route index path="about" element={<About setError={setError} />} />
          <Route
            path="profile"
            element={<Profile currentUser={currentUser} />}
          />
          <Route
            path="form"
            element={
              <Form
                state={state}
                setIsHide={setIsHide}
                setMenuFocus={setMenuFocus}
              />
            }
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
              setMenuFocus={setMenuFocus}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default Container;
