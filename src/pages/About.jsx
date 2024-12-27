import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="content">
      <section className="personal-info-section">
        <h2>Personal Information</h2>
        
        <div className="intro-text">
          <p>
            Hello, I'm <span className="highlight">Erenay</span>, a Computer Engineering student at Manisa Celal Bayar University.
            In my final semester, I will undertake a professional internship, and I am eager to step into the professional world
            to gain hands-on experience as soon as possible.
          </p>

          <div className="experience-block">
            <p>
              Throughout my studies, I have gained experience in technologies such as:
            </p>
            <div className="tech-stack">
              <span className="tech-item">Java</span>
              <span className="tech-item">Python</span>
              <span className="tech-item">Spring Boot</span>
              <span className="tech-item">.NET</span>
            </div>
          </div>

          <p>
            I have worked on projects like a machine learning-based traffic control system, which helped me enhance my
            problem-solving and analytical thinking skills. I am an enthusiastic learner with knowledge of web and network
            security, an area I have pursued during summers due to my interest and desire to build strong security awareness.
          </p>

          <p>
            I believe this opportunity will be a significant step in combining my technical knowledge with practical experience.
          </p>

          <div className="closing-text">
            <p>
              I am excited about the possibility of working with you and look forward to proving how great of a decision
              it will be to collaborate together.
            </p>
            <p>
              Thank you for your attention, and I hope to have the opportunity to discuss this further with you.
            </p>
          </div>

          <div className="contact-info">
            <a href="mailto:erenayarsal@hotmail.com" className="email-link">
              <i className="bi bi-envelope"></i>
              erenayarsal@hotmail.com
            </a>
          </div>
        </div>
      </section>

      <section className="education-section">
        <h2>Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Manisa Celal Bayar University</h3>
            <span className="timeline-date">2020 - Present</span>
            <p className="timeline-desc">Computer Engineering</p>
          </div>
          <div className="timeline-item">
            <h3>Alsancak Final Temel Lisesi</h3>
            <span className="timeline-date">2019</span>
            <p className="timeline-desc">High School Diploma</p>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>LISI AEROSPACE - IT Intern</h3>
            <span className="timeline-date">July 2024 - August 2024</span>
            <ul className="experience-list">
              <li>Hardware and Network Support</li>
              <li>Router configuration and setup</li>
              <li>Active Directory management</li>
              <li>VLAN configuration</li>
              <li>User Support</li>
            </ul>
          </div>
          <div className="timeline-item">
            <h3>LISI AEROSPACE - IT Intern</h3>
            <span className="timeline-date">July 2023 - August 2023</span>
            <ul className="experience-list">
              <li>Developed IT department application using Python</li>
              <li>Provided local IT support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">Python <span className="skill-level">Intermediate</span></div>
          <div className="skill-item">Django <span className="skill-level">Intermediate</span></div>
          <div className="skill-item">Java <span className="skill-level">Intermediate</span></div>
          <div className="skill-item">.Net <span className="skill-level">Beginner</span></div>
          <div className="skill-item">React <span className="skill-level">Beginner</span></div>
          <div className="skill-item">Jira <span className="skill-level">Beginner</span></div>
          <div className="skill-item">Linux <span className="skill-level">Beginner</span></div>
          <div className="skill-item">Aws <span className="skill-level">Beginner</span></div>
          <div className="skill-item">Spring Boot</div>
          <div className="skill-item">PostgreSQL</div>
          <div className="skill-item">MySQL</div>

        </div>
      </section>

      <section className="network-section">
        <h2>Network Skills</h2>
        <div className="network-grid">
          <div className="network-item">
            <i className="bi bi-hdd-network"></i>
            <span>Networking Protocols: TCP/IP, UDP, HTTP/HTTPS, DNS, DHCP, FTP</span>
          </div>
          <div className="network-item">
            <i className="bi bi-router"></i>
            <span>Routing and Switching</span>
          </div>
          <div className="network-item">
            <i className="bi bi-diagram-3"></i>
            <span>Subnetting and IP Management</span>
          </div>
          <div className="network-item">
            <i className="bi bi-pc-display"></i>
            <span>Linux tools: WireShark, Nmap, Metasploit</span>
          </div>
          <div className="network-item">
            <i className="bi bi-pc-display"></i>
            <span>Experienced in Web Security:
              SQLi,IDOR,XSS,CORS,CSRF,SSRF,OS Command Injection, Authentication</span>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default About;