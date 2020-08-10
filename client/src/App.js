import React from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal'
import store from './store';

import {Provider} from 'react-redux';
import {Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    < Provider store = {store}>
    <div className="App">
     <AppNavbar></AppNavbar>
     <Container>
     <ItemModal></ItemModal>
     <ShoppingList> </ShoppingList>
     </Container>
    </div>
    </Provider>
  );
}

export default App;
