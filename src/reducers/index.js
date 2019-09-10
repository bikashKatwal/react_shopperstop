import {combineReducers} from "redux";
import grocery from './grocery_reducer';
import shopping_bag from './shoppingbag_reducer'
import pocketMoney from './spending_reducer';

const rootReducer = combineReducers({
    grocery, shopping_bag, pocketMoney
});

export default rootReducer;