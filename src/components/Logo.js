import React from "react";
import imageLogo from "../images/NoobieJ-logo-1.png";

const Logo = (props) => {
    return <img src={imageLogo} alt={props.logo} style={style.logo} />;
};

export default Logo;


const style = {
    logo: {
        height: "3rem",
        borderRadius: "15px",
        marginLeft: "1rem",
        padding: ".5rem",
    },
};
