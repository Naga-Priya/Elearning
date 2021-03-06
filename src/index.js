import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, createStore } from 'redux';
import PostReducer from "./reducer/Reducer.js"
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from '../src/components/Register.js';
import Login from '../src/components/Login.js';
import About from '../src/components/About.js';

// App.use(express.static(__dirname));

// App.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

const store = createStore(PostReducer,applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <Provider store={store}>
    <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login />}/>
                    <Route path="/About Us" element={<About />} />

                </Routes>
            
    
    <App />
    
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
