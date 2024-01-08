import {generateClient } from 'aws-amplify/api'
import { listTodos } from '../graphql/queries'
import { deleteTodo } from '../graphql/mutations'

import { useEffect, useState } from 'react';

export function ListTodosComp() {
    const [fetchAllTodos, setAllTodos] = useState()
    const [deletedTodo, setDeletedTodo] = useState()
    const client = generateClient()

    const fetchTodos = async() => {
        const allTodos = await client.graphql({
            query: listTodos,
            // variables: {type: "TODO"}
        });
        setAllTodos(allTodos.data.listTodos.items)

    }
    useEffect(() => {
        fetchTodos()
    }, [deletedTodo]) // refresh when an item is deleted
    
    const onDeleteTodo = (itemID) =>  {
        client.graphql({ 
            query: deleteTodo,
            variables: { input: {id: itemID} }
            })
            .then( (res) => {
                setDeletedTodo(res.data.deleteTodo)
            } )

    }

    if (!fetchAllTodos) {
        return null;
    }

    return (
        <>
        {
            Object.keys(fetchAllTodos).map((iid) => {
                return (
                    <tr key={iid}>
                        <td>{fetchAllTodos[iid].name}</td>
                        <td>{fetchAllTodos[iid].description}</td>
                        <td><button onClick={() => onDeleteTodo(fetchAllTodos[iid].id)}>Delete</button></td>
                    </tr>
                )
            })
        }
        </>
    )
}