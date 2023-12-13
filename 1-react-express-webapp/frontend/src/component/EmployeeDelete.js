import axios from "axios";


export function EmployeeDelete({id}){
    const handleDelete = (e) => {
        // e.preventDefault();
        try {
            axios.delete('http://localhost:3000/employee/'+id)
            .then(res=>{
                window.location.reload(true)
                console.log(res)
            })
        } catch(err){
            console.log(err)
        }
    }
    return (
        <td><button onClick={handleDelete}>Delete</button></td>
    )
}