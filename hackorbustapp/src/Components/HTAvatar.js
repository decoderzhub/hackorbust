import React from 'react'
import logo from '../Images/HT Logo.png'

function HtAvatar() {
    return (
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "15%",
            width: "15%",
            padding: "0px 0px 0px 0px",
            borderRadius: "5px"
          }}
        />
      );
}

export default HtAvatar