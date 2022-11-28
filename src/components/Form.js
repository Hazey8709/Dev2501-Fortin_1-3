import React from "react";

const Form = (props) => {
    return (
        <form style={style.formCont}>
            <input
                type='text'
                placeholder='Joe Smith'
                required
                style={style.inputName}
            />
            <input
                type='text'
                placeholder='Title'
                required
                style={style.inputTitle}
            />
            <textarea
                type='text'
                rows='5'
                cols='30'
                placeholder='Details'
                required
                style={style.textAreaDetails}
            />
            <button type='submit' style={style.submitBtn}>
                Submit
            </button>
            <button type='reset' style={style.resetBtn}>
                Reset
            </button>
        </form>
    );
};

export default Form;

const style = {
    formCont: {
        display: "flex",
        flexDirection: "column",
        position: "",
        float: "top",
        width: "19rem",
        margin: "0 auto",
        marginTop: "1.2rem",
    },

    inputName: {
        border: "1px inset black",
        borderRadius: "5px",
    },

    inputTitle: {
        border: "1px inset black",
        borderRadius: "5px",
    },

    textAreaDetails: {
        border: "1px inset black",
        borderRadius: "5px",
    },

    submitBtn: {
        border: "1px outset green",
        borderRadius: "5px",
        backgroundColor: "#0005",
        color: "white",
        fontWeight: "bold",
        marginTop: ".5rem",
    },

    resetBtn: {
        border: "1px outset red",
        borderRadius: "5px",
        backgroundColor: "#0005",
        color: "white",
        fontWeight: "bold",
        marginTop: ".5rem",
    },
};
