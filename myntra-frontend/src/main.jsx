import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react';


ReactDOM.createRoot(document.getElementById('root')).render(

 <BrowserRouter>
  <ChakraProvider >
    <Provider store={store}>
        <App />
    </Provider>
  </ChakraProvider>
  </BrowserRouter>
)
