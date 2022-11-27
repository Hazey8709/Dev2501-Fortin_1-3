import React from "react";

const Header = (props) => {
    return (
        <header style={style.header}>
            <div style={style.logoCont}>
                <h3>Jordan</h3>
                <div style={style.logo}></div>
            </div>

            <div style={style.searchCont}>
                <button style={style.searchBtn}>Submit</button>
                <input
                    style={style.input}
                    type='text'
                    placeholder='Search'
                ></input>
            </div>
            <div style={style.avatarCont}></div>
        </header>
    );
};

export default Header;

const style = {
    header: {
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
        height: "5rem",
    },

    logoCont: {
        display: "flex",
        border: "1px solid black",
        borderRadius: "10px",
        backgroundColor: "white",
        width: "10rem",
        marginLeft: "1rem",
        alignItems: "center",
    },

    searchCont: {
        display: "flex",
        borderRadius: "5px",
        flexDirection: "row",
    },

    searchBtn: {
        borderRadius: "5px",
        padding: "5px",
        backgroundColor: "lightGreen",
        marginRight: "1rem",
    },

    input: {
        borderRadius: "5px",
        backgroundColor: "antiqueWhite",
        padding: "5px",
    },

    avatarCont: {
        display: "flex",
        border: "1px solid black",
        borderRadius: "10px",
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        marginRight: "3%",
        width: "10rem",
        height: "60px",
    },
};

//! Notes:
//*  Logo Cont Left side,
//*  Search cont middle,
//*  Avatar cont right side,
//*
