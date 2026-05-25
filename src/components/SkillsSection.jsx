function SkillsSection() {
    const skills = [
        { name: 'C#', level: 80 },
        { name: '.NET', level: 70 },
        { name: 'MSSQL', level: 60 },
        { name: 'PostgreSQL', level: 50 },
        { name: 'GitHub', level: 50 },
        { name: 'Tailwind CSS', level: 50 },
        { name: 'Postman', level: 50 },
        { name: 'React', level: 40 }
    ];

    return (
        <section className="skills-section">
            <h2>Top Skills</h2>
            <div className="skills-grid">
                {skills.map(skill => (
                    <div className="skill-item" key={skill.name}>
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                        </div>
                        <div className="skill-percentage">{skill.level}%</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SkillsSection;