import { useState } from 'react'
import './ResumeForm.css'

function ResumeForm({ resumeData, setResumeData }) {
    const handlePersonalDetailsChange = (field, value) => {
        setResumeData(prev => ({
            ...prev,
            personalDetails: {
                ...prev.personalDetails,
                [field]: value
            }
        }))
    }

    const handleSummaryChange = (value) => {
        setResumeData(prev => ({
            ...prev,
            summary: value
        }))
    }

    const handleSkillsChange = (value) => {
        setResumeData(prev => ({
            ...prev,
            skills: value
        }))
    }

    const addExperience = () => {
        setResumeData(prev => ({
            ...prev,
            experience: [...prev.experience, { company: "", position: "", duration: "", description: "" }]
        }))
    }

    const updateExperience = (index, field, value) => {
        setResumeData(prev => ({
            ...prev,
            experience: prev.experience.map((exp, i) => 
                i === index ? { ...exp, [field]: value } : exp
            )
        }))
    }

    const removeExperience = (index) => {
        setResumeData(prev => ({
            ...prev,
            experience: prev.experience.filter((_, i) => i !== index)
        }))
    }

    const addEducation = () => {
        setResumeData(prev => ({
            ...prev,
            education: [...prev.education, { school: "", duration: "", grade: "" }]
        }))
    }

    const updateEducation = (index, field, value) => {
        setResumeData(prev => ({
            ...prev,
            education: prev.education.map((edu, i) => 
                i === index ? { ...edu, [field]: value } : edu
            )
        }))
    }

    const removeEducation = (index) => {
        setResumeData(prev => ({
            ...prev,
            education: prev.education.filter((_, i) => i !== index)
        }))
    }

    const addProject = () => {
        setResumeData(prev => ({
            ...prev,
            projects: [...prev.projects, { name: "", technologies: "", description: "" }]
        }))
    }

    const updateProject = (index, field, value) => {
        setResumeData(prev => ({
            ...prev,
            projects: prev.projects.map((proj, i) => 
                i === index ? { ...proj, [field]: value } : proj
            )
        }))
    }

    const removeProject = (index) => {
        setResumeData(prev => ({
            ...prev,
            projects: prev.projects.filter((_, i) => i !== index)
        }))
    }

    return(
        <div className="resume-form">
            <div className="form-header">
                <h1>✏️ Edit Your Resume</h1>
                <p>Fill out the form below to create your professional resume</p>
            </div>

            <div className="form-container">
                {/* Personal Details Section */}
                <div className="form-section">
                    <h2 className="section-title">
                        <span className="section-icon">👤</span>
                        Personal Details
                    </h2>
                    <div className="input-grid">
                        <div className="input-group">
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                placeholder="John Doe"
                                value={resumeData.personalDetails.name}
                                onChange={(e) => handlePersonalDetailsChange('name', e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                placeholder="john@example.com"
                                value={resumeData.personalDetails.email}
                                onChange={(e) => handlePersonalDetailsChange('email', e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label>Phone</label>
                            <input 
                                type="tel" 
                                placeholder="+1 (555) 123-4567"
                                value={resumeData.personalDetails.mobile}
                                onChange={(e) => handlePersonalDetailsChange('mobile', e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label>Location</label>
                            <input 
                                type="text" 
                                placeholder="New York, NY"
                                value={resumeData.personalDetails.location}
                                onChange={(e) => handlePersonalDetailsChange('location', e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label>LinkedIn</label>
                            <input 
                                type="url" 
                                placeholder="linkedin.com/in/johndoe"
                                value={resumeData.personalDetails.linkedin}
                                onChange={(e) => handlePersonalDetailsChange('linkedin', e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label>Website</label>
                            <input 
                                type="url" 
                                placeholder="www.johndoe.com"
                                value={resumeData.personalDetails.website}
                                onChange={(e) => handlePersonalDetailsChange('website', e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Professional Summary Section */}
                <div className="form-section">
                    <h2 className="section-title">
                        <span className="section-icon">📝</span>
                        Professional Summary
                    </h2>
                    <div className="input-group">
                        <label>Summary</label>
                        <textarea 
                            placeholder="Write a brief professional summary highlighting your key qualifications and career objectives..."
                            rows="4"
                            value={resumeData.summary}
                            onChange={(e) => handleSummaryChange(e.target.value)}
                        />
                    </div>
                </div>

                {/* Experience Section */}
                <div className="form-section">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="section-icon">💼</span>
                            Work Experience
                        </h2>
                        <button type="button" className="add-button" onClick={addExperience}>
                            ➕ Add Experience
                        </button>
                    </div>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="dynamic-section">
                            <div className="section-controls">
                                <h3>Experience {index + 1}</h3>
                                {resumeData.experience.length > 1 && (
                                    <button 
                                        type="button" 
                                        className="remove-button"
                                        onClick={() => removeExperience(index)}
                                    >
                                        🗑️
                                    </button>
                                )}
                            </div>
                            <div className="input-grid">
                                <div className="input-group">
                                    <label>Company</label>
                                    <input 
                                        type="text" 
                                        placeholder="Company Name"
                                        value={exp.company}
                                        onChange={(e) => updateExperience(index, 'company', e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Position</label>
                                    <input 
                                        type="text" 
                                        placeholder="Job Title"
                                        value={exp.position}
                                        onChange={(e) => updateExperience(index, 'position', e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Duration</label>
                                    <input 
                                        type="text" 
                                        placeholder="Jan 2020 - Present"
                                        value={exp.duration}
                                        onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                                    />
                                </div>
                                <div className="input-group full-width">
                                    <label>Description</label>
                                    <textarea 
                                        placeholder="Describe your responsibilities and achievements..."
                                        rows="3"
                                        value={exp.description}
                                        onChange={(e) => updateExperience(index, 'description', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education Section */}
                <div className="form-section">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="section-icon">🎓</span>
                            Education
                        </h2>
                        <button type="button" className="add-button" onClick={addEducation}>
                            ➕ Add Education
                        </button>
                    </div>
                    {resumeData.education.map((edu, index) => (
                        <div key={index} className="dynamic-section">
                            <div className="section-controls">
                                <h3>Education {index + 1}</h3>
                                {resumeData.education.length > 1 && (
                                    <button 
                                        type="button" 
                                        className="remove-button"
                                        onClick={() => removeEducation(index)}
                                    >
                                        🗑️
                                    </button>
                                )}
                            </div>
                            <div className="input-grid">
                                <div className="input-group">
                                    <label>School/University</label>
                                    <input 
                                        type="text" 
                                        placeholder="University Name"
                                        value={edu.school}
                                        onChange={(e) => updateEducation(index, 'school', e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Duration</label>
                                    <input 
                                        type="text" 
                                        placeholder="2018 - 2022"
                                        value={edu.duration}
                                        onChange={(e) => updateEducation(index, 'duration', e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Degree/Grade</label>
                                    <input 
                                        type="text" 
                                        placeholder="Bachelor's in Computer Science"
                                        value={edu.grade}
                                        onChange={(e) => updateEducation(index, 'grade', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Projects Section */}
                <div className="form-section">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="section-icon">🚀</span>
                            Projects
                        </h2>
                        <button type="button" className="add-button" onClick={addProject}>
                            ➕ Add Project
                        </button>
                    </div>
                    {resumeData.projects.map((project, index) => (
                        <div key={index} className="dynamic-section">
                            <div className="section-controls">
                                <h3>Project {index + 1}</h3>
                                {resumeData.projects.length > 1 && (
                                    <button 
                                        type="button" 
                                        className="remove-button"
                                        onClick={() => removeProject(index)}
                                    >
                                        🗑️
                                    </button>
                                )}
                            </div>
                            <div className="input-grid">
                                <div className="input-group">
                                    <label>Project Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Project Title"
                                        value={project.name}
                                        onChange={(e) => updateProject(index, 'name', e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Technologies</label>
                                    <input 
                                        type="text" 
                                        placeholder="React, Node.js, MongoDB"
                                        value={project.technologies}
                                        onChange={(e) => updateProject(index, 'technologies', e.target.value)}
                                    />
                                </div>
                                <div className="input-group full-width">
                                    <label>Description</label>
                                    <textarea 
                                        placeholder="Describe your project and its key features..."
                                        rows="3"
                                        value={project.description}
                                        onChange={(e) => updateProject(index, 'description', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skills Section */}
                <div className="form-section">
                    <h2 className="section-title">
                        <span className="section-icon">⚡</span>
                        Skills
                    </h2>
                    <div className="input-group">
                        <label>Skills (comma-separated)</label>
                        <textarea 
                            placeholder="JavaScript, React, Node.js, Python, SQL, Git, AWS..."
                            rows="3"
                            value={resumeData.skills}
                            onChange={(e) => handleSkillsChange(e.target.value)}
                        />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="form-actions">
                    <button type="button" className="preview-button">
                        👁️ Preview Resume
                    </button>
                    <button type="button" className="save-button">
                        💾 Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResumeForm  