import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/700.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthWrapper, {AuthState} from "./AuthWrapper";
import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthState>
          <Header/>
          <AuthWrapper>
            <App />
          </AuthWrapper>
      </AuthState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
