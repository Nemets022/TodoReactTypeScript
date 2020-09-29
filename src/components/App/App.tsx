import React, {useEffect, useState} from "react";
import {AppHeader} from "../AppHeader/AppHeader";
import {SearchPanel} from "../SearchPanel/SearchPanel";
import {TodoList} from "../TodoList/TodoList";
import {ItemStatusFilter} from "../ItemStatusFilter/ItemStatusFilter";
import {ItemAddForm} from "../ItemAddForm/ItemAddForm";
import {ITodoList} from "../../interfaces";


export const App: React.FC = () => {


    const [data, setData] = useState<ITodoList[]>(  [
        {label: 'Выучить RactJS', mark: true, done: false, id: 1}
    ])


    useEffect(() => {
        const oldData = localStorage.data ? JSON.parse(localStorage.data) : []
        setData(oldData)
    }, [])


    const onDeleteInput = (id: number) => {
        if (window.confirm(`Вы уверены что хотите удалить элемент с ID: ${id}`)) {
            const newData = data.filter(item => item.id !== id)
            localStorage.data = JSON.stringify(newData)
            setData(newData)
        }
    }

    const onMarkInput = (id: number) => {
        const newMark = data.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    mark: !item.mark
                }
            } else return {
                ...item
            }
        })
        localStorage.data = JSON.stringify(newMark)
        setData(newMark)
    }

    const onDoneInput = (id: number) => {
        const newMark = data.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    done: !item.done
                }
            } else return {
                ...item
            }
        })
        localStorage.data = JSON.stringify(newMark)
        setData(newMark)
    }

    const onItemAdded = (text: string) => {
        const newItem: ITodoList = {
            label: text,
            mark: false,
            done: false,
            id: new Date().getTime()
        }
        const newData = [
            ...data,
            newItem
        ]
        localStorage.data = JSON.stringify(newData)
        setData(newData)

    }

    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const search = event.target.value.toLowerCase()
        const oldData = [ ...data ]
        if (search.length) {
            const displaySearch = oldData.filter(el => {
                const searchValue = el.label.toLowerCase()
                return searchValue.indexOf(search) > -1
            })
            setData(displaySearch)
        } else {
            setData(JSON.parse(localStorage.data))
        }
    }

    const filterStatus = (type: string) => {
        switch (type.toLowerCase()) {
            case 'all':
                setData(JSON.parse(localStorage.data))
                break
            case 'active':
               setData(data.filter(el => el.mark === true))
                break
            case 'done':
                setData(data.filter(el => el.done === true))
                break
            default:
                console.log('All')
        }
    }
    

    const doneFilter = data.filter(item => item.done).length
    return (
        <div className='todo-app'>
            <AppHeader done={doneFilter} toDo={data.length - doneFilter}/>
            <div className="top-panel d-flex">
                <SearchPanel  onChangeSearch={onChangeSearch}/>
                <ItemStatusFilter onFilter={filterStatus}/>
            </div>

            <TodoList data={data} onDelete={onDeleteInput} onMark={onMarkInput} onDone={onDoneInput}/>
            <ItemAddForm onAdd={onItemAdded}/>
        </div>
    )
}