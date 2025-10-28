import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios';

function TodoList() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        async function fetchData() {
            const url = "http://jsonplaceholder.typicode.com/todos"
            const response = await axios.get(url)
            if(response.status == 200) {
                const data = response.data
                setTodos(data)
            }
        }
        fetchData()
    }, [])
    return <div>
        <table>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>todoId</th>
                    <th>title</th>
                    <th>completed</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((t) => <tr key={t.id}>
                    <td>{t.userId}</td>
                    <td>{t.id}</td>
                    <td>{t.title}</td>
                    <td>{t.completed ? 'done' : 'not done'}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
}

export default TodoList
