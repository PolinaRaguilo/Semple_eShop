import React from "react";
import Header from "../../Header/Header";
import ItemList from "./ItemList/ItemList";

class ItemsPage extends React.Component {


  state={
    items: [
      {id:1, imageClock: 'https://ziko.by/upload/resize_cache/iblock/88c/500_500_140cd750bba9870f18aada2478b24840a/88c8a26dafdf9e2b37e7eb6c8aa27a16.png', collection: 'PR 100 SPORT CHIC', vendorCode: 'T101.910.22.116.00', price: 1000},
      {id:2, imageClock: 'https://ziko.by/upload/resize_cache/iblock/8f4/500_500_140cd750bba9870f18aada2478b24840a/8f474e90b89fa49b1bcda8bef8d6378c.png', collection: 'COUTURIER LADY', vendorCode: 'T035.210.11.031.00', price: 1500},
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
