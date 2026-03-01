import './Portfolio.css'
import portfolioImage from '../../Assets/hero-photo/image.png';
import { EducationCard } from '../../Components/EducationCard/EducationCard';
import { ExperienceCard } from '../../Components/ExperienceCard/ExperienceCard';
import { ProjectCard } from '../../Components/ProjectCard/ProjectCard';
import BtnCard from '../../Components/BtnCard/BtnCard';
import ProjectsData from '../../data/ProjectsData';
import { useEffect, useState } from 'react';
import ProjectPage from '../../Components/ProjectPage/ProjectPage';

export const Portfolio = () => { 
    const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openProject = (p) => setSelectedProject(p);
  const closeProject = () => setSelectedProject(null);

  const educationData = [
    {
      years: '2023-2026',
      title: 'Bachelor of Science i Interaktionsdesign',
      subtitle: 'Aalborg Universitet'
    },

    {
      years: '2019-2022',
      title: 'Global Business HHX',
      subtitle: 'College360 - Silkeborg'
    },
    
  ]; 

  const experienceData = [
    {
      experienceYears: '2022-2023',
      position: 'Studentermedhjælper',
      tasks: [
        'Oprettelse af varer i ERP',
        'Vedligeholdelse og indhentning af stamdata',
        'Microsoft Access og Excel',
        'Oplæring af ny studentermedhjælper'
      ]
    }
  ];

  const skillsData = [
    { text: 'UI/UX Design' },
    { text: 'Frontend-udvikling' },
    { text: 'User Research' },
    { text: 'PBL' },
    { text: 'Agile Metoder' },
    { text: 'Konceptudvikling' },
    { text: 'Usability Testing' },
    { text: 'Prototyping' },
  ];

  const teckStackData = [
    {text: 'JavaScript'},
    {text: 'TypeScript'},
    {text: 'HTML'},
    {text: 'CSS'},
    {text: 'React'},
    {text: 'Angular'},
    {text: 'SQL'},
    {text: 'MySQL'},
    {text: 'Flutter'},
    {text: 'Dart'},
    {text: 'Java'},
    {text: 'Node.js'},
    {text: 'Python'},
    {text: 'Figma'},
    {text: 'Canva'},

  ]

  return (
    <div className='portfolio'>
      <div className='portfolio-content'>
        <div className='hero-banner'>
        <h1>Josefine P. Wyrtz</h1>
        <p>Jeg er 21 år gammel og jeg brænder for grafisk UI-design med fokus på brugernes behov og for frontend-udvikling, hvor jeg skaber løsninger, der forener æstetik og funktionalitet.</p>
        <div className='contact-buttons'>
          <button className='email-btn'>Email</button>
          <button className='linkedin-btn'>LinkedIn</button>
          <button className='github-btn'>GitHub</button>
          </div>
        </div>
          <div className='portfolio-image'>
            <img src={portfolioImage} alt="Portfolio billede" />
        </div>
      </div>
        <div className="info-section">
          <div className="education-header">
            <h2>UDDANNELSE</h2>
          </div>
          <div className="skills-header">
            <h2>KOMPETENCER</h2>
          </div>

          {educationData.map((item, index) => (
            <div className="education" key={index}>
              <EducationCard 
                years={item.years}
                title={item.title}
                subtitle={item.subtitle}
              />
            </div>
          ))}

          <div className="skills">
            {skillsData.map((item, index) => (
              <BtnCard 
                key={index}
                btn={item.text} 
              />
            ))}
          </div>

          <div className="experience-header">
            <h2>ERFARING</h2>
          </div>
          
          <div className="tech-stack-header">
            <h2>TECH STACK</h2>
          </div>

          {experienceData.map((item, index) => (
            <div className="experience" key={index}>
              <ExperienceCard
                years={item.experienceYears}
                position={item.position}
                tasks={item.tasks}
              />
            </div>
          ))}

          <div className="tech-stack">
            {teckStackData.map((item, index) => (
              <BtnCard 
                key={index}
                btn={item.text} 
              />
            ))}
          </div>

          <div className="projects-header">
            <h2>PROJEKTER</h2>
          </div>

          <div className="projects">
            {ProjectsData.map((p) => (
              <div
                key={p.slug}
                className="project-clickable"
                onClick={() => openProject(p)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' ? openProject(p) : null)}
              >
                <ProjectCard 
                  cardImage={p.image}
                  cardTitle={p.title}
                  cardBody={p.description}
                  cardLink={p.link}
                />
              </div>
            ))}
          </div>

          {selectedProject && (
            <div className="modal-overlay" onClick={closeProject}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeProject} aria-label="Luk">✕</button>
                <ProjectPage project={selectedProject} />
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Portfolio