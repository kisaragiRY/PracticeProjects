import { 
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider
  } from 'react-router-dom'

import './App.css';

import { Home } from './pages/Home';

// import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

import { LoginPage, RegisterPage, ValidatePage } from './components.js/auth';

import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports'
Amplify.configure(awsmobile)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={RegisterPage} />
      <Route path='/login' element={LoginPage} />
      <Route path='/validate' element={ValidatePage} />
    </Route>
  )
)

function App() {
  return (
    // <Authenticator>
    // {({signout, user}) => (
        <RouterProvider router={router} />
    // )}
        // </Authenticator>
  );
  
}

export default App;
