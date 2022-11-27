import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";

const Navbar = (props) => {
    return (
        <nav style={style.navCont}>
            <li style={style.liConts}>
                <a style={style.aConts} href='home.html'>
                    Home
                </a>
            </li>

            <li style={style.liConts}>
                <a style={style.aConts} href='contact.html'>
                    Contact
                </a>
            </li>

            <li style={style.liConts}>
                <a style={style.aConts} href='services.html'>
                    Services
                </a>
            </li>

            <li style={style.liConts}>
                <a style={style.aConts} href='docs.html'>
                    Docs
                </a>
            </li>
        </nav>
    );
};

export default Navbar;

const style = {
    navCont: {
        display: "flex",
        flexDirection: "column",
        // border: "1px solid black",
        position: "absolute",
        borderRadius: "10px",
        width: "10rem",
        height: "40rem",
        backgroundColor: "#0005",
        marginTop: "2rem",
    },

    liConts: {
        // border: "1px solid green",
        marginTop: "100px",
        textAlign: "center",
        listStyleType: "none",
    },

    aConts: {
        // border: "1px solid white",
        borderRadius: "5px",
        padding: ".5rem",
        textDecoration: "none",
        fontWeight: "bold",
        backgroundColor: "	#5c605f",
        color: "white",
    },
};
