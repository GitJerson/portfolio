import Profile from '../assets/portfolio-profile.png';
import Resume from '../assets/Jerson_Vargas_Resume.pdf';

function HeroPanel() {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-image">
                    <img src={Profile} alt="Jerson Vargas" />
                </div>
                <div className="hero-content">
                    <h1 className="hero-name">Jerson Jr M Vargas</h1>
                    <p className="hero-title">Backend Developer</p>
                    <p className="hero-description">
                        Aspiring backend developer based in Talisay City, Cebu. Passionate about building efficient and scalable applications.
                    </p>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-label">Experience</span>
                            <span className="stat-value">Entry Level</span>
                        </div>
                        <div className="stat">
                            <span className="stat-label">Focus</span>
                            <span className="stat-value">Backend</span>
                        </div>
                        <div className="stat">
                            <span className="stat-label">Projects</span>
                            <span className="stat-value">3</span>
                        </div>
                    </div>
                    <a href={Resume} download="Jerson_Vargas_Resume.pdf" className="download-btn">
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroPanel;