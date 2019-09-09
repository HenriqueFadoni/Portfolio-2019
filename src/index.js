import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
// Redux
// import { Provider } from 'react-redux'
// import { 
//     createStore,
//     combineReducers 
// } from 'redux'
// Routes
import { BrowserRouter } from 'react-router-dom'

// const rootReducer = combineReducers({});

// const store = createStore(rootReducer);

const app = (
	// <Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	// </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

serviceWorker.unregister()
