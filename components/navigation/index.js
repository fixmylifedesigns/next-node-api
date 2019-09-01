import React from "react";
import  Link  from "next/link";

export default function Navigation() {
  return (
    <div className="navigationContainer">
      <div className="navLogo">
        {/* <Link href="/">
          <img
            src="https://github.com/brokenulock/frontend/blob/master/src/bulfmlimg/brokenulocklogo.png?raw=true"
            alt=""
          />
        </Link> */}
      </div>

      <nav className="navigation">
        <a
          href="https://documenter.getpostman.com/view/7133880/SVfMUAdJ?version=latest"
          className="footerLink"
          style={{ marginRight: "15px" }}
        >
          Api Doc
        </a>
        <a
          href="https://github.com/brokenulock"
          className="footerLink"
          style={{ marginRight: "15px" }}
        >
          Github Repo
        </a>
      </nav>
     </div>
  );
}
