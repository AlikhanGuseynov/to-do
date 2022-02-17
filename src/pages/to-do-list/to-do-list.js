import './to-do-list.css'
import React, {useState} from "react";

export function ToDoList() {

    const list = [
        {id: 0, checked: false, text: 'Some text 0', status: 0},
        {id: 1, checked: false, text: 'Some text 1', status: 2},
        {id: 2, checked: false, text: 'Some text 2', status: 3},
        {id: 3, checked: false, text: 'Some text 3', status: 1},
    ]

    const inputValue = React.createRef();

    const [taskList, setTask] = useState([...list])

    function addPost() {
        const item ={
            id: new Date().getTime(),
            checked: true,
            text: inputValue.current.value,
            status: 2
        }
        setTask([...taskList, item])
    }

    return (
        <div className={'box task-list'}>
            <input type="text" ref={inputValue} className={'add-input'} placeholder={'add task'}/>
            <button className="add-btn" onClick={addPost}>Add task</button>
            {
                taskList.map(item => {
                    return (
                        <label htmlFor={item.id} className={'list-item'} key={item.id}>
                            <input id={item.id} defaultChecked={item.checked} className={'list-item-checkbox'}
                                   type="checkbox"/>
                            <span className="list-item-text">{item.text}</span>
                            <div className="list-item-chip">{item.status}</div>
                        </label>
                    )
                })
            }
        </div>
    )

}
