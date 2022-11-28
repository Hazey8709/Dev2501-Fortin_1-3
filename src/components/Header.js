import React from "react";
import Logo from "./Logo";
import Avatar from "./Avatar";

const Header = (props) => {
    return (
        <header style={style.headerCont}>
            <div style={style.logoCont}>
                <h3 style={style.logoTitle}>Jordan</h3>
                <div style={style.logo}>
                    <Logo />
                </div>
            </div>

            <div style={style.searchCont}>
                <button style={style.searchBtn}>Submit</button>
                <input
                    style={style.input}
                    type='text'
                    placeholder='Search'
                ></input>
            </div>

            <div>
                <Avatar />
                {/* <Avatar AvatarImg={ImageUrl} */}
            </div>
        </header>
    );
};

export default Header;

const style = {
    headerCont: {
        background: "#0005",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "3px solid black",
        borderTop: "none",
        borderBottom: "6px solid black",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        height: "8rem",
    },

    logoCont: {
        display: "flex",
        // border: "1px solid black",
        borderRadius: "10px",
        backgroundColor: "#0005",
        width: "10rem",
        marginLeft: "1rem",
        alignItems: "center",
    },

    logoTitle: {
        padding: ".2rem",
    },

    searchCont: {
        display: "flex",
        borderRadius: "5px",
        flexDirection: "row",
    },

    searchBtn: {
        border: "inset",
        borderRadius: "5px",
        padding: "5px",
        backgroundColor: "lightGreen",
        marginRight: "1rem",
    },

    input: {
        border: "inset",
        borderRadius: "5px",
        backgroundColor: "antiqueWhite",
        padding: "5px",
        width: "15rem",
    },

    // avatarCont: {
    //     display: "flex",
    //     border: "1px solid black",
    //     borderRadius: "10px",
    //     flexDirection: "row",
    //     backgroundColor: "white",
    //     alignItems: "center",
    //     marginRight: "3%",
    //     width: "10rem",
    //     height: "60px",
    // },
};
