import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Link,Outlet,useNavigate } from 'react-router-dom'
import { IoIosCloseCircleOutline } from "react-icons/io";



const Main = ({setVariable,variable,condition,search,setsearch,searches,setSearches,things,setthings}) => {
  const [flag,setflag]=useState(false)
const viewing=(idea)=>{
  setflag(true)
  setthings([{...idea}])



}

    useEffect(()=>{
        try{
        axios.get('http://localhost:3001/side/user')
        .then(res=>{
          if(res.data){
            setVariable(res.data)
          }
        })
        }
        catch{
          console.log('error')
        }
      },[condition])
  return (
    <div className='full'>
 
        <div>
      
        <input type='text' className='search' placeholder='search by name' value={search} onChange={((e)=>setsearch(e.target.value))}/>
             
             <input type='text' className='search1' placeholder='search by title' value={searches} onChange={((e)=>setSearches(e.target.value))}/>
             
         <Link to='main/form' className='details'><span>Create your blog</span></Link>
       
         </div>
         {flag?<div className='new'>
          {things.map((idea)=>
          <div>
             <IoIosCloseCircleOutline onClick={()=>setflag(false)} />
          <h1 className='newt'>{idea.title}</h1>
          <p className='newp'>{idea.blog}</p>
          <h6 className='newn'>{idea.name}</h6>
          </div>
          )}
         </div>:""}
       
         <div className='big'>
         <div className='main'>
         
         {variable.filter(idea=>(((idea.title)).toLowerCase()).includes(searches.toLowerCase())).map((idea=>
           <dl>
         <div className='blog'>
         
         
         <div className='title'>{idea.title}
          <div className='name'>{idea.name}</div></div>
         <div className='content'><button onClick={()=>viewing(idea)}>View Blog</button></div>
        
         

         </div>
         </dl>))}
         <Outlet/>
         </div>
         </div>
       
</div>
   
  )
}

export default Main