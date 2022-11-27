import React from "react";
import avatarImage from "../images/logo.png";

const Avatar = (props) => {
    return <img src={avatarImage} alt={props.AvatarAlt} style={style.avatar} />;
};

export default Avatar;

const style = {
    avatar: {
        display: "flex",
        height: "4rem",
        width: "11rem",
        borderRadius: "10px",
        marginRight: "1rem",
    },
};

//! src={props.AvatarIcon}
