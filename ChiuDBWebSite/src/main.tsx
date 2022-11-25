import * as React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux"

import { createStore, applyMiddleware } from 'redux'
import reducers from "./store/index"
import thunk from 'redux-thunk'
const store = createStore(
  reducers, {}, applyMiddleware(thunk)
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
)