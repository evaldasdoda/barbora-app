import React from 'react';
import {Navbar} from "./Components/Navbar/Navbar";
import {ShopLayout} from "./Pages/Shop/ShopLayout";
import SidebarProvider from "./Context/SidebarContext/SidebarContext";
import CartProvider from "./Context/CartContext/CartContext";

function App() {
    return (
        <>
            <CartProvider>
                <SidebarProvider>
                    <Navbar/>
                    <ShopLayout/>
                </SidebarProvider>
            </CartProvider>
        </>
    );
}

export default App;
