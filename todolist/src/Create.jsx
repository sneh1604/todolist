import React, { useState } from 'react';
import axios from 'axios';

function Create({onPost}) {
  const [task, setTask] = useState()
  const handleAdd = () => {
    axios.post('http://localhost:3001/add', {
       task: task 
      })
    .then(result => {
      // console.log(result)
      onPost()
    })
    .catch(err => console.log(err)) 
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '10px' }}>
        <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} style={{ width: '300px', padding: '10px', border: '1px solid #ccc', borderBottom: '2px solid', borderRadius: '4px', boxSizing: 'border-box', fontSize: '16px', fontFamily: 'Arial, sans-serif', outline: 'none' }} />
        <button type='button' onClick={handleAdd} style={{ marginLeft: '10px', padding: '10px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>ADD</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Your TodoList component or content here */}
      </div>
    </div>
  )
}

export default Create
