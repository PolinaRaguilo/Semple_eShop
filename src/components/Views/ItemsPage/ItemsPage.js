import React from "react";
import Header from "../../Header/Header";
import ItemList from "./ItemList/ItemList";

class ItemsPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ItemList/>
      </React.Fragment>
    );
  }
}

export default ItemsPage;
