import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { initialState } from "./store/initialState"

ReactDom.render(
    <Provider store={configureStore(initialState)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById("root") as HTMLElement);