import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {EmployeeList} from "./pages/EmployeeList";
import {Home} from "./pages/Home"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='/' element={<Home/>} />
      <Route path='/employeelist' element={<EmployeeList/>}/>
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
