import React from "react";


type AppHeaderProps = {
    toDo: number
    done: number
}
export const AppHeader: React.FC<AppHeaderProps> = ({toDo, done}) => {

    return (
       <div className='app-header d-flex'>
           <h1>Цели</h1>
           <h2>{toDo} активные, {done} завершёные</h2>
       </div>
    )
}