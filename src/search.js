import React from "react";
import { ReactComponent as Searchicon } from "./svgs/search.svg";

function Search() {
  return (
    <div className="searchCon ">
      <Searchicon className="searchSvg" />
      <input className="searchinput" placeholder="Search"></input>
    </div>
  );
}

export default TopBar;

function TopBar() {
  return (
    <div className="topwhole">
      <div className="topbar">
        <div className="toph">
          <h4>For You</h4>
        </div>
        <div className="toph">
          <h4>Following</h4>
        </div>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
}
