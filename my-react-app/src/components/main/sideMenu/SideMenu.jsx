import React from "react";
import Icons from "./Icons";
import Copyright from "./Copyright";

// SideMenu component: Renders the sidebar of the application
function SideMenu() {
  return (
    <>
    <aside>
      <Icons />
      <Copyright />
    </aside>
    </>
  );
}

export default SideMenu;