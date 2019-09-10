import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeGroceryById, addPocketMoneyById} from '../actions';

class ShoppingBag extends Component {
    renderShoppingBagList() {
        return this.props.shoppingBag.map((item) => {
            return <li className="list-group-item" key={item.id} onClick={() => {
                this.props.removeGroceryById(item.id);
                this.props.addPocketMoneyById(item.id);
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
                <h3 className="text-center">ShoppingBag Items</h3>
                <ul className="list-group">
                    {this.renderShoppingBagList()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {shoppingBag: state.shopping_bag}
};

export default connect(mapStateToProps, {removeGroceryById, addPocketMoneyById})(ShoppingBag);