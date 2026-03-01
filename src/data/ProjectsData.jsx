import App_Pages from '../Assets/project-images/App_Pages.jpg';
import Portfolio_Image from '../Assets/project-images/Portfolio_Image.png';
import FortuneTeller_Image from '../Assets/project-images/FortuneTeller.png';

const ProjectsData = [ 
    { 
      slug: 'plantwhisperer',
      image: App_Pages,
      title: 'PlantWhisperer',
      description: 'Projektet undersøger, hvordan en LLM-baseret chatbot kan anvendes i køkkenhavearbejde. Gennem en app interagerer brugere med deres planter via chatbots med individuelle personligheder og kontekstbaseret plejevejledning.',
      techStack: ['Dart', 'Flutter', 'OpenAI API', 'Figma', 'Sqflite'],
      links: [
        { label: 'Publication'}
      ]
    },
    { 
      slug: 'portfolio-website',
      image: Portfolio_Image,
      title: 'Min portfolio hjemmeside', 
      description: 'React-baseret portfolio hjemmeside med komponent-baseret arkitektur.',
      techStack: '',
      link:'https://github.com/Josefine2401/My-Website',
    },

    { 
      slug: 'fortune-teller-project',
      image: FortuneTeller_Image,
      title: 'Fortune Teller: Minigames', 
      description: 'Dette eksamensprojekt er udviklet i Java og JavaFX og består af tre forskellige minispil, som brugeren kan afprøve. Projektets primære fokus har været funktionalitet frem for grafisk udtryk.',
      techStack: ''
    },
      
    { 
      slug: 'phd-portfolio',
      title: 'Portfolio for en PHD studerende', 
      description: 'Projektet omfatter design og udvikling af en portfoliohjemmeside for en Ph.d.-studerende inden for datalogi. Der er lagt stor vægt på tæt dialog og løbende samarbejde for at sikre, at hjemmesiden afspejler den studerendes faglige profil og behov. Projektet er et igangværende arbejde, som er under udvikling.',
      techStack: ''
    },
  ];

export default ProjectsData;