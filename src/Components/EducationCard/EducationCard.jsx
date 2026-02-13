import './EducationCard.css';

export const EducationCard = ({ years, title, subtitle }) => {
  return (
    <div className="education-card">
      <p className='years'>{years}</p>
      <p className='education-title'>{title}</p>
      <p className='education-subtitle'>{subtitle}</p>
    </div>
  );
};

export default EducationCard;