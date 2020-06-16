import React from 'react'
import {Route} from 'react-router-dom'
import App from '../components/App'
import SignupPage from '../components/signup/SignupPage'
import LoginPage from '../components/login/LoginPage'
import ShopPage from '../components/shop/ShopPage'

import requireAuth from '../utils/requireAuth'

export default(
  <div className="container">
    <Route path="/" exact strict component={App}></Route>
    <Route path="/signup" exact strict component={SignupPage}></Route>
    <Route path="/login" exact strict component={LoginPage}></Route>
    <Route path="/shop" exact strict component={requireAuth(ShopPage)}></Route>
  </div>
)