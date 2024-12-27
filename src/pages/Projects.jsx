import ProjectCard from '../components/ProjectCard';
import '../styles/Pages.css';

function Projects() {
  const projects = [
    {
      title: "Connecting Farmers and Consumers: E-Commerce Solution",
      description: "A web-based platform using Java Spring Boot, React, and PostgreSQL. Connects farmers directly to end-users for fresh produce delivery. Features include real-time inventory management and payment system integration.",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Postman"],
      link: "https://github.com/derenay"
    },
    {
      title: "Dynamic Traffic Light Control",
      description: "Traffic light control system using Deep Q-Learning and YOLO for real-time traffic optimization. Processes camera data to dynamically adjust traffic flow.",
      technologies: ["Python", "YOLO", "Deep Q-Learning"],
      link: "https://github.com/derenay/Dynamic-Traffic-Light-Control-with-Deep-Q-Learning-Algorithm"
    },
    {
      title: "Notion-like App",
      description: "School project application for private note-taking with secure authentication. Built with Django and MySQL.",
      technologies: ["Python", "Django", "MySQL"],
      link: "https://github.com/derenay/Drained"
    },
    {
      title: "Computer Records Management Application",
      description: "Professional application for managing computer records using Excel file. Features efficient searching algorithm for connected devices.",
      technologies: ["Python"],
      link: "https://github.com/derenay/Guest-Zone"
    }
  ];

  return (
    <div className="page-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;