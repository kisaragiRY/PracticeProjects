import { CreateTodoForm } from '../components.js/CreateTodoForm';
import { ListTodosComp } from '../components.js/ListTodosComp';

export function Home() {

    return (
        <>
            <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>description</th>
                            <th>options</th>
                        </tr>
                    </thead>
                    <tbody>
                            <ListTodosComp/>
                            <CreateTodoForm/>
                    </tbody>
            </table>
        </>
    )
}