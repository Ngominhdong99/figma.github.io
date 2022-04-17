import React, { useEffect } from "react";
import "./scss/ListUsers.scss";
import { deleteUser, setUser, getUsers } from "../store/actions/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function UserList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.form);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="list-user-section">
      <p>Users</p>
      <table className="table table-bordered">
        <thead>
          <tr className="tr">
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Tel</th>
            <th scope="col">Date</th>
            <th scope="col">Adress</th>
          </tr>
        </thead>
        <tbody id="user">
          {state.users.map((user, index) => (
            <tr key={index}>
              <td>
                <input type="radio" name="user" />
              </td>
              <td>{user.userName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.date}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="delete">Delete</button>
      <button className="edit">Edit</button>
      <button className="add">Add</button>
    </div>
  );
}

export default UserList;
