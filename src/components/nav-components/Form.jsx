import React from "react";
import "../scss/AddUser.scss";

function Form() {
  return (
    <>
      <div className="form-container">
        <form className="form" id="form-1">
          <h3 className="heading">Add user</h3>
          <div className="spacer"></div>
          <div className="form-group">
            <label htmlFor="fullname" className="form-label">
              Name<label>*</label>
            </label>
            <input
              className="form-control"
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Ex: Chris Ngo"
              //   value={user.userName}
              //   onChange={(e) => {
              //     dispatch(
              //       setUser({
              //         ...user,
              //         userName: e.target.value,
              //       })
              //     );
              //     error.userName = null;
              //   }}
            />
            <span className="form-message"></span>
          </div>

          <div className="form-group flexbox">
            sex:
            <label htmlFor="male" className="form-label genderM">
              Male
            </label>
            <input
              className="form-control"
              id="male"
              name="gender"
              type="radio"
              value="male"
              //   onChange={() => dispatch(setUser({ ...user, gender: "male" }))}
              //   checked={user.gender === "male"}
            />
            <label htmlFor="female" className="form-label genderF">
              Female
            </label>
            <input
              className="form-control"
              id="female"
              name="gender"
              type="radio"
              value="female"
              //   onChange={() => dispatch(setUser({ ...user, gender: "female" }))}
              //   checked={user.gender === "female"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email<label>*</label>
            </label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="text"
              placeholder="VD: email@domain.com"
              //   value={user.email}
              //   onChange={(e) => {
              //     dispatch(
              //       setUser({
              //         ...user,
              //         email: e.target.value,
              //       })
              //     );
              //     error.email = null;
              //   }}
            />
            <span className="form-message"></span>
          </div>

          <div className="form-group">
            <label htmlFor="phone-number" className="form-label">
              Phone Number<label>*</label>
            </label>
            <input
              className="form-control"
              id="phone-number"
              name="phone-number"
              type="phone-number"
              placeholder="+84"
              //   value={user.phoneNumber}
              //   onChange={(e) => {
              //     dispatch(
              //       setUser({
              //         ...user,
              //         phoneNumber: e.target.value,
              //       })
              //     );
              //     error.phoneNumber = null;
              //   }}
            />
            <span className="form-message"></span>
          </div>

          <div className="form-group">
            <label htmlFor="date" className="form-label">
              Date of Birth
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="form-control"
              //   value={user.date}
              //   onChange={(e) => {
              //     dispatch(
              //       setUser({
              //         ...user,
              //         date: e.target.value,
              //       })
              //     );
              //     error.date = null;
              //   }}
            />
            <span className="form-message"></span>
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label">
              Adress
            </label>
            <input
              className="form-control"
              id="address"
              name="address"
              type="text"

              //   value={user.address}
              //   onChange={(e) => {
              //     dispatch(
              //       setUser({
              //         ...user,
              //         address: e.target.value,
              //       })
              //     );
              //     error.address = null;
              //   }}
            />
            <span className="form-message"></span>
          </div>

          <div className="group-btn">
            <button className="btn btn-active" type="submit">
              Submit
            </button>
            <button className="btn btn-inactive">Update</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
