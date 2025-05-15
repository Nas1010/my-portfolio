import styles from "./styles/About.module.css";

const About = () => {
  return (
    <>


      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="/assets/avatar-2.png"
              alt="Profile Picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="/assets/experience.png"
                  alt="experience-icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  School of Code <br /> Fullstack Developer
                </p>
              </div>
              <div className="details-container">
                <img
                  src="/assets/education.png"
                  alt="education-icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  BA. Bachelors Degree <br /> PGDipEd. Postgraduate Diploma
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Before moving into tech, I spent five years in the education
                sector, where I learned to adopt an agile approach, solve
                problems creatively, and collaborate with diverse teams (skills
                that now drive my work in coding). Teaching taught me how to
                break down complex ideas and adapt quickly, and I bring that
                same adaptability to every coding challenge I face.
              </p>
              <br />
              <p>
                When I first discovered what developers do, it sparked the same
                “Aha!” moment I often saw in my students when they overcame a
                challenge. That moment reshaped my career, and now, every line
                of code I write is another chance to learn.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = './#experience')}
        />
      </section>
    </>
  );
};

export default About;
