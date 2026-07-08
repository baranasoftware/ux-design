function App() {

  // @ts-expect-error("event e")
  const onSubmit = async (e) => {
    console.log(e);
  }


  return (
      <>
        <div className="book">

          <div className="back-cover left"></div>
          <div className="back-cover right"></div>
          <div className="spine"></div>

          <div className="page cover">
            <div className="front">
              <h1>PORTFOLIO</h1>
              <p>Interactive Designer</p>
            </div>
            <div className="back"></div>
          </div>

          <div className="page">
            <div className="front">
              <h2>Hello! 👋</h2>
              <p>I'm a UI/UX designer and Front-end developer specializing in modern, interactive user experiences that
                drive engagement.</p>
              <a href="#" className="btn">Download Resume</a>
            </div>
            <div className="back"></div>
          </div>

          <div className="page">
            <div className="front">
              <h3>Technical Skills</h3>
              <div className="skill-box">
                <span className="title">HTML & CSS</span>
                <div className="skill-bar">
                  <div className="skill-per" ></div>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">JavaScript & React</span>
                <div className="skill-bar">
                  <div className="skill-per"></div>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">UI/UX Design (Figma)</span>
                <div className="skill-bar">
                  <div className="skill-per" ></div>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">3D Animation</span>
                <div className="skill-bar">
                  <div className="skill-per" ></div>
                </div>
              </div>
            </div>
            <div className="back"></div>
          </div>

          <div className="page">
            <div className="front">
              <h3>What I Do</h3>
              <div className="service-card">
                <h4>Web Development</h4>
                <p>Building responsive, fast, and accessible websites using modern frameworks.</p>
              </div>
              <div className="service-card">
                <h4>Interface Design</h4>
                <p>Crafting intuitive layouts and visually stunning interfaces for web and mobile.</p>
              </div>
            </div>
            <div className="back"></div>
          </div>

          <div className="page">
            <div className="front">
              <h3>Get In Touch</h3>
              <form className="contact-form" onSubmit={onSubmit}>
                <input type="text" placeholder="Your Name" required/>
                <input type="email" placeholder="Your Email" required/>
                <input placeholder="Your Message..." required/>
                <button type="submit">Send Message</button>
              </form>
            </div>
            <div className="back"></div>
          </div>

        </div>
      </>
  )
}

export default App
