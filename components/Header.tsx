import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Image src="/img/logo.svg" alt={"logo image"} width={300} height={40} />
      </div>
    </header>
  );
};

export default Header;
