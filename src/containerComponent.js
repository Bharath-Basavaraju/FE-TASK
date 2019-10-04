import React from 'react';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware } from 'redux';
import CreateSagaMiddleware from 'redux-saga';
import { FeReducer } from  './reducers/feReducer';
import feSagas from './sagas/feSagas';
import ProductContainer from './view/productContainer';
import * as actions from './actions/feActions';

const sagaMiddleware = CreateSagaMiddleware();
let store = createStore(FeReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(feSagas);
const title = "FE Task",
    errorMsg = "Sorry, we are trying to get back. Try after sometime !";

export default class ContainerComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
    }

    render(){
        return(
            this.state.hasError ?
                <h3>{errorMsg}</h3>
            :   <div>
                    <h1>{title}</h1>
                    <Provider store={store}>
                        <ProductContainer {...this.props} />
                    </Provider>
                </div>
        )
    }
}