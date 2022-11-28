import React from "react";

const Footer = (props) => {
    return (
        <footer style={style.footerCont}>
            <div style={style.iconCont}>
                <a style={style.link}>GitHub</a>
                <a>GitHub</a>
            </div>
            <div style={style.iconCont}>
                <a>GitHub</a>
                <a>GitHub</a>
            </div>
            <div style={style.iconCont}>
                <a>GitHub</a>
                <a>GitHub</a>
            </div>
            <div style={style.iconCont}>
                <a>GitHub</a>
                <a>GitHub</a>
            </div>
            <div style={style.iconCont}>
                <a>GitHub</a>
                <a>GitHub</a>
            </div>
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

    iconCont: {
        border: "1px solid blue",
        margin: ".3rem",
        // width: "90%",
        height: "1rem",
    },

    // link: {
    //     border: "1px outset black",
    //     margin: "20px",
    //     fontSize: "10px",
    //     textAlign: "center",
    //     justifyContent: "center",
    // },
};
