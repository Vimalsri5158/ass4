/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";

import Header from "./Layout/Header";
import Content from "./Layout/Content";

function App() {
  const [wishList, setWishList] = useState([]);

  const addToWishList = (item) => {
    setWishList([...wishList, item]);
  };

  const removeFromWishList = (item) => {
    setWishList(wishList.filter((wishItem) => wishItem !== item));
  };

  return (
    <div className="App">
      <Header wishCount={wishList.length} />
      <Content
        addToWishList={addToWishList}
        removeFromWishList={removeFromWishList}
      />
    </div>
  );
}

export default App;
