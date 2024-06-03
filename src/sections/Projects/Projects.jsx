import styles from './ProjectsStyles.module.css';
import gemini from '../../assets/gemini.png';
import social from '../../assets/social.png';
import keepNotes from '../../assets/keepNotes.jpeg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={gemini}
          link="https://github.com/vsakshi29/GeminiClone"
          h3="gemini"
          p="Gemini Clone"
        />
        <ProjectCard
          src={social}
          link="https://github.com/vsakshi29/SocialSync"
          h3="Fresh Burger"
          p="Social Sync"
        />
        <ProjectCard
          src={keepNotes}
          link=" https://github.com/vsakshi29/To-Do-List"
          h3="Keep Notes"
          p="To DO List App"
        />
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
