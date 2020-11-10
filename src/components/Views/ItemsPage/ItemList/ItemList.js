import React from "react";


import "./ItemList.css";
import OneItem from "./OneItem/OneItem";

const ItemList = ({data, brands}) => {
  
  let clockItems = data.map((item) => {
    const {id, imageClock, collection, vendorCode, price} = item;

    return (
      <OneItem key={id} imageClock={imageClock} collection={collection} vendorCode={vendorCode} price={price}/>
    )
  })

  let brandsList = brands.map((item) => {
    const {id, brand} = item;

    return (
      <li class="list-group-item brend_item " key={id}>
      <a href="#">{brand}</a>
    </li>
    )
  })

    return (
      <div class="content">
        <div class="row">
          <div class="col">
            <div class="list-group  ">

              <ul class=" filter_menu">
                <li class="list-group-item  filter_title">Бренды</li>
                {brandsList}
              </ul>
              

            </div>
          </div>
          <div class="col-md-8 products">
            <div class="row">
              {clockItems}
            </div>
          </div>
        </div>
      </div>
    );
  }


export default ItemList;
