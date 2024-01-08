import { 
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider
  } from 'react-router-dom'

import './App.css';

import { Home } from './pages/Home';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports'
Amplify.configure(awsmobile)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='/' element={<Home/>} />
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
