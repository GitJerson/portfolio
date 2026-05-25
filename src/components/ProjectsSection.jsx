import GithubIcon from './GithubIcon';

const PROJECTS = [
    {
        title: 'TaskFlow API',
        description: 'A task management REST API built with ASP.NET Core Web API (.NET 9). TaskFlow lets teams organize work through projects, tasks, and assignments. Users can create projects, break them into tasks, assign teammates, set deadlines, and track progress through a straightforward REST API.',
        technologies: ['C#', '.NET 9', 'PostgreSQL', 'JWT', 'Versioning', 'Caching', 'Health Checks', 'Logging', 'Api Key Authentication', 'OAuth 2.0'],
        status: 'Ongoing',
        github: 'https://github.com/GitJerson/TaskFlow',
    },
    {
        title: 'PJR Portal',
        description: 'A web application for managing student attendance. Teachers can manage records through a portal, students can view their attendance. Built with ASP.NET Web API backend and React frontend.',
        technologies: ['ASP.NET Web API', 'React', 'Tailwind CSS', 'PostgreSQL', 'Capacitor'],
        status: 'Completed',
        github: 'https://github.com/GitJerson/newPJR',
    },
    {
        title: 'Massage Monitoring System',
        description: 'A full-stack web application for managing massage services using ASP.NET MVC with Service-Repository architecture.',
        technologies: ['ASP.NET MVC', 'Bootstrap', 'MSSQL'],
        status: 'Completed',
        github: 'https://github.com/GitJerson/CapstoneProject',
    },
];

function ProjectsSection() {
    return (
        <section className="projects-section fade-in" id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {PROJECTS.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                            {project.technologies.map(tech => (
                                <span className="tech-tag" key={tech}>{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                                <GithubIcon /> View Code
                            </a>
                            <span className="project-status">{project.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;