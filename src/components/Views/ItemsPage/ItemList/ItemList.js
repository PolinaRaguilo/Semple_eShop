import React from "react";


import "./ItemList.css";
import OneItem from "./OneItem/OneItem";

const ItemList = ({data, brands}) => {
  
  let clockItems = data.map((item) => {
    const {id, imageClock,brandClock, collection, vendorCode, price} = item;

    return (
      <OneItem key={id} imageClock={imageClock} brandClock={brandClock} collection={collection} vendorCode={vendorCode} price={price}/>
    )
  })

  let brandsList = brands.map((item) => {
    const {id, brand} = item;

    return (
      <li className="list-group-item brend_item " key={id}>
      <a href="#">{brand}</a>
    </li>
    )
  })

    return (
      <div className="content">
        <div className="row">
          <div className="col">
            <div className="list-group  ">

              <ul className=" filter_menu">
                <li className="list-group-item  filter_title">Бренды</li>
                {brandsList}
              </ul>
              

            </div>
          </div>
          <div className="col-md-8 products">
            <div className="row">
              {clockItems}
            </div>
          </div>
        </div>
      </div>
    );
  }


export default ItemList;
