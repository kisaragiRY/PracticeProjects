import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export function EmployeeDetail(){
    const {id} = useParams();
    const [details, setdetails] = useState({});
    // var editing = true;
    const [editing, setediting] = useState(true)

    useEffect(()=>{
        axios.get('http://localhost:3000/employee/'+id)
            .then((response) => {
                setdetails(response.data[0])
            })
            .catch((err) =>{
                console.log(err);
            })
    }, [])
    if (!details) return null;

    const handleEditing = (e) => {
        e.preventDefault();
        setediting(!editing)
    }

    
    const handleChange = (e) => {
        setdetails({
            ...details,
            [e.target.name]: e.target.value
        })
        console.log(details);
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setediting(!editing)

        try {
            axios.put('http://localhost:3000/employee/'+id, {details})
            .then(res=>{
                console.log(res)
            })
        } catch(err){
            console.log(err)
        }
    }
    return(
        <div>
            <Link to="/employeelist">Back to employee list</Link>
            <h1>{id}</h1>
            <form>
                {editing? (
                    <div>
                        <label htmlFor="name">Name: </label>
                        <span name="name">{details.name}</span>
                        <label htmlFor="gender">Gender: </label>
                        <span name="gender">{details.gender}</span>
                        <label htmlFor="dept">Department: </label>
                        <span name="dept" >{details.dept}</span>
                        <br/>
                        <button onClick={handleEditing}>Edit</button>
                    </div>  
                ):(
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input name="name" placeholder={details.name} onChange={handleChange}/>
                        <label htmlFor="gender">Gender: </label>
                        <input name="gender" placeholder={details.gender} onChange={handleChange}/>
                        <label htmlFor="dept">Department: </label>
                        <input name="dept" placeholder={details.dept} onChange={handleChange}/>
                        <br/>
                        <button onClick={handleSubmit}>Save</button>
                    </div>  
                )
                }
            </form>
            
            
        </div>
    )
}