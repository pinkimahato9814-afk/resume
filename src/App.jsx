import "./App.css";

function App() {
  return (
    <div className="container">
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
            Passionate about building scalable web apps with modern tech stacks.
            Optimizing performance and user experience is my priority.
          </p>
        </div>

        {/* Tile 4: Tech Stack (Visual) */}
        <div className="tile tile-skills">
          <h2>Tech Stack</h2>
          <div className="pill-container">
            <span className="pill">⚛️ React</span>
            <span className="pill">🟢 Node.js</span>
            <span className="pill">🍃 MongoDB</span>
            <span className="pill">🚂 Express</span>
            <span className="pill">🎨 Tailwind</span>
            <span className="pill">🔥 Firebase</span>
          </div>
        </div>

        {/* Tile 5: Experience (Timeline) */}
        <div className="tile tile-experience">
          <h2>Experience</h2>
          <div className="timeline-item">
            <span className="date">2024 - Present</span>
            <h4>Freelance Developer</h4>
            <p>Building custom MERN stack solutions.</p>
          </div>
          <div className="timeline-item">
            <span className="date">2023 - 2024</span>
            <h4>Junior Frontend Dev</h4>
            <p>TechCorp Nepal - React & UI/UX.</p>
          </div>
        </div>

        {/* Tile 6: Projects (Gallery) */}
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

        {/* Tile 7: Contact (Action) */}
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
