import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="container">
      <header className="header-actions">
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Dark Mode">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </header>

      <div className="bento-grid">
        {/* Tile 1: Profile (Large) */}
        <div className="tile tile-profile">
          <div className="profile-header">
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop"
              alt="Profile"
              className="profile-img"
            />
            <div className="profile-info">
              <h1>Pinki Mahato</h1>
              <p className="role">Full Stack Developer</p>
              <div className="status-badge">🟢 Open to Work</div>
              <a href="#" className="download-btn" download>
                📄 Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Tile 2: Stats (Dense) */}
        <div className="tile tile-stats">
          <div className="stat-item">
            <h3>2+</h3>
            <p>Years Exp.</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Projects</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Happy Clients</p>
          </div>
        </div>

        {/* Tile 3: About */}
        <div className="tile tile-about">
          <h2>About Me</h2>
          <p>
            Passionate about scalable web apps and <strong>Machine Learning</strong>.
            I bridge the gap between complex data and intuitive user experiences.
          </p>
        </div>

        {/* Tile 4: Services (New) */}
        <div className="tile tile-services">
          <h2>What I Do</h2>
          <ul className="service-list">
            <li>💻 Web Development</li>
            <li>📊 Data Analysis</li>
            <li>🤖 Machine Learning</li>
            <li>🔌 API Design</li>
          </ul>
        </div>

        {/* Tile 5: Tech Stack (Visual) */}
        <div className="tile tile-skills">
          <h2>Tech Stack</h2>
          <div className="pill-container">
            <span className="pill">⚛️ React</span>
            <span className="pill">🐍 Python</span>
            <span className="pill">🐼 Pandas</span>
            <span className="pill">🟢 Node.js</span>
            <span className="pill">🍃 MongoDB</span>
            <span className="pill">🚂 Express</span>
          </div>
        </div>

        {/* Tile 6: Experience (Timeline) */}
        <div className="tile tile-experience">
          <h2>Experience</h2>
          <div className="timeline-item">
            <span className="date">2024 - Present</span>
            <h4>Freelance Developer</h4>
            <p>Full Stack & Data Analysis solutions.</p>
          </div>
          <div className="timeline-item">
            <span className="date">2023 - 2024</span>
            <h4>Data Analyst Intern</h4>
            <p>DataCorp - Python & Visualization.</p>
          </div>
          <div className="timeline-item">
            <span className="date">2022 - 2023</span>
            <h4>Junior Frontend Dev</h4>
            <p>TechCorp Nepal - React & UI/UX.</p>
          </div>
        </div>

        {/* Tile 7: Education (New) */}
        <div className="tile tile-education">
          <h2>Education</h2>
          <div className="edu-item">
            <h4>Bachelor in Computer Engineering</h4>
            <p>Tribhuvan University</p>
            <span className="date">2019 - 2023</span>
          </div>
        </div>

        {/* Tile 8: Projects (Gallery) */}
        <div className="tile tile-projects">
          <h2>Recent Projects</h2>
          <div className="project-list">
            <div className="project-card">
              <h3>🌱 Smart Irrigation</h3>
              <p>IoT Dashboard</p>
            </div>
            <div className="project-card">
              <h3>🛒 E-Commerce</h3>
              <p>Full Stack Store</p>
            </div>
          </div>
        </div>

        {/* Tile 9: Contact (Action) */}
        <div className="tile tile-contact">
          <h2>Let's Connect</h2>
          <p>pinki@example.com</p>
          <div className="social-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <footer className="footer">© 2025 Pinki Mahato</footer>
    </div>
  );
}

export default App;