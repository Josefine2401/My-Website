import './Hero.css'
import heroImage from '../../Assets/hero-photo/image.png';
import linkedInIcon from '../../Assets/Icons/linkedin_icon.png'; 
import githubIcon from '../../Assets/Icons/github.png';

export const Hero = () => {
  return (
    <div className='hero'>
      {/* Venstre kolonne: tekst + ikoner */}
      <div className='hero-content'>
        <h1> Hej, jeg er Josefine</h1>
        <p>Jeg læser interaktionsdesign og har stor interesse for UI-design og frontend-udvikling. Jeg brænder for at skabe digitale løsninger, hvor funktionalitet, æstetik og brugeroplevelse går hånd i hånd.</p>
        <p className='hero-contact'>Find mig her!</p>

        <div className='hero-icons'>
          <a 
          href="https://www.linkedin.com/in/josefine-palsgaard-wyrtz-295356a0" 
          target="_blank" /* Åbner ny side */
          rel="noopener noreferrer"
          >
            <img className="Linkedin-icon" src={linkedInIcon} alt="LinkedIn" />
          </a>
          
          <a
          href="https://github.com/Josefine2401"
          target="_blank" 
          rel="noopener noreferrer"
          >
            <img className="Github-icon" src={githubIcon} alt="GitHub" />
          </a>    
        </div>
      </div>

      {/* Højre kolonne: billede */}
      <div className='hero-image'>
        <img src={heroImage} alt="Hero billede" />
      </div>
    </div>
  )
}

export default Hero