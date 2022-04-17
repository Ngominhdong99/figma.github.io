import { data } from "../data/loginData";

export default function Validate(users) {
  let error = {};
  const message = "このフィールドに入力してください!";

  if (!users.userName || users.userName.trim() === "") {
    error.userName = "お名前を入力してください!" || message;
  }
  if (!users.userPassword || users.userName.trim() === "") {
    error.password = "パスワードを入力してください!" || message;
  }

  data.map((user) => {
    if (
      user.userName !== users.userName ||
      user.password !== users.userPassword
    ) {
      error.notify = "ユーザー名かパスワードが間違っています!";
    }
  });
  return error;
}
