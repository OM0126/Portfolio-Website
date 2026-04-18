import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Goals <span>&</span>
          <br /> learning
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>My Goal</h4>
                <h5>DevOps Engineer</h5>
              </div>
              <h3>FUTURE</h3>
            </div>
            <p>
              To become a DevOps engineer capable of building, automating, and managing scalable and reliable systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Currently Learning</h4>
                <h5>Skills &amp; Workflows</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Focusing on real-world DevOps workflows, deployment strategies, cloud infrastructure scaling, and integrating MLOps fundamentals with DevOps practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Strengths &amp; Mentality</h4>
                <h5>Automation focused</h5>
              </div>
              <h3>ALWAYS</h3>
            </div>
            <p>
              Strong interest in efficiency and reducing manual work. Curious about internal system mechanics and always taking a hands-on, practical approach to learning new concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
