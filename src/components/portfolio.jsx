import { useEffect } from 'react';
import '../portfolio.css';
import Header from './header.jsx';
import SocialDock from './SocialDock.jsx';
import HeroPanel from './HeroPanel.jsx';
import OriginSection from './OriginSection.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import ContactSection from './ContactSection.jsx';

function Portfolio() {
    useEffect(() => {
        // Animate skill bars
        document.querySelectorAll('.skill-bar-fill').forEach(fill => {
            const width = fill.getAttribute('data-width');
            setTimeout(() => { fill.style.width = width + '%'; }, 600);
        });

        // Scroll reveal
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        document.querySelectorAll('.reveal-animate').forEach(el => revealObserver.observe(el));

        // Social dock
        const dock = document.getElementById('social-dock');
        if (dock) {
            dock.classList.add('portfolio-ready');
            const onScroll = () => {
                dock.classList.toggle('scrolled-in', window.scrollY > 80);
            };
            window.addEventListener('scroll', onScroll);
            onScroll();

            // Smooth nav scroll
            document.querySelectorAll('.nav-links a').forEach(a => {
                a.addEventListener('click', e => {
                    e.preventDefault();
                    const target = document.querySelector(a.getAttribute('href'));
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                });
            });

            return () => {
                window.removeEventListener('scroll', onScroll);
                revealObserver.disconnect();
            };
        }

        return () => revealObserver.disconnect();
    }, []);

    return (
        <>
            <Header />
            <div id="portfolio-screen">
                <SocialDock />
                <HeroPanel />
                <div className="portfolio-sections">
                    <OriginSection />
                    <ProjectsSection />
                    <ContactSection />
                </div>
                <footer className="realm-footer">
                    ✦ &nbsp;Forged by Jerson Jr M Vargas · Aspiring Programmer&nbsp; ✦
                </footer>
            </div>
        </>
    );
}

export default Portfolio;