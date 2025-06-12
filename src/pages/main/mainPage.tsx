import { useState, useEffect } from 'react';
import Home from '../home/home';
import About from '../about/about';
import Projects from '../projects/projects';

const MainPage = () => {
    const [isVisitedSection, setIsVisitedSection] = useState(false);

    useEffect(() => {
        // Ensure nav links container is available after mount
        const docEl = document.documentElement;
        const linksContainer = docEl.getElementsByClassName("nav-links-container")[0] as HTMLElement | undefined;
        if (!linksContainer) return;

        const handleMouseEnter = (sectionId: string) => {
            const activeElements = Array.from(document.getElementsByClassName("active")) as HTMLElement[];
            activeElements.forEach(el => el.classList.remove("active"));

            const childLinks = Array.from(linksContainer.getElementsByTagName("a")) as HTMLElement[];
            const targetText = sectionId.replace('-section', '').toLowerCase();

            childLinks.forEach(link => {
                const linkText = link.textContent?.toLowerCase().trim();
                if (linkText === targetText) {
                    link.classList.add("active");
                }
            });

            setIsVisitedSection(true);
        };

        // Store in window so we can use inside event handlers
        (window as any).handleMouseEnter = handleMouseEnter;
    }, []);

    return (
        <div className='main-page-container'>
            <div onMouseEnter={() => (window as any).handleMouseEnter('home-section')}>
                <section id='home-section'>
                    <Home />
                </section>
            </div>

            <div onMouseEnter={() => (window as any).handleMouseEnter('about-section')}>
                <section id='about-section'>
                    <About />
                </section>
            </div>

            <div onMouseEnter={() => (window as any).handleMouseEnter('projects-section')}>
                <section id='projects-section'>
                    <Projects />
                </section>
            </div>
        </div>
    );
};

export default MainPage;
