import './Portfolio.css'
import portfolioImage from '../../Assets/hero-photo/image.png';
import { EducationCard } from '../../Components/EducationCard/EducationCard';
import { ExperienceCard } from '../../Components/ExperienceCard/ExperienceCard';
import { ProjectCard } from '../../Components/ProjectCard/ProjectCard';
import BtnCard from '../../Components/BtnCard/BtnCard';
import App_Pages from '../../Assets/project-images/App_Pages.jpg';  
import Portfolio_Image from '../../Assets/project-images/Portfolio_Image.png';
import FortuneTeller_Image from '../../Assets/project-images/FortuneTeller.png';



export const Portfolio = () => { 
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

  const project = [ 
    { 
      image: App_Pages,
      title: 'PlantWhisperer',
      description: 'Projektet undersøger, hvordan en LLM-baseret chatbot kan anvendes i køkkenhavearbejde. Gennem en app interagerer brugere med deres planter via chatbots med individuelle personligheder og kontekstbaseret plejevejledning.',
      link: ''
    },
    { 
      image: Portfolio_Image,
      title: 'Min portfolio hjemmeside', 
      description: 'React-baseret portfolio hjemmeside med komponent-baseret arkitektur.',
      link: 'https://projekt2.example.com'
    },

    { 
      image: FortuneTeller_Image,
      title: 'Fortune Teller: Minigames', 
      description: 'Dette eksamensprojekt er udviklet i Java og JavaFX og består af tre forskellige minispil, som brugeren kan afprøve. Projektets primære fokus har været funktionalitet frem for grafisk udtryk.' },
    
    { 
      title: 'Portfolio for en PHD studerende', 
      description: 'Projektet omfatter design og udvikling af en portfoliohjemmeside for en Ph.d.-studerende inden for datalogi. Der er lagt stor vægt på tæt dialog og løbende samarbejde for at sikre, at hjemmesiden afspejler den studerendes faglige profil og behov. Projektet er et igangværende arbejde, som er under udvikling.',
      link: 'https://phd-portfolio.example.com'
    },
  ];

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
            {project.map((project, index) => (
              <ProjectCard 
                key={index}
                cardImage={project.image}
                cardTitle={project.title}
                cardBody={project.description}
                cardLink={project.link}
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Portfolio