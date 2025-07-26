import { useState } from "react"
import NavBar from "./assets/components/NavBar"
import Homepage from "./assets/components/HomePage"
import ResumeForm from "./assets/components/ResumeForm"
import { Routes,Route } from "react-router-dom"

function App() {
  console.log("App component is rendering!"); // Debug log

  let [resumedata,setResumeData]=useState({
    personelDetails:{
      name:"",
      email:"",
      location:"",
      github:"",
      linkedin:"",
      website:"",
      mobile:""
    },
    summary:"",
    experience:[
      {company:"",position:"",duration:"",description:""}
    ],
    education:[
      {school:"",duration:"",grade:""}
    ],
    projects:[
      {name:"",technolgies:"",description:""}
    ],
    skills:""

  })
  

  return (
    <div>
       <NavBar/>
       <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/home" element={<Homepage/>}></Route>
        <Route path="/edit" element={<ResumeForm/>}></Route>
       </Routes>

   </div>

  )
}

export default App;