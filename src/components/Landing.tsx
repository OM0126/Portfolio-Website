import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              OM
              <br />
              <span>YENGANTIWAR</span>

            <h2>I am here to to expose my skills and experience and projects</h2>
            </h1>
          </div>
          <div className="landing-info">
            <h3></h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">DevOps Engineer</div>
              <div className="landing-h2-2">Cloud Engineer</div>
              
            </h2>
            <h2>
              <div className="landing-h2-info">Cloud Engineer</div>
              <div className="landing-h2-info-1">DevOps Engineer</div>
              
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
