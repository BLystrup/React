import React, { useState } from 'react';

const List = () => {

    const [toDoItem, setToDoItem] = useState('');
    const [toDoList, setToDoList] = useState([]);

    // const changeHandler = (e) => {
    //     setToDoItem({...toDoItem, [e.target.name]: e.target.value})
    //     console.log(e.target.name)
    // }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(`Task: ${JSON.stringify(toDoItem)}`)
        const newToDoItem = {
            task: toDoItem,
            complete: false
        }
        setToDoList([...toDoList, newToDoItem])
        setToDoItem('')
    }

    const handleToDoItem = (e, index) => {
        const updatedToDoList = [...toDoList];
        updatedToDoList[index].complete = e.target.checked
        setToDoList(updatedToDoList)
    }

    const deleteItem = (index) => {
        setToDoList(toDoList.filter((_oneItem, i) => i !== index))
    }

    return(
        <div className='container'>
            <div className='row'>
                <form action='' className='form col-4 offset-2' onSubmit= {(e) => {submitHandler(e)}}>
                    <div className='form-group'>
                        <label htmlFor='' className='form-label'>To Do Item:</label>
                        <input type='text' name='task' value={toDoItem} className='form-control' onChange={(e) => setToDoItem(e.target.value)}/>
                    </div>
                    <button className='btn btn-primary'>Add Item</button>
                </form>
            </div>
            <div>
                {
                    toDoList.map((oneItem, i) => (
                        <div key={i}>
                            <p style={{textDecoration: oneItem.complete ? 'line-through': 'None'}}>{oneItem.task}</p>
                            <input checked={oneItem.complete} type='checkbox' onChange={(e) => handleToDoItem(e, i)}/>
                            <button className='btn btn-primary' onClick={(e) => deleteItem(i)}>Delete Item</button>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default List;