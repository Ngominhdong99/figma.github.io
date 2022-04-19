import React from "react";
import { useSelector } from "react-redux";
import "../scss/Pagination.scss";

const Pagination = ({ userPerPage, setCurrentPage }) => {
  const state = useSelector((state) => state.form);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  const numOfTodo = Math.ceil(state.users.length / userPerPage);
  for (let i = 1; i <= (numOfTodo < 1 ? numOfTodo + 1 : numOfTodo); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
