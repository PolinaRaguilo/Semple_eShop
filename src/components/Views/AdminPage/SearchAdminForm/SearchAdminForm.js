import React from 'react';
import { Link } from 'react-router-dom';

import './SearchAdminForm.css';

class SearchAdminForm extends React.Component {
  render() {
    return (
      <>
        <form className="form-inline justify-content-center search-form" type="submit">
          <input className="form-control col-md-4" type="text" placeholder="Search..." />
          <button className="btn btn-primary search-form-button" type="submit">
            Search
          </button>
        </form>
        <div className="links_wrapper">
          <ul className="justify-content-md-center breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin/userTable">Users</Link>
            </li>
            <li className="breadcrumb-item ">
              <Link to="/admin/itemsTable">Products</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default SearchAdminForm;
