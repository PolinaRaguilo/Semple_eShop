import React from 'react';
import { Link } from 'react-router-dom';

import './SearchAdminForm.css';

class SearchAdminForm extends React.Component {
  render() {
    return (
      <>
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
