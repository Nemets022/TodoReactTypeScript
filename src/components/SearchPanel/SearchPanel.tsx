import React from "react";


type SearchPanelProps = {
    onChangeSearch:(event: React.ChangeEvent<HTMLInputElement>) => void
}
export const SearchPanel: React.FC<SearchPanelProps> = ({onChangeSearch}) => {


    return (
        <input
            type='text'
            className='form-control search-input'
            placeholder={'Поиск...'}
            onChange={onChangeSearch}
        />
    )
}