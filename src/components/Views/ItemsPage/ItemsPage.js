import React from "react";
import Header from "../../Header/Header";
import ItemList from "./ItemList/ItemList";

class ItemsPage extends React.Component {


  render() {
    const {data} = this.props;
    return (
      <React.Fragment>
        <Header />
        <ItemList data={data.clocks} brands={data.brands} />
      </React.Fragment>
    );
  }
}

export default ItemsPage;
