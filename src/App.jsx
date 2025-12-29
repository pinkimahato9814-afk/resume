import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <img
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop"
          alt="Profile"
          className="profile-img"
        />
        <h1>Pinki Mahato</h1>
        <p>Frontend & Backend JavaScript Developer</p>
      </header>

      {/* About */}
      <section className="card">
        <h2>About Me</h2>
        <p>
          I am a passionate full-stack JavaScript developer interested in
          building modern web applications. Currently learning React, Node.js,
          and MERN stack development.
        </p>
      </section>

      {/* Skills */}
      <section className="card">
        <h2>Skills</h2>
        <ul className="skills">
          <li>HTML & CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React JS</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="card">
        <h2>Projects</h2>
        <h3>Smart Irrigation System</h3>
        <p>
          Soil moisture and fertility testing based automatic irrigation system
          using sensors and web dashboard.
        </p>
      </section>

      {/* Education */}
      <section className="card">
        <h2>Education</h2>
        <p>Bachelor in Computer Science (Running)</p>
      </section>

      {/* Contact */}
      <section className="card">
        <h2>Contact</h2>
        <p>Email: pinki@example.com</p>
        <p>GitHub: github.com/pinki</p>
        <p>Location: Nepal</p>
      </section>

      <footer className="footer">© 2025 Pinki Mahato</footer>
    </div>
  );
}

export default App;
