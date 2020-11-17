import React from "react";
import OneClockItemForAdmin from "./OneClockItemForAdmin/OneClockItemForAdmin";

import './ItemsForAdmin.css';

class ItemsForAdmin extends React.Component{

  state={}

   onSubmit = (e) => {
      const {imageClock, brandClock, collection,vendorCode,price} = this.state;
      e.preventDefault();
      this.props.addNewClock(imageClock, brandClock, collection,vendorCode,price);
    }

    onInputChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      
      this.setState({
        [name]: value
      })
      console.log(this.state)
    }


  render(){

    const {adminData, onDeleteClock} =  this.props;

    let clocksItems = adminData.clocks.map((item) => {
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
    return(
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <div className="form-group add_clock ">
            <div className="col">
              <label htmlFor="imgInput">Изображение</label>
              <input
                type="text"
                className="form-control"
                id="imgInput"
                placeholder="URL"
                name="imageClock"
                onChange={this.onInputChange}
              />

              <label htmlFor="brandInput">Бренд</label>
              <input
                type="text"
                className="form-control"
                id="brandInput"
                name="brandClock"
                onChange={this.onInputChange}
              />

              <div className="form-group">
                <label className="control-label">Цена</label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    onChange={this.onInputChange}
                  />
                </div>
              </div>

            </div>

            <div className="col">
              <label htmlFor="collectionInput">Коллекция</label>
              <input
                type="text"
                className="form-control"
                id="collectionInput"
                name="collection"
                onChange={this.onInputChange}
              />

              <label htmlFor="vendorCodeInput">Артикул</label>
              <input
                type="text"
                className="form-control"
                id="vendorCodeInput"
                name="vendorCode"
                onChange={this.onInputChange}
              />

              <button type="submit" className="btn btn-primary btn_add">
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
    )
  }
}

// const ItemsForAdmin =({adminData,addNewClock,onInputChange, onDeleteClock}) =>  {

//   let clocksItems = adminData.clocks.map((item) => {
//     const { id, imageClock, brand, collection, vendorCode, price } = item;
//     return (
//       <OneClockItemForAdmin
//         key={id}
//         id={id}
//         imageClock={imageClock}
//         brand={brand}
//         collection={collection}
//         vendorCode={vendorCode}
//         price={price}
//         onDeleteClock={() => onDeleteClock(id)}
//       />
//     );
//   });

//   let onSubmit = (e) => {
//     const {imageClock, brandClock, collection,vendorCode,price} = this.props.adminData.newClock;
//     e.preventDefault();
//     addNewClock(imageClock, brandClock, collection,vendorCode,price);
//   }



//     return (
//       <React.Fragment>
//         <form onSubmit={onSubmit}>
//           <div class="form-group add_clock ">
//             <div className="col">
//               <label for="imgInput">Изображение</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="imgInput"
//                 placeholder="URL"
//                 name="imageClock"
//                 onChange={onInputChange}
//               />

//               <label for="brandInput">Бренд</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="brandInput"
//                 name="brandClock"
//                 onChange={onInputChange}
//               />

//               <div class="form-group">
//                 <label class="control-label">Цена</label>
//                 <div class="input-group mb-3">
//                   <div class="input-group-prepend">
//                     <span class="input-group-text">$</span>
//                   </div>
//                   <input
//                     type="text"
//                     class="form-control"
//                     name="price"
//                     onChange={onInputChange}
//                   />
//                 </div>
//               </div>

//             </div>

//             <div className="col">
//               <label for="collectionInput">Коллекция</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="collectionInput"
//                 name="collection"
//                 onChange={onInputChange}
//               />

//               <label for="vendorCodeInput">Артикул</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="vendorCodeInput"
//                 name="vendorCode"
//                 onChange={onInputChange}
//               />

//               <button type="submit" class="btn btn-primary btn_add">
//                 Добавить
//               </button>
//             </div>
//           </div>
//         </form>
//         <table className="table_container table table-hover">
//           <thead className="table-warning">
//             <tr>
//               <th scope="col">id</th>
//               <th scope="col">Фото</th>
//               <th scope="col">Бренд</th>
//               <th scope="col">Коллекция</th>
//               <th scope="col">Артикул</th>
//               <th scope="col">Цена</th>
//               <th scope="col"></th>
//             </tr>
//           </thead>
//           <tbody>{clocksItems}</tbody>
//         </table>
//       </React.Fragment>
//     );
//   }



export default ItemsForAdmin;