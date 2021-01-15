import React from 'react';
import logo from './logo.svg';
import {Navbar} from "./Components/Navbar/Navbar";
import {ShopLayout} from "./Pages/Shop/ShopLayout";
import SidebarProvider from "./Context/SidebarContext/SidebarContext";

function App() {
  return (
    <>
        <SidebarProvider>
          <Navbar />
          <ShopLayout />
        </SidebarProvider>
    </>
  );
}

export default App;
