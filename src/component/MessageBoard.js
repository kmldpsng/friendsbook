import React, { useContext } from 'react';
import context from '../context';

export default function Messageboard() {
    const { state: { message } } = useContext(context);



    return (
        <div>
            {
                message.map(messageList => {
                    const { text, timestamp, id } = messageList;

                    return (
                        <div key={id}>
                            <h4>{timestamp}</h4>
                            <p>{text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
