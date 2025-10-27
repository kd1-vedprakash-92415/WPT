import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { taskSave } from '../services/tasks'

function TaskForm() {
    const [formData,setFormData]=useState({
        title:'',
        desc:''
    })
    const navigate=useNavigate()

    const handleChange=(e)=>setFormData({...formData,[e.target.id]:e.target.value})

    const handleSubmitClick=()=>{
        
            const taskInfo=formData
            taskSave(taskInfo)
            toast.success("Task Added")
            navigate("/user/tasks")
        
           
        
    }

  return (
    <div>
      <h3>Task Form</h3>
      <div className='form-group mb-3'>
        <label htmlFor="title">Title:</label>
        <input type="text" id='title' className='form-control' onChange={handleChange} />
      </div>
      <div className='form-group mb-3'>
        <label htmlFor="desc">Description:</label>
        <input type="text" id='desc' className='form-control' onChange={handleChange} />         
      </div>
      <div className='form-group mb-3'>
        <button className='btn btn-primary mx-3' onClick={handleSubmitClick}>Save</button>
      </div>
    </div>
  )
}

export default TaskForm
