import React from "react";
import "./Header.css";
export default function Header({ url, name }) {
  return (
    <div className="header">
      <h className="comtag">Edvora</h>

      <div className="headerimg">
        <div className="caption">{name}</div>
        <img src={url} style={{ borderRadius: 50 }} width={50}></img>
      </div>
    </div>
  );
}
