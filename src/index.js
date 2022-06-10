import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CounterReducer from "./redux/CounterReducer";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(CounterReducer);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
