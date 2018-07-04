
import React, { Component } from 'react';
import MySecondComponent from './my-second-component';
import { connect } from 'react-redux';
import * as mainMessageActions from '../redux/actions/main-message-actions';

class MyComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: this.props.inputValue
        };

        this.handleTextInputChange = this.handleTextInputChange.bind(this);
    }

    handleTextInputChange(e) {
        this.setState({ inputValue: e.target.value });
        this.props.changeMessage(e.target.value);
    }

    render() {
        return (
            <div>
                <MySecondComponent />
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleTextInputChange}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.mainMessageReducer.message,
        inputValue: state.mainMessageReducer.message
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeMessage: message => { dispatch(mainMessageActions.changeMessage(message)); }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
