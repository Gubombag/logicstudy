import React, {useState} from "react";
import {Container, SubContainer, Paragraph} from "./styles.ts"

const Card = () => {

    const [todos, setTodos] = useState([
        {id: 1, title: "Wash My Car", done: false},
        {id: 2, title: "Buy Some Milk", done: true}
    ])

    const handleToggle = (selectedTodo) => {
        setTodos(todos.map(todo => {
            if(todo.id === selectedTodo.id) {
                return{
                    ...todos,
                    done: !selectedTodo
                }    
            }
            return todo
        }))
    }

    const handleAdd = (newTodo) => {
        setTodos([...todos, {
            id: todos.length + 1,
            title: newTodo,
            done: false
        }])
    }

    return(
        <Container>
            <SubContainer>
                <Paragraph>
                    Oi
                </Paragraph>
            </SubContainer>
        </Container>
    )
}

export default Card;