import { Link } from 'react-router-dom'
import './HomePage.css'

function Homepage() {
    return(
        <div className="homepage">
            <div className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Craft Your Perfect
                            <span className="highlight"> Professional Resume</span>
                        </h1>
                        <p className="hero-subtitle">
                            Build, customize, and download your resume using our beautiful templates. 
                            Stand out from the crowd with a professionally designed resume in minutes.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/edit" className="btn btn-primary">
                                <span className="btn-icon">✨</span>
                                Get Started
                            </Link>
                            <Link to="/preview" className="btn btn-secondary">
                                <span className="btn-icon">👁️</span>
                                View Templates
                            </Link>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="resume-preview">
                            <div className="resume-header"></div>
                            <div className="resume-lines">
                                <div className="line long"></div>
                                <div className="line medium"></div>
                                <div className="line short"></div>
                                <div className="line medium"></div>
                                <div className="line long"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="features-section">
                <h2 className="features-title">Why Choose ResumeGen?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🎨</div>
                        <h3>Beautiful Templates</h3>
                        <p>Choose from professionally designed templates that make you stand out</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Quick & Easy</h3>
                        <p>Create your resume in minutes with our intuitive form interface</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📱</div>
                        <h3>Mobile Friendly</h3>
                        <p>Works perfectly on all devices - desktop, tablet, and mobile</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💼</div>
                        <h3>ATS Friendly</h3>
                        <p>Optimized for Applicant Tracking Systems used by employers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage