import {faLinkedin, faGithub, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Left() {
    return(
        <div className="left">
            <div className="bg-image"></div>
            <div className="info-bg">
                <div className="info">
                    <h2 className="name">Chuks-Aginam Adaobi</h2>
                    <div className="sub-text"> <h2>Back-End Web Developer</h2></div>
                    <div className="sub-text"><h2>Civil Engineer</h2></div>
                    <div className="social-links">
                        <a className="link" href='https://www.linkedin.com/in/adaobi-chuks-aginam-388966232' target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a className="link" href='https://github.com/Adaobi-Chuks' target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faGithub}/></a>
                        <a className="link" href='https://mobile.twitter.com/Jes_sie___' target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faTwitter}/></a>
                        <a className="link" href='https://instagram.com/_je__ssie?r=nametag' target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faInstagram}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Left;
