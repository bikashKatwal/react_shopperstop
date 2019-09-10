import {addToBag} from "./helper";

export default (state = 50, action) => {
    let amount = 0;
    switch (action.type) {
        case 'ADD_POCKET_MONEY':
            amount = state + addToBag(action.payload).cost;
            return amount;
        case 'REMOVE_POCKET_MONEY':
            amount = state - addToBag(action.payload).cost;
            return amount;
        default:
            return state;
    }
}