import React from "react";
import {TodoListItem} from "../TodoListItem/TodoListItem";
import {ITodoList} from "../../interfaces";


type TodoListProps = {
    data: ITodoList[]
    onDelete:(id: number) => void
    onMark:(id: number) => void
    onDone:(id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({data,onDelete, onMark, onDone}) => {
    const elements = data.map((item) => {
        const { id, ...itemsProps } = item
        return (
            <li
                key={id}
                className='list-group-item'
            >
                <TodoListItem id={id} { ...itemsProps } onDelete={onDelete} onMark={onMark} onDone={onDone} />
            </li>
        )
    })

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    )
}