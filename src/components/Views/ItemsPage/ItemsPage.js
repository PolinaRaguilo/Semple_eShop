import React from "react";
import Header from "../../Header/Header";
import ItemList from "./ItemList/ItemList";

class ItemsPage extends React.Component {


  state={
    items: [
      {id:1, imageClock: 'https://cdn21vek.by/img/galleries/107/446/preview_b/t0554171105700_tissot_560d1af9300af.jpeg', brandClock:'Tissot', collection: 'T-Sport', vendorCode: 'T055.417.11.057.00', price: 1000},
      {id:2, imageClock: 'https://cdn21vek.by/img/galleries/781/468/preview_b/t1014172306100_tissot_5bffb202e2065.png',brandClock:'Tissot', collection: 'T-Classic', vendorCode: 'T101.417.23.061.00', price: 1500},
    ],
    brands: [
      {id:1, brand:'Tissot'},
      {id:2, brand:'MK'},
      {id:3, brand:'CASIO'},
    ]
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <ItemList data={this.state.items} brands={this.state.brands}/>
      </React.Fragment>
    );
  }
}

export default ItemsPage;
