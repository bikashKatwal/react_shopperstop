import React, {Component} from 'react';
import {connect} from 'react-redux';


class PocketMoney extends Component {
    render() {
        return (
            <div>
                <h5 className="text-center">You have {this.props.money} amount to spend on Grocery Today!!</h5>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {money: state.pocketMoney};
};

export default connect(mapStateToProps, null)(PocketMoney);