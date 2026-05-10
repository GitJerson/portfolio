import { useEffect } from 'react';
import '../portfolio.css';
import HeroPanel from './HeroPanel.jsx';
import SkillsSection from './SkillsSection.jsx';
import OriginSection from './OriginSection.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import ContactSection from './ContactSection.jsx';

function Portfolio() {
    useEffect(() => {
        // Simple scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <HeroPanel />
            <SkillsSection />
            <OriginSection />
            <ProjectsSection />
            <ContactSection />
        </main>
    );
}

export default Portfolio;