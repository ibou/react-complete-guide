import React, { Component } from 'react';
 
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
 

  render() {
    console.log('[App.js] render'); 
    return (
     <Layout>
       <BurgerBuilder />
     </Layout>
     
    ); 
  }
}

export default App;