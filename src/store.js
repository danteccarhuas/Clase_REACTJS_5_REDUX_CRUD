import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//importar los reducers
import rootReducer from './reducers';

//Unico State para toda la aplicacion
const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;