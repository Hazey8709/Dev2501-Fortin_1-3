import React from "react";

const Card = (props) => {
    return (
        <article style={style.cardCont}>
            <img src='' alt={props.alt} style={style.cardImage} />
            <h3 style={style.cardTitle}>Special</h3>
            <p style={style.cardDetails}>Custom work at a discount!</p>
            <div>
                <button type='submit' style={style.cardBtn1}>
                    Share
                </button>
                <button type='submit' style={style.cardBtn2}>
                    Learn-More
                </button>
            </div>
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
        borderRadius: "10px",
        backgroundColor: "#0005",
        marginTop: "12.4rem",
        marginLeft: "10rem",
    },

    cardImage: {
        border: "1px solid red",
        borderRadius: "5px",
        backgroundColor: "#0005",
        height: "15rem",
        margin: "1rem",
    },

    cardTitle: {
        display: "flex",
        justifyContent: "center",
    },

    cardDetails: {
        display: "flex",
        justifyContent: "center",
    },

    cardBtn1: {
        display: "flex",
        flexDirection: "column",
        alignText: "center",
        justifyContent: "center",
        border: "1px outset",
        borderRadius: "5px",
        margin: "0 auto",
        marginBottom: "1rem",
        padding: ".5rem",
        backgroundColor: "#0005",
        color: "white",
        fontWeight: "bold",
    },

    cardBtn2: {
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        border: "1px outset",
        borderRadius: "5px",
        backgroundColor: "#0005",
        color: "white",
        padding: ".5rem",
    },
};
