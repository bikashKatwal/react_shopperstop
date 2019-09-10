import groceryItemsList from '../data/groceryItems';
import {addToBag} from "./helper";

export default (state = groceryItemsList, action) => {
    let grocery = '';
    switch (action.type) {
        case 'ADD_GROCERY':
            grocery = state.filter((item) => item.id !== action.payload);
            return grocery;
        case 'REMOVE_GROCERY':
            grocery = [...state, addToBag(action.payload)];
            return grocery;
        default:
            return state
    }
};
