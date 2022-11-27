import React from 'react'

const Avatar = props => {
    return (
        <img src={props.AvatarImage}
            alt={props.AvatarAlt}
            style={style.avatar}
        />
    )
}

export default Avatar;


const style = {
    avatar: {

    }
}
