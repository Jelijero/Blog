import React, {useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import Form from './Form'
import Main from './Main'

import Write from './Write'
const App = () => {
  const [title,setitle]=useState('')
  const [blog,setblog]=useState('')
  const [search,setsearch]=useState('')
  const [searches,setSearches]=useState('')
  const[condition,setCondition]=useState(true)
  const [variable,setVariable]=useState([])
  const[name,setName]=useState('')
  const[things,setthings]=useState([])

  

  return (
    <div>
      <Routes>
       <Route path='/' element={<Write/>}></Route>
        <Route path='/main' element={<Main title={title} setitle={setitle} search={search} searches={searches} setSearches={setSearches} setsearch={setsearch} blog={blog} setblog={setblog} name={name} setName={setName} variable={variable.filter(idea=>(((idea.name)).toLowerCase()).includes(search.toLowerCase()))} setVariable={setVariable} condition={condition} setCondition={setCondition} things={things} setthings={setthings}/>}>
        
        <Route path='main/form' element={<Form title={title} setitle={setitle} blog={blog} setblog={setblog} name={name} setName={setName} variable={variable} setVariable={setVariable} condition={condition} setCondition={setCondition} />}></Route>
        
        </Route> 
       
        </Routes>
    </div>
  )
}

export default App