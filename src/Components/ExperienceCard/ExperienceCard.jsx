import './ExperienceCard.css';

export const ExperienceCard = ({ years, position, tasks }) => {
  return (
    <div className="experience-card">
      <p className='experience-years'>{years}</p>
      <p className='experience-position'>{position}</p>
      <ul className='experience-tasks'>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;