import {addToBag, removeFromBag} from './helper';

export default (state = [], action) => {
    let shoppingBag = '';
    switch (action.type) {
        case 'ADD_GROCERY':
            shoppingBag = [...state, addToBag(action.payload)];
            return shoppingBag;
        case 'REMOVE_GROCERY':
            shoppingBag = removeFromBag(state, action.payload);
            return shoppingBag;
        default:
            return state
    }
}

