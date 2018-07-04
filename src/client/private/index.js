
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getStore } from './redux/store';
import { Provider } from 'react-redux';
import MyComponent from './components/my-component';

const store = getStore();

class Prueba extends Component {
    render() {
        return (
            <Provider store = {store}>
                <MyComponent />
            </Provider>
        )
    }
}

const render = _ => {
    ReactDOM.render(
        <Prueba />,
        document.getElementById('app')
    )
};
render();
