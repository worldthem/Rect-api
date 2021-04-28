import './assets/cms/css/App.css';
import Home from './front/pages/Home';
import Header from './front/layouts/Header';
import Footer from './front/layouts/Footer';
import ProductList from './front/pages/ProductList';
import Checkout from './front/pages/Checkout';
import Profile from './front/pages/Profile';
import Helper from './Helper';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConfigVar from './front/context/ConfigVar';

function App() {

      return (
          <ConfigVar>
           <Helper/>
              <Router>
                  <div>
                      <Header />
                           <section>
                               <div class="container-fluid">
                                 <div class="row" id="livesearch">
                                       <Switch>
                                          <Route exact path='/' component={Home} />
                                          <Route exact path='/product-list' component={ProductList} />
                                          <Route exact path='/checkout' component={Checkout} />
                                          <Route exact path='/profile' component={Profile} />
                                       </Switch>
                                 </div>
                               </div>
                           </section>
                      <Footer />
                 </div>
                </Router>
            </ConfigVar>
      );

}

export default App;
