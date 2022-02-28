import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import myStore from './redux/store';
import { Provider } from 'react-redux';

function App() {


  console.log("App.js :", myStore.getState());

  return (
    <div className="App">

      <Provider store={myStore}>

        <BrowserRouter >

          <MainComponent />

        </BrowserRouter>


      </Provider>




    </div>
  );
}

export default App;
