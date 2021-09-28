import React from "react";
import './sidebar.css'
import TwitterIcon from "@material-ui/icons/Twitter"; 
import SidebarOption from './SidebarOption.js'

function Sidebar(){
    return (
      <div className="sidebar">
        {/* Twitter icon*/}
        <TwitterIcon />

        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />

        {/* SidebarOption*/}
        {/* SidebarOption*/}
        {/* SidebarOption*/}
        {/* SidebarOption*/}
        {/* SidebarOption*/}
        {/* SidebarOption*/}
      </div>
    );
}

export default Sidebar;