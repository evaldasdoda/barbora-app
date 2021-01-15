import React, {useState} from "react";
import {ISidebarContext} from "./ISidebarContext";

export const SidebarContext = React.createContext<Partial<ISidebarContext>>({});

export default function SidebarProvider(props: any) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const contextValue = {sidebarOpen, setSidebarOpen};
    return (
        <SidebarContext.Provider value={contextValue}>
            {props.children}
        </SidebarContext.Provider>
    )
}