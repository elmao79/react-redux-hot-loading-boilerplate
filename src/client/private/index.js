
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { hot, AppContainer } from 'react-hot-loader';

class Prueba extends Component {
    render() {
        return (
            <h1>Hello world!</h1>
        )
    }
}

const render = _ => {
    ReactDOM.render(
        <AppContainer>
            <Prueba />
        </AppContainer>,
        document.getElementById('app')
    )
};
render();
