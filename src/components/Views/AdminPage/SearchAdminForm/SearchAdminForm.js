import React from "react";
import { Link } from "react-router-dom";


import "./SearchAdminForm.css";

class SearchAdminForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form
          className="form-inline justify-content-center search_form"
          type="submit"
        >
          <input
            className="form-control col-md-4"
            type="text"
            placeholder="Найти..."
          />
          <button className="btn btn-primary search_form_button" type="submit">
            Искать
          </button>
        </form>
        <div className="links_wrapper">
          <ul className="justify-content-md-center breadcrumb">
            <li className="breadcrumb-item">
            <Link to="/admin/userTable">Пользователи</Link>
            </li>
            <li className="breadcrumb-item ">
            <Link to="/admin/itemsTable">Товары</Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchAdminForm;
