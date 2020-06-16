import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './App.css';

// nav
import NavigationBar from './components/NavigationBar'

// 引入提示信息
import FlashMessagesList from './components/flash/FlashMessagesList'

// route
import routes from './routes/routes'
import {BrowserRouter as Router} from 'react-router-dom'

// import App from './components/App'
import * as serviceWorker from './serviceWorker';

// middleware
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from  "redux-devtools-extension"


// 请求头携带token
import setAuthorizationToken from '../src/utils/setAuthorizationToken'

import { setCurrentUser } from './actions/login'
import jwtDecode from 'jwt-decode'

// redux
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk,logger)))

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken)
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
}


  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
       <Router routes={routes}>
         <NavigationBar />
         <FlashMessagesList />
        {routes}
       </Router> 
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
