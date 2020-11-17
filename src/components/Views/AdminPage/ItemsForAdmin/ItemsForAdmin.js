import React from "react";
import OneClockItemForAdmin from "./OneClockItemForAdmin/OneClockItemForAdmin";

import './ItemsForAdmin.css';



const ItemsForAdmin =({clocksData, onDeleteClock}) =>  {

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
      <React.Fragment>
        <form action="submit">
          <div class="form-group add_clock ">
            <div className="col">
              <label for="imgInput">Изображение</label>
              <input
                type="text"
                class="form-control"
                id="imgInput"
                placeholder="URL"
              />

              <label for="brandInput">Бренд</label>
              <input
                type="text"
                class="form-control"
                id="brandInput"
              />

              <div class="form-group">
                <label class="control-label">Цена</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>

            </div>

            <div className="col">
              <label for="collectionInput">Коллекция</label>
              <input
                type="text"
                class="form-control"
                id="collectionInput"
              />

              <label for="vendorCodeInput">Артикул</label>
              <input
                type="text"
                class="form-control"
                id="vendorCodeInput"
              />

              <button type="submit" class="btn btn-primary btn_add">
                Добавить
              </button>
            </div>
          </div>
        </form>
        <table className="table_container table table-hover">
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
          <tbody>{clocksItems}</tbody>
        </table>
      </React.Fragment>
    );
  }



export default ItemsForAdmin;