import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

// import RouterComponent from './route/routes';
import App from './App';
import { AuthContexProvider } from './context/authContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <RouterComponent />
  // </React.StrictMode>

  <React.StrictMode>
    <AuthContexProvider>
  <App />
  </AuthContexProvider>

</React.StrictMode>
);


