import React from "react";
import Ad1 from "../images/airJordanAdd.jpg";
import Ad2 from "../images/saleAdd.png";
import Ad3 from "../images/toyShopAdd.webp";

const Ads = (props) => {
    return (
        <div style={style.adsCont}>
            <div style={style.adCont}>
                <p style={style.adTitle}>The need for classics!</p>
                <img src={Ad1} style={style.ad1} alt=''></img>
            </div>
            <div style={style.adCont}>
                <p style={style.adTitle}>Sale!</p>
                <img src={Ad2} style={style.ad2} alt=''></img>
            </div>
            <div style={style.adCont}>
                <p style={style.adTitle}>All the toys you need!</p>
                <img src={Ad3} style={style.ad3} alt=''></img>
            </div>
        </div>
    );
};

export default Ads;

const style = {
    adsCont: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        float: "right",
        // border: "1px solid red",
        borderTopRightRadius: "10px",
        width: "13rem",
        height: "38.2rem",
        backgroundColor: "#0005",
        marginTop: "2rem",
        padding: "1rem",
    },

    adCont: {
        border: "1px solid white",
        borderRadius: "5px",
        backgroundColor: "#bbb9b9",
        marginTop: ".5rem",
        textAlign: "center",
        height: "12.3rem",
    },

    adTitle: {
        fontWeight: "bold",
    },

    ad1: {
        borderRadius: "1rem",
        height: "9rem",
        width: "9rem",
    },

    ad2: {
        borderRadius: "1rem",
        height: "10rem",
        width: "12rem",
    },

    ad3: {
        borderRadius: "1rem",
        height: "9rem",
        width: "11rem",
    },
};
