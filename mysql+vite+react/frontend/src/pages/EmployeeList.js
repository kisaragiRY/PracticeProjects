import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EmployeeCreateForm } from "../component/EmployeeCreateForm";
import { EmployeeDelete } from "../component/EmployeeDelete";

export function EmployeeList(){
    const [resData, setresData] = useState()
    useEffect(()=>{
        axios.get('http://localhost:3000/employee')
            .then((response) => {
                setresData(response.data)
            })
            .catch((err) =>{
                console.log(err);
            })
    }, [])
    if (!resData) return null;
    return (
        <div>
            EmployeeList
            <EmployeeCreateForm/>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>gender</th>
                        <th>dept</th>
                        <th>option</th>
                    </tr>
                </thead>
                <tbody>
                    {resData.map((item)=>(
                        <tr key={item.id}>{
                            
                            Object.keys(item).map((key, i)=>{
                                if(key=="name"){
                                    let link = "/employeedetail/" + item.id
                                    return(
                                        <td key={i}><Link to={link}>{item[key]}</Link></td>
                                    )
                                }
                                return(
                                    <td key={i}>{item[key]}</td>
                                )
                        })
                            
                        }
                            <EmployeeDelete id={item.id}/>
                        </tr>
                    ))}
                   
                </tbody>
            </table>
        </div>
    )
}