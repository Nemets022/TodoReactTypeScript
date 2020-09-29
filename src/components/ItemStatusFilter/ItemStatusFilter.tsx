import React from "react";


type ItemStatusFilterProps = {
    onFilter: (type: string) => void
}

export const ItemStatusFilter: React.FC<ItemStatusFilterProps> = ({onFilter}) => {

    const cls = ['']
    if (false) {
        cls.push('active')
    }

    const onAllHandler = (type: string) => {
        onFilter(type.toLowerCase())
    }

    return (
        <div className='btn-group'>
            <button
                type='button'
                onClick={() => onAllHandler('ALL')}
                className={`btn btn-info ${cls.join(' ')}`}>Все
            </button>
            <button
                type='button'
                onClick={() => onAllHandler('ACTIVE')}
                className={`btn btn-outline-secondary ${cls.join(' ')}`}>Активные
            </button>
            <button
                type='button'
                onClick={() => onAllHandler('DONE')}
                className={`btn btn-outline-secondary ${cls.join(' ')}`}>Завершёные
            </button>
        </div>
    )
}