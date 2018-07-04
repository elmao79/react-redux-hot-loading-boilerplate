
import React, { Component } from 'react';
import { connect } from 'react-redux';

class MySecondComponent extends Component {

    render() {
        return (
            <h1>{this.props.message}</h1>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.mainMessageReducer.message
    }
};

export default connect(mapStateToProps)(MySecondComponent);
