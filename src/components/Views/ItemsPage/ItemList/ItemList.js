import React from "react";
import OneMenuBrand from "../OneMenuBrand/OneMenuBrand";

import "./ItemList.css";
import OneItem from "./OneItem/OneItem";

class ItemList extends React.Component {
  render() {
    return (
      <div class="content">
        <div class="row">
          <div class="col">
            <div class="list-group  ">
              <ul class=" filter_menu">
                <li class="list-group-item  filter_title">Бренды</li>
                <OneMenuBrand />
              </ul>
            </div>
          </div>
          <div class="col-md-8 products">
            <div class="row">
              <OneItem />
              <OneItem />
              <OneItem />
              <OneItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemList;
