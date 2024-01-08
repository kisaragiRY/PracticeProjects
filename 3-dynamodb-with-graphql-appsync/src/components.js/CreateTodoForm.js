import {generateClient } from 'aws-amplify/api'
import { createTodo } from '../graphql/mutations'
import { useRef } from 'react'

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// GraphQLAuthMode = 'apiKey' | 'oidc' | 'userPool' | 'iam' | 'lambda' | 'none';

export function CreateTodoForm(props) {
    const nameRef = useRef();
    const desRef = useRef();

    const client = generateClient()
    
    const createNewTodo = async(TodoDetail) => {
        const newTodo = await client.graphql({ 
            query: createTodo,
            variables: { input: TodoDetail },
            // authMode: 'userPool'
            authMode: 'iam'
        });

    }

    const handleSubmit = () => {
        // e.preventDefault();

        const newTodoDetail = {
            name: nameRef.current.value,
            description: desRef.current.value,
            // type: "TODO"
        }
        console.log(nameRef.current.value)
        createNewTodo(newTodoDetail)
        .then(() => {
            window.location.reload(true)
        })
    }
    return (
        <>
        {/* <Authenticator> */}
            {/* {({signout, user}) => ( */}

                    <tr>
                        <td>
                            <input type='text' name='name' required ref={nameRef} />
                        </td>
                        <td>
                            <input type='text' name='description' ref={desRef}/>
                        </td>
                        <td>
                            <button onClick={handleSubmit}>Create</button>
                        </td>
                    </tr>
            {/* )} */}

        {/* </Authenticator> */}
        </>
    )
}