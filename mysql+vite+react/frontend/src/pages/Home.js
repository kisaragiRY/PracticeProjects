import { Link } from "react-router-dom";
import {EmployeeList} from "./EmployeeList";

export function Home(){
    return(
        <div>
            <h1>A simple CRUD app</h1>
            <h2>Employees Manager</h2>
            <Link to="/employeelist"> EmployeeList</Link>
          
        </div>
    )
}