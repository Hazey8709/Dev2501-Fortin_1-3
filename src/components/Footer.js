import React from "react";
import { FaGithub, FaFacebook, FaYoutube, FaCircle } from "react-icons/fa";
import { FaAccusoft, FaAirbnb, FaAmazonPay, FaAmazon } from "react-icons/fa";
import { FaAngellist, FaAndroid } from "react-icons/fa";

const Footer = (props) => {
    return (
        <footer style={style.footerCont}>
            <div style={style.iconCont}>
                <a
                    style={style.link}
                    href='https://github.com/Hazey8709'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaGithub />
                </a>
                <a
                    style={style.link}
                    href='https://www.facebook.com/people/Noobie-Js/100077721983756/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaFacebook />
                </a>
            </div>
            <div style={style.iconCont}>
                <a
                    style={style.link}
                    href='https://www.youtube.com/channel/UC7fWlqdyFBA1FwEVhtDMcuA'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaYoutube />
                </a>
                <a
                    style={style.link}
                    href='https://www.bitdegree.org/user/Hazey87/profile'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaCircle />
                </a>
            </div>
            <div style={style.iconCont}>
                <a
                    style={style.link}
                    href='https://www.youtube.com/channel/UC7fWlqdyFBA1FwEVhtDMcuA'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaAccusoft />
                </a>
                <a
                    style={style.link}
                    href='https://www.bitdegree.org/user/Hazey87/profile'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaAirbnb />
                </a>
            </div>
            <div style={style.iconCont}>
                <a
                    style={style.link}
                    href='https://www.youtube.com/channel/UC7fWlqdyFBA1FwEVhtDMcuA'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaAmazonPay />
                </a>
                <a
                    style={style.link}
                    href='https://www.bitdegree.org/user/Hazey87/profile'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaAmazon />
                </a>
            </div>
            <div style={style.iconCont}>
                <a
                    style={style.link}
                    href='https://www.youtube.com/channel/UC7fWlqdyFBA1FwEVhtDMcuA'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaAngellist />
                </a>
                <a style={style.link} href=' ' target='_blank' rel='noreferrer'>
                    <FaAndroid />
                </a>
            </div>
        </footer>
    );
};

export default Footer;

const style = {
    footerCont: {
        display: "flex",
        flexDirection: "row",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        backgroundColor: "#0005",
        marginTop: ".3rem",
        width: "100%",
        height: "9rem",
    },

    iconCont: {
        // border: "1px solid white",
        backgroundColor: "#bbb9b9",
        borderRadius: ".5rem",
        textAlign: "center",
        margin: "0 auto",
        marginTop: "2rem",
        padding: "1rem",
        // width: "90%",
        height: "1rem",
    },

    link: {
        padding: "1rem",
        fontSize: "1.3rem",
    },
};
