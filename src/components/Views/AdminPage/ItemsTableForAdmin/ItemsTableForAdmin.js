import React from "react";
import OneClockItemForAdmin from "./OneClockItemForAdmin/OneClockItemForAdmin";



const ItemsTableForAdmin =({clocksData, onDeleteClock}) =>  {

  let clocksItems = clocksData.map((item) => {
    const { id, imageClock, brand, collection, vendorCode, price } = item;
    return (
      <OneClockItemForAdmin
        key={id}
        id={id}
        imageClock={imageClock}
        brand={brand}
        collection={collection}
        vendorCode={vendorCode}
        price={price}
        onDeleteClock={() => onDeleteClock(id)}
      />
    );
  });

    return (
      <table className="container table table-hover">
        <thead className="table-warning">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Фото</th>
            <th scope="col">Бренд</th>
            <th scope="col">Коллекция</th>
            <th scope="col">Артикул</th>
            <th scope="col">Цена</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {clocksItems}
        </tbody>
      </table>
    );
  }



export default ItemsTableForAdmin;