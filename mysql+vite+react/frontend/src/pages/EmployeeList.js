import axios from "axios";
import { EmployeeCreateForm } from "../component/EmployeeCreateForm";
import { useEffect, useState } from "react";

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
                    </tr>
                </thead>
                <tbody>
                    {resData.map((item)=>(
                        <tr key={item.id}>{
                            Object.keys(item).map((key, i)=>{
                            return(
                                <td key={i}>{item[key]}</td>
                            )
                        })}</tr>
                    ))}
                   
                </tbody>
            </table>
        </div>
    )
}