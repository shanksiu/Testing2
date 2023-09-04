import React from "react";

import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <Header>
      <div className="container mx-auto">
        {/* logo */}
        <Link to=" / ">
          <img src={Logo} alt="" />
        </Link>
        {/*buttons */}
        <div>
          <Link to="">Log in</Link>
          <Link to="">Sign up</Link>
        </div>
      </div>
    </Header>
  );
};

export default Header;
