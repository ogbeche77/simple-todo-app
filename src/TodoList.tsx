import React from 'react';

interface todoListProps {
    items: { id: string, text: string }[];
}

const todoList: React.FC<todoListProps> = props => {
    return (
        <ul>
            {props.items.map(todo => (
                <li key={todo.id}>{todo.text}
                </li>
            ))}


        </ul>


    )


}
export default todoList;