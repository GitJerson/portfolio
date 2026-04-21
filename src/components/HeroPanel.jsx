import Profile from '../assets/portfolio-profile.png';
import Resume from '../assets/Jerson_Vargas_Resume.pdf';

function HeroPanel() {
    return (
        <div id="reveal-panel">
            <div className="left-panel">
                <div className="reveal-avatar">
                    <div className="orbit"></div>
                    <div className="orbit2"></div>
                    <div className="reveal-avatar-circle">
                        <img className="reveal-avatar-image" src={Profile} alt="Profile" />
                    </div>
                </div>
                <div className="hero-name-block">
                    <h1 className="hero-full-name">Jerson Jr M Vargas</h1>
                    <div className="hero-title">Programming Rookie</div>
                </div>
                <div className="quick-stats">
                    <div className="qs-item"><div className="qs-label">Path</div><div className="qs-value">Backend</div></div>
                    <div className="qs-item"><div className="qs-label">EXP</div><div className="qs-value">None</div></div>
                    <div className="qs-item"><div className="qs-label">Sect</div><div className="qs-value">C#</div></div>
                    <div className="qs-item"><div className="qs-label">Projects</div><div className="qs-value">2+</div></div>
                </div>
                <a className="cv-btn" href={Resume} download="Jerson_Vargas_Resume.pdf" aria-label="Download CV">
                    <span className="cv-btn-bg"></span>
                    <span className="cv-btn-shimmer"></span>
                    <svg className="cv-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M12 3v13M7 11l5 5 5-5" />
                        <path d="M4 20h16" stroke-linecap="round" />
                    </svg>
                    <span className="cv-btn-text">Download CV / Résumé</span>
                </a>
            </div>

            <div className="right-panel">
                <h2 className="skills-heading">Mastery</h2>
                <div className="skill-list">
                    {[
                        { name: 'C#', pct: 90, level: 'Advance' },
                        { name: '.NET', pct: 80, level: 'Advance' },
                        { name: 'MSSQL', pct: 80, level: 'Advance' },
                        { name: 'Github', pct: 70, level: 'Medium' },
                        { name: 'Tailwind', pct: 60, level: 'Medium' },
                        { name: 'React', pct: 50, level: 'Entry' }
                    ].map(skill => (
                        <div className="skill-item" key={skill.name}>
                            <div className="skill-header">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-pct">{skill.pct}%</span>
                            </div>
                            <div className="skill-bar-track">
                                <div className="skill-bar-fill" data-width={skill.pct}></div>
                            </div>
                            <div className="skill-art">{skill.level}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeroPanel;