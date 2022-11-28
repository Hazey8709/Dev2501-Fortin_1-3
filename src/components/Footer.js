import React from "react";

const Footer = (props) => {
    return (
        <footer style={style.footerCont}>
            <div style={style.icon}></div>
            <div style={style.icon}></div>
            <div style={style.icon}></div>
            <div style={style.icon}></div>
            <div style={style.icon}></div>
        </footer>
    );
};

export default Footer;

const style = {
    footerCont: {
        // border: "1px solid white",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        backgroundColor: "#0005",
        width: "100%",
        height: "9rem",
    },

    icon: {
        border: "1px solid blue",
        margin: ".3rem",
        // width: "90%",
        height: "1rem",
    },
};
