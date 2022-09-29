import Introduction from "./Introduction";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

function Right() {
    return(
        <div className="right">
            <div className="right-inner">
              <Introduction/>
              <Skills/>
              <Education/>
              <Experience/>
              <Projects/>
              <a className="resume" href="https://www.linkedin.com/in/adaobi-chuks-aginam-388966232" target="_blank" rel="noopener noreferrer"><div className="resume-link">Contact me on linkedin</div></a>
            </div>
        </div>
    )
}

export default Right;
