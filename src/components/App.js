import React, {Component} from 'react';
import GroceryItem from "./GroceryItem";
import ShoppingBag from "./ShoppingBag";
import Stats from "./Stats";
import PocketMoney from "./PocketMoney";



class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <PocketMoney/>
                </div>
                <div className="row">
                    <GroceryItem/>
                    <ShoppingBag/>
                    <Stats/>
                </div>
            </div>
        );
    }
}


export default App;