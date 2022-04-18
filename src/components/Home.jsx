import React from "react";
import "./scss/Home.scss";
import Filter from "../images/Filter.svg";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import UserList from "./UserList";

function Home({ currentUser, isHide, setIsHide }) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="left-menu">
        <div className="cover-letter">
          <span className="first-letter">
            {currentUser.fullName.substring(0, 1)}
          </span>
        </div>
        <Link
          to="profile"
          className="user-info"
          onClick={() => setIsHide(true)}
        >
          {currentUser.fullName}
        </Link>
        <button
          className="home-page"
          onClick={() => {
            setIsHide(false);
            navigate("/home");
          }}
        >
          <BiCategory className="category-icon" />
          Home Page
        </button>
        <Link to="form" className="add-user" onClick={() => setIsHide(true)}>
          <HiOutlineDocumentText className="add-icon" />
          Create User
        </Link>
        <Link className="about" to="about" onClick={() => setIsHide(true)}>
          <img src={Filter} />
          About
        </Link>
      </div>
      <Outlet />
      <div className="main-section">
        <div className={!isHide ? "filter-section" : "position"}>
          <div className="filter-left">
            <p className="filter-desc">FBS</p>
            <label htmlFor="name-input" className="label-filter">
              Name
            </label>
            <input type="text" className="filter-name" name="name-input" />
            <label htmlFor="address-input" className="label-filter address">
              Address
            </label>
            <input
              type="text"
              className="filter-address"
              name="address-input"
            />
            <label htmlFor="date-input" className="label-filter date">
              DOB
            </label>
            <input type="month" className="filter-date" name="date-input" />
            <select className="filter-date year" name="date-input">
              <option>1999</option>
              <option>2000</option>
            </select>
          </div>
          <div className="filter-right">
            <label className="label-filter age" htmlFor="age-input">
              Email
            </label>
            <input type="text" className="filter-age" name="age-input" />
            <label className="label-filter tel" htmlFor="tel-input">
              Tel
            </label>
            <input type="text" className="filter-tel" name="tel-input" />
            <label className="label-filter gender" htmlFor="gender-input">
              Gender
            </label>
            <select type="select" className="filter-gender" name="gender-input">
              <option>Male</option>
              <option>Female</option>
            </select>
            <button className="cancel">Reset</button>
            <button className="search">Search</button>
          </div>
        </div>
        {!isHide ? <UserList setIsHide={setIsHide} /> : null}
      </div>
    </div>
  );
}

export default Home;
