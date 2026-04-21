import GithubIcon from './GithubIcon';

const PROJECTS = [
    {
        roman: 'I',
        glyph: '⚙',
        tag: 'First Modern Web Development Project',
        name: 'PJR Portal',
        desc: 'A web application designed to let teachers manage student attendances through the teacher portal and let students view their attendance records through the student portal. Built the backend with ASP.NET Web API and the frontend with React, following a clean client-server architecture.',
        tech: ['ASP .NET WEB API', 'REACT', 'TAILWIND', 'postgreSQL', 'Capacitor'],
        status: 'Completed',
        href: 'https://github.com/GitJerson/newPJR',
    },
    {
        roman: 'II',
        glyph: '🔮',
        tag: 'Capstone Project',
        name: 'Web-based Massage Monitoring and Monitoring System',
        desc: "Developed a full-stack web application using ASP.NET MVC to streamline massage service management. Structured using Service-Repository architecture for separation of concern.",
        tech: ['.ASP NET MVC', 'Bootstrap', 'MSSQL'],
        status: 'Completed',
        href: 'https://github.com/GitJerson/CapstoneProject',
    },
];

const CODE_PREVIEW = `@Component({\n  selector: 'sacred-tome',\n  template: \`<div class="realm">\n    <cultivator *ngFor="let art\n      of mysticalArts"\n      [power]="art.mastery">\n    </cultivator>\n  </div>\`\n})`;

function ProjectsSection() {
    return (
        <section className="port-section reveal-animate" id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="divider"><div className="divider-gem"></div></div>
            <div className="projects-grid">
                {PROJECTS.map(p => (
                    <div className="project-card" key={p.roman}>
                        <div className="project-preview">
                            <div className="project-preview-bg">{CODE_PREVIEW}</div>
                            <div className="project-preview-glyph">{p.glyph}</div>
                            <div className="project-roman">{p.roman}</div>
                        </div>
                        <div className="project-body">
                            <div className="project-tag">✦ {p.tag}</div>
                            <h3 className="project-name">{p.name}</h3>
                            <p className="project-desc">{p.desc}</p>
                            <div className="project-tech">
                                {p.tech.map(t => <span className="tech-badge" key={t}>{t}</span>)}
                            </div>
                        </div>
                        <div className="project-footer">
                            <a className="project-link" href={p.href} target="_blank" rel="noopener">
                                <GithubIcon /> View Source
                            </a>
                            <span className="project-status">{p.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;