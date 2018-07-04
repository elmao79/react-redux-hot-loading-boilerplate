
const initialState = {
    message: 'Hello world!'
};
const mainMessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'change-message':
            return Object.assign({}, state, { message: action.message });
        default:
            return state;
    }
};

export default mainMessageReducer;
