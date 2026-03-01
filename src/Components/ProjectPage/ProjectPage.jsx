import './ProjectPage.css';

export const ProjectPage = ({ project }) => { 
    if (!project) {
        return <div>Indlæser projekt...</div>;
    }

    return (   
        <div className="project-page">
            {project.image && <img src={project.image} alt={project.title} />}
            <h1>{project.title}</h1>

            {/* Tjekker om techStack findes og er en array, før jeg forsøger at mappe over den */}
             {project.techStack && Array.isArray(project.techStack) && (
                <div className="tech-stack-container">
                    {project.techStack.map((tech, index) => ( /* Mapper over techStack arrayet og viser hver teknologi som en knap */
                        <button key={index} className="tech-stack-btn">{tech}</button>
                    ))}
                </div>
            )}

            <p>{project.description}</p>
            
            {project.links && Array.isArray(project.links) && (
                <div className="project-links">
                    {project.links.map((link, index) => (
                        <a 
                            key={index}
                            href={link.url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="project-link-btn"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectPage;