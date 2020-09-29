import React from "react";

type TodoListItemProps = {
    label: string
    id: number
    mark: boolean
    done: boolean
    onDelete: (id: number) => void
    onMark: (id: number) => void
    onDone: (id: number) => void
}

export const TodoListItem: React.FC<TodoListItemProps> = ({label, onDelete, id, mark, onMark, done, onDone}) => {
    let cls = ['todo-list-item']
    if (done) {
        cls.push('done')
    }

    if (mark) {
        cls.push('important')
    }

    const disabled = mark ? true : false
    const active = mark ? 'active' : ''

    return (
        <span

            className={cls.join(' ')}>
            <span
                className='todo-list-item-label'
                onClick={() => onDone(id)}
            >
                {label}

            </span>
                 <button
                     type='button'
                     onClick={() => onMark(id)}
                     className={`btn btn-outline-success btn-sm float-right ${active}`}
                 >
                <i className="fa fa-exclamation"></i>
            </button>

            <button
                type='button'
                disabled={disabled}
                onClick={() => onDelete(id)}
                className='btn btn-outline-danger btn-sm float-right'
            >
                <i
                    className="fa fa-trash-o"
                ></i>
            </button>
        </span>
    )
}