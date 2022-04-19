import React from "react";
import "./scss/Home.scss";
import { BsSliders } from "react-icons/bs";

import { Outlet, useNavigate, Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import UserList from "./UserList";
import queryString from "query-string";
import { getUsers } from "../store/actions/action";
import { useDispatch } from "react-redux";

function Home({
  currentUser,
  isHide,
  setIsHide,
  currentPage,
  userPerPage,
  setCurrentPage,
  state,
  menuFocus,
  setMenuFocus,
}) {
  const [inputSearch, setInputSearch] = React.useState({
    userName_like: "",
    gender: "",
    date_like: "",
    phoneNumber_like: "",
    email_like: "",
    address_like: "",
  });
  const [searchUsers, setSearchUsers] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSearch = () => {
    fetchSearch();

    setInputSearch({
      userName_like: "",
      gender: "",
      date_like: "",
      phoneNumber_like: "",
      email_like: "",
      address_like: "",
    });
  };
  const fetchSearch = async () => {
    const paramsString = queryString.stringify(inputSearch, {
      skipEmptyString: true,
    });
    console.log(inputSearch, searchUsers, paramsString);

    const response = await fetch(`http://localhost:3000/users?${paramsString}`);
    const searchData = await response.json();
    setSearchUsers(searchData);
  };

  return (
    <div className="container">
      <div className="left-menu">
        <div className="cover-letter">
          <span className="first-letter">
            {currentUser.fullName ? currentUser.fullName.substring(0, 1) : "?"}
          </span>
        </div>
        <Link
          to="profile"
          className="user-info"
          onClick={() => setIsHide(true)}
        >
          {currentUser.fullName ? currentUser.fullName : "Relogin Please!"}
        </Link>
        <button
          className={menuFocus === "home" ? "home-page focus" : "home-page"}
          onClick={() => {
            setIsHide(false);
            setMenuFocus("home");
            navigate("/home");
          }}
        >
          <BiCategory className="category-icon" />
          Home Page
        </button>
        <button
          className={menuFocus === "add-user" ? "btn-add focus" : "btn-add"}
        >
          <Link
            to="form"
            className="add-user"
            onClick={() => {
              setIsHide(true);
              setMenuFocus("add-user");
            }}
          >
            <HiOutlineDocumentText className="add-icon" />
            Create User
          </Link>
        </button>

        <button
          className={menuFocus === "about" ? "btn-about focus" : "btn-about"}
        >
          <Link
            className="about"
            to="about"
            onClick={() => {
              setIsHide(true);
              setMenuFocus("about");
            }}
          >
            <BsSliders />
            About
          </Link>
        </button>
        <button
          className="log-out"
          onClick={() => {
            localStorage.removeItem("currentUser");
            navigate("/");
          }}
        >
          Log Out
        </button>
      </div>
      <Outlet />
      <div className="main-section">
        <div className={!isHide ? "filter-section" : "position"}>
          <div className="filter-left">
            <p className="filter-desc">FBS</p>
            <label htmlFor="name-input" className="label-filter">
              Name
            </label>
            <input
              type="text"
              className="filter-name filter"
              name="name-input"
              value={inputSearch.userName_like}
              onChange={(e) => {
                setInputSearch({
                  ...inputSearch,
                  userName_like: e.target.value,
                });
              }}
            />
            <label htmlFor="address-input" className="label-filter address">
              Address
            </label>
            <input
              type="text"
              className="filter-address filter"
              name="address-input"
              value={inputSearch.address_like}
              onChange={(e) => {
                setInputSearch({
                  ...inputSearch,
                  address_like: e.target.value,
                });
              }}
            />
            <label htmlFor="date-input" className="label-filter date">
              DOB
            </label>
            <input
              type="date"
              className="filter-date filter"
              name="date-input"
              value={inputSearch.date_like}
              onChange={(e) => {
                setInputSearch({
                  ...inputSearch,
                  date_like: e.target.value,
                });
              }}
            />
          </div>
          <div className="filter-right">
            <label className="label-filter age" htmlFor="email-input">
              Email
            </label>
            <input
              type="text"
              className="filter-age filter"
              name="email-input"
              value={inputSearch.email_like}
              onChange={(e) => {
                setInputSearch({
                  ...inputSearch,
                  email_like: e.target.value,
                });
              }}
            />
            <label className="label-filter tel" htmlFor="tel-input">
              Tel
            </label>
            <input
              type="text"
              className="filter-tel filter"
              name="tel-input"
              value={inputSearch.phoneNumber_like}
              onChange={(e) => {
                setInputSearch({
                  ...inputSearch,
                  phoneNumber_like: e.target.value,
                });
              }}
            />
            <label className="label-filter gender" htmlFor="gender-input">
              Gender
            </label>
            <select
              type="select"
              className="filter-gender"
              name="gender"
              value={inputSearch.gender}
              onChange={(e) => {
                setInputSearch({
                  ...inputSearch,
                  gender: e.target.value,
                });
              }}
            >
              <option>------</option>
              <option>male</option>
              <option>female</option>
            </select>
            <button
              className="cancel"
              onClick={() => {
                dispatch(getUsers());
                setSearchUsers([]);
                setInputSearch({
                  userName_like: "",
                  gender: "",
                  date_like: "",
                  phoneNumber_like: "",
                  email_like: "",
                  address_like: "",
                });
              }}
            >
              Reset
            </button>
            <button className="search" onClick={() => handleSearch()}>
              Search
            </button>
          </div>
        </div>
        {!isHide ? (
          <UserList
            setIsHide={setIsHide}
            currentPage={currentPage}
            userPerPage={userPerPage}
            setCurrentPage={setCurrentPage}
            searchUsers={searchUsers}
            setMenuFocus={setMenuFocus}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Home;
