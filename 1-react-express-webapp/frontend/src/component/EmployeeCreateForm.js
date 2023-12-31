import axios from "axios";
import { useState } from "react";

export function EmployeeCreateForm() {
    const [formValue, setformValue] = useState({});

    const handleChange = (e) => {
        setformValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        // e.preventDefault()
        try {
            axios.post('http://localhost:3000/employee', {formValue})
            .then(res=>{
                console.log(res)
            })
        } catch(err){
            console.log(err)
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={handleChange}/>
            <label htmlFor="gender">gender</label>
            <input type="text" id="gender" name="gender" onChange={handleChange}/>
            <label htmlFor="dept">department</label>
            <input type="text" id="dept" name="dept" onChange={handleChange}/>
            <input type="submit" value='submit'/>
        </form>
    )
}