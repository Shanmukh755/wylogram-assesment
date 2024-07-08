import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import './index.css'

const EndCard = () => {
    return(
        <div className='end-cont'>
            <FaLinkedin className="icons"/>
            <IoLogoFacebook className="icons" />
            <FaInstagram className="icons" />
        </div>
    )
}
export default EndCard