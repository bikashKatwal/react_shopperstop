import React, {Component} from 'react';
import {connect} from 'react-redux';

class Stats extends Component {

    cost = () => {
        let totalCost = 0;
        this.props.shoppingBag.forEach((item) => totalCost += item.cost);
        return totalCost;
    };

    calories = () => {
        let totalCalories = 0;
        this.props.shoppingBag.forEach((item) => totalCalories += item.calories);
        return totalCalories;
    };

    weight = () => {
        let totalWeight = 0;
        this.props.shoppingBag.forEach((item) => totalWeight += item.cost);
        return totalWeight;
    };


    render() {

        return (

            <div className="col-md-4 pt-5">
                <h3 className="text-center">Stats Items</h3>

                <ul className="list-group">
                    <li className="list-group-item">Cost: $ {this.cost()}</li>
                    <li className="list-group-item">Calories: {this.calories()} kcal</li>
                    <li className="list-group-item">Weight: {this.weight()} mg</li>
                </ul>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {shoppingBag: state.shopping_bag}
};
export default connect(mapStateToProps, null)(Stats);