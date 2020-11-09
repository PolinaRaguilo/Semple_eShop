import React from "react";

import "./SearchAdminForm.css";

class SearchAdminForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form
          class="form-inline justify-content-center search_form"
          type="submit"
        >
          <input
            class="form-control col-md-4"
            type="text"
            placeholder="Найти..."
          />
          <button class="btn btn-primary search_form_button" type="submit">
            Искать
          </button>
        </form>
        <div class="links_wrapper">
          <ul class="justify-content-md-center breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Пользователи</a>
            </li>
            <li class="breadcrumb-item ">
              <a href="#">Товары</a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchAdminForm;
