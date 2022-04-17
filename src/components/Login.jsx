import React from "react";
import "./scss/Login.scss";
import formLoginImg from "../images/Group.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Validate from "./Validate";

function Login({ data, error, setError, handleSubmit, setInputData }) {
  const [hidePass, setHidePass] = React.useState(true);
  const [inputValue, setInputValue] = React.useState({
    userName: "",
    userPassword: "",
  });
  const changeHide = () => {
    if (hidePass) {
      setHidePass(!hidePass);
    } else {
      setHidePass(!hidePass);
    }
  };
  const validator = Validate(inputValue);
  const onSubmit = (e) => {
    e.preventDefault();

    handleSubmit(inputValue);
    if (!Object.values(validator).some((item) => item)) {
      setInputValue({
        userName: "",
        userPassword: "",
      });
      setError({});
      return;
    }
    setError(validator);
  };
  return (
    <div className="login-form">
      <form className="login">
        <h1>ユーザー認証</h1>
        <span className="error-noti">
          {inputValue !== null &&
          (inputValue.userName === "" || inputValue.userPassword === "")
            ? null
            : error.notify}
        </span>

        <input
          className="userName"
          type="input"
          placeholder="ユーザーID"
          value={inputValue.userName}
          onChange={(e) => {
            setInputValue({ ...inputValue, userName: e.target.value });
            error.userName = null;
            error.notify = null;
          }}
        />
        <span className="error-name">{error.userName}</span>

        <div className="form-input">
          <input
            autoComplete="off"
            className="password"
            type={hidePass ? "password" : "text"}
            placeholder="パスワード"
            value={inputValue.userPassword}
            onChange={(e) => {
              setInputValue({ ...inputValue, userPassword: e.target.value });
              error.password = null;
              error.notify = null;
            }}
          />
          <span className="error-password">{error.password}</span>
          <a onClick={() => changeHide()}>
            {hidePass ? (
              <AiOutlineEyeInvisible className="hide-password" />
            ) : (
              <AiOutlineEye className="hide-password" />
            )}
          </a>
        </div>

        <button onClick={onSubmit}>認証</button>
      </form>
      <img src={formLoginImg} />
    </div>
  );
}

export default Login;
