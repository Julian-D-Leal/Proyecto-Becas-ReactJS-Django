import React, { Component} from "react";
import {Provider} from "react-redux"
import store from "./store"
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from "./routers/AppRouter";
import Layout from "./components/layouts/Layout";

class App extends Component {
  render(){
    return (
      <Router>
        <Provider store={store}>
          <Layout>
            <AppRouter/>
          </Layout>
        </Provider>
      </Router>
    );
  }
}

export default App;
