import React from 'react'
import s from './Message.module.css'

type MessageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageDataType) {

    return (
        <div className={s.wrapper}>
            <img src={props.avatar} alt="avatar" className={s.avatar__image}/>
            <div className={s.message__block}>
                <p className={s.username}>{props.name} </p>
                <p className={s.text__message}>{props.message} </p>
                <p className={s.send__time}>{props.time}</p>
            </div>
        </div>
    );
}

export default Message
