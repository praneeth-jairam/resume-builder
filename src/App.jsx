import { useState } from "react"
import NavBar from "./Components/NavBar"
import Homepage from "./Components/HomePage"
import ResumeForm from "./Components/ResumeForm"
import PreviewPage from "./Components/PreviewPage"
import { Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  const [resumeData, setResumeData] = useState({
    personalDetails: {
      name: "",
      email: "",
      location: "",
      github: "",
      linkedin: "",
      website: "",
      mobile: ""
    },
    summary: "",
    experience: [
      { company: "", position: "", duration: "", description: "" }
    ],
    education: [
      { school: "", duration: "", grade: "" }
    ],
    projects: [
      { name: "", technologies: "", description: "" }
    ],
    skills: ""
  })

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route 
          path="/edit" 
          element={
            <ResumeForm 
              resumeData={resumeData} 
              setResumeData={setResumeData} 
            />
          } 
        />
        <Route 
          path="/preview" 
          element={<PreviewPage resumeData={resumeData} />} 
        />
      </Routes>
    </div>
  )
}

export default App