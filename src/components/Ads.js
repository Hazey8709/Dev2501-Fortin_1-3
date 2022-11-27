import React from "react";

const Ads = (props) => {
    return (
        <div style={style.adsCont}>
            <div style={style.ad}>
                <p>Ad-1</p>
                <img></img>
            </div>
            <div style={style.ad}>
                <p>Ad-2</p>
                <img></img>
            </div>
            <div style={style.ad}>
                <p>Ad-3</p>
                <img></img>
            </div>
        </div>
    );
};

export default Ads;

const style = {
    adsCont: {
        display: "flex",
        flexDirection: "column",
        float: "right",
        // border: "1px solid red",
        borderRadius: "10px",
        width: "13rem",
        height: "37.8rem",
        backgroundColor: "#0005",
        marginTop: "2rem",
        padding: "1rem",
    },

    ad: {
        // border: "1px solid green",
        borderRadius: "5px",
        backgroundColor: "#0005",
        marginTop: "2rem",
        textAlign: "center",
        height: "11rem",
    },
};
