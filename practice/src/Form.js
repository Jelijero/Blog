import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Form = ({name,setName,title,setitle,blog,setblog,condition,setCondition}) => {
    
const Navigate=useNavigate()


  const handleSubmit=((e)=>{
    e.preventDefault()
    setCondition(!condition)
    try{
      axios.post('http://localhost:3001/app/name',{name,title,blog})
      .then((res)=>{
        if(res.data==='post'){
          alert('posted')
        }
      })
      setName('')
      setitle('')
      setblog('')
      Navigate("/main")
    }
    catch{
     console.log('error')
    }
  })

  return (

        <div className='form'>
          <form onSubmit={((e)=>handleSubmit(e))}>
              <label>
                Name
              </label>
                <input type='text' value={name} onChange={((e)=>setName(e.target.value))}/>
                <label>Title</label>
               
                <input type='text' value={title} onChange={((e)=>setitle(e.target.value))}/>
                <label>Blog</label>
                <textarea type='text' value={blog} onChange={((e)=>setblog(e.target.value))}/>
                <button type='submit'>submit</button>
                <button onClick={(()=>Navigate("/main"))}>Cancel</button> 
           </form>
           </div> 
  )}


export default Form