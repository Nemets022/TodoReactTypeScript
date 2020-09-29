import React, {useState} from "react";

type ItemAddFormProps = {
    onAdd:(text: string) => void
}

export const ItemAddForm: React.FC<ItemAddFormProps> = ({onAdd}) => {

    const [text, setText] = useState('')

    const inputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }
    const onAddInput = (text: string) => {
        if (text.length === 0) {
            window.alert(`Поле не может быть пустым!`)
        } else {
            if (window.confirm(`Вы уверены что хотите добавить ${text}?`) && text.length > 0)
                onAdd(text)
            setText('')
        }

    }
    const onkeypressInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
            case 'Enter':
                if (text.length === 0) {
                    window.alert(`Поле не может быть пустым!`)
                } else {
                    if (window.confirm(`Вы уверены что хотите добавить ${text}?`) && text.length > 0)
                        onAdd(text)
                    setText('')
                }
        }
    }

    return (
        <div className="item-add-form">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Новая Цель</span>
                </div>
                <input type="text"
                       className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"
                       onChange={inputValue}
                       onKeyPress={onkeypressInput}
                       value={text}

                />
                <button
                    onClick={() => onAddInput(text)}
                    className='btn btn-outline-secondary'>Добавить</button>
            </div>
        </div>
    )
}