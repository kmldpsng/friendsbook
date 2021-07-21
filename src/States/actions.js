import { NEW_MESSAGE } from "./types";
import { v4 as uuidv4 } from 'uuid';

 const newMessage = ({text}) => {

    return {
        type: NEW_MESSAGE,
        item: { id: uuidv4(), text, timestamp: new Date().toLocaleString() }
    }
}

export default newMessage;
