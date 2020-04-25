import React, { Component } from 'react';

import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

class App extends Component {
 
  render() { 
    return (
      <Layout>
         <BurgerBuilder />  
      </Layout>

    );
  }
}

export default App;