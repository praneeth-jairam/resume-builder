import { Link } from 'react-router-dom'
import './PreviewPage.css'

function PreviewPage({ resumeData }) {
    const templates = [
        {
            name: "classic",
            description: "A clean and professional template perfect for traditional industries",
            image: "https://via.placeholder.com/300x400/667eea/white?text=Classic+Template"
        },
        {
            name: "modern",
            description: "A contemporary design that stands out while remaining professional",
            image: "https://via.placeholder.com/300x400/10b981/white?text=Modern+Template"
        },
        {
            name: "creative",
            description: "An artistic layout ideal for creative professionals and designers",
            image: "https://via.placeholder.com/300x400/f59e0b/white?text=Creative+Template"
        }
    ]

    return(
        <div className="preview-page">
            <div className="preview-header">
                <h1>🎨 Choose Your Template</h1>
                <p>Select from our collection of professionally designed resume templates</p>
            </div>

            <div className="templates-container">
                {templates.map((template, index) => (
                    <div key={index} className="template-card">
                        <div className="template-preview">
                            <img src={template.image} alt={template.name} />
                        </div>
                        <div className="template-info">
                            <h3 className="template-name">{template.name}</h3>
                            <p className="template-description">{template.description}</p>
                            <div className="template-actions">
                                <Link 
                                    to="/edit" 
                                    className="use-template-btn"
                                >
                                    ✨ Use Template
                                </Link>
                                <button className="preview-template-btn">
                                    👁️ Preview
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {resumeData && resumeData.personalDetails.name && (
                <div className="current-resume-section">
                    <div className="current-resume-card">
                        <h2>📄 Your Current Resume</h2>
                        <div className="resume-summary">
                            <p><strong>Name:</strong> {resumeData.personalDetails.name}</p>
                            <p><strong>Email:</strong> {resumeData.personalDetails.email}</p>
                            <p><strong>Experience:</strong> {resumeData.experience.length} entries</p>
                            <p><strong>Education:</strong> {resumeData.education.length} entries</p>
                        </div>
                        <div className="resume-actions">
                            <Link to="/edit" className="edit-resume-btn">
                                ✏️ Edit Resume
                            </Link>
                            <button className="download-btn">
                                📥 Download PDF
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PreviewPage