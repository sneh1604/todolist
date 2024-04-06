import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import { BsCircleFill, BsFillTrashFill } from 'react-icons/bs';



function Home() {
    const [todos, setTodos] = useState([]);

   const getTodos = () => {
    axios.get('http://localhost:3001/get')
        .then(result => {
          console.log(result.data);
          setTodos(result.data)
        })
        .catch(err => console.log(err))
   }
    
    useEffect(() => {
        getTodos()
    },[])

    const handleEdit = (_id) => {
        axios.put('http://localhost:3001/update'+_id)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    const handleDelete = (_id) => {
        axios.delete('http://localhost:3001/delete'+_id)
        .then(result => console.log(result))
        .catch(err => console.log(err))
        
    }

    const handleCreate = () => {
      getTodos()
    }

    return (
        <div>
            <h2>Todolist</h2>
            <Create onPost = {handleCreate}></Create>
            {
                todos.length === 0 
                ?<div><h2> No todos </h2></div>
                :
                todos.map((todo,index) => (
                    <div className='task' key={todo._id} style={{display:"flex",alignItems: 'center',width: '345px',justifyContent: 'space-between', marginTop: '2px', padding: '2px 5px 2px 5px', border: '1px solid #ccc', borderBottom: '2px solid', borderRadius: '4px', fontSize: '16px', fontFamily: 'Arial, sans-serif', outline: 'none',backgroundColor: 'black', color: 'white'}}>
                      <div className='checkbox' onClick={() => handleEdit(todo._id)} style={{display:"flex",alignItems: 'center'}}>
                        <BsCircleFill className='icon' style={{marginRight: '5px', fontSize: '20px'}} />
                        <p>{todo.task}</p>
                      </div>
                      <div>
                        <span style={{cursor: 'pointer',margin: '0px 5px 0px 4px'}}><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} style={{cursor: 'pointer'}}/></span>
                      </div>
                    </div>
                  ))
                  
            }

        </div>
    )
}

export default Home