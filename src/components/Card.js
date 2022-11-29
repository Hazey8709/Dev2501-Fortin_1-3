import React from "react";
import Form from "./Form";
import mainAd from "../images/fb-Ad.webp";

const Card = (props) => {
    return (
        <article style={style.cardCont}>
            <Form />
            <img src={mainAd} alt={props.alt} style={style.mainAdImage} />
            <h3 style={style.cardTitle}>Icons...</h3>
            <p style={style.cardDetails}>
                Any Icon you can think of! You name it We got it.
            </p>
        </article>
    );
};

export default Card;

const style = {
    cardCont: {
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignText: "center",
        border: "1px solid white",
        backgroundColor: "#0005",
        marginTop: "1.9rem",
        marginLeft: "9rem",
    },

    mainAdImage: {
        // border: "1px solid red",
        borderRadius: "5px",
        backgroundColor: "#0005",
        height: "15rem",
        margin: "1rem",
        marginTop: "2.9rem",
    },

    cardTitle: {
        display: "flex",
        justifyContent: "center",
    },

    cardDetails: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        // fontSize: "14px",
    },
};
