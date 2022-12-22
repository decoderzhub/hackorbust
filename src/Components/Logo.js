import React from 'react'
import logo from '../Images/Logo.png'
function Logo() {
    return (
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "100%",
            width: "60%",
            marginTop: "0",
            marginBottom: "-5%",
            padding: "0px 0px 0px 0px",
          }}
        />
      );
}

export default Logo