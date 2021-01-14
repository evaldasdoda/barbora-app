import React from 'react';
import logo from './logo.svg';
import {Navbar} from "./Components/Navbar/Navbar";
import {ShopLayout} from "./Pages/Shop/ShopLayout";

function App() {
  return (
    <>
      <Navbar />
      <ShopLayout />
    </>
  );
}

export default App;
