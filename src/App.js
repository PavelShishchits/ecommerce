import React from 'react';
import Header from './js/components/header/Header/index';
import Footer from './js/components/footer/Footer/index';
import {Route, Switch} from "react-router-dom";

import PageMain from './js/pages/PageMain';
import PageBasket from './js/pages/PageBasket';
import PageCatalog from './js/pages/PageCatalog';
import PageProductList from './js/pages/PageProductList';
import PageSingleProduct from './js/pages/PageSingleProduct';

class App extends React.Component {

  render() {

    return (
      <div className="App site-bg">

        <Header />

        <div className="main-wrap">
          <div className='container'>
            <main className="main-content">
              <Switch>
                <Route path='/' exact component={PageMain}/>
                <Route path='/catalog' exact component={PageCatalog}/>
                <Route path='/catalog/:section' exact component={PageProductList}/>
                <Route path='/catalog/:section/:id' component={PageSingleProduct}/>
                <Route path='/basket' component={PageBasket}/>
              </Switch>
            </main>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

export default App;
