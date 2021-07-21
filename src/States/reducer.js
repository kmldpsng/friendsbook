import { NEW_MESSAGE } from './types';

export const initialState = { message: [] };

const reducer = (state, action) => {

    switch (action.type) {
        case NEW_MESSAGE:
            return {
                ...state, message: [...state.message, action.item]
            }
        default:
            return state;
    }
}

export default reducer;