import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { IStore } from "./initialState";
import {composeWithDevTools} from "redux-devtools-extension";

//const createStoreWithMiddleware = createStore() applyMiddleware(thunkMiddleware)(createStore())

export const configureStore = (initialState: IStore) => {
    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
    //createStoreWithMiddleware(rootReducer, initialState);
    // if (module.hot) {
    //     module.hot.accept("../reducers", () => {
    //         store.replaceReducer(rootReducer);
    //     })
    // }

    return store;
}

export default configureStore;