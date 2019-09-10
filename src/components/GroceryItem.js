import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addGroceryById, removePocketMoneyById} from '../actions';

class GroceryItem extends Component {

    renderGroceryItems() {
        return this.props.grocery.map((item) => {
            return <li className="list-group-item" key={item.id}
                       onClick={() => {
                           this.props.addGroceryById(item.id);
                           this.props.removePocketMoneyById(item.id);
                       }}>
                <b>{item.name}</b> -
                <span className="badge badge-primary"> {item.cost} </span> -
                <span className="badge badge-secondary">{item.calories}</span> -
                <span className="badge badge-success">{item.weight}</span>
            </li>
        });
    }

    render() {
        return (
            <div className="col-md-4 pt-5">
                <h3 className="text-center">Grocery Item</h3>

                <ul className="list-group">
                    {this.renderGroceryItems()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {grocery: state.grocery, money: state.pocketMoney}
};

export default connect(mapStateToProps, {addGroceryById, removePocketMoneyById})(GroceryItem);