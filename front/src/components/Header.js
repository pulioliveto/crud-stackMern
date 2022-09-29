import './../styles/Header.css'
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <header>
        <p>Desarrollado por Puli</p>
        <div className="socials">
           <i><BsInstagram /></i> 
           <i> <BsTwitter /></i>
        <i> <BsLinkedin /></i>

        </div>
    </header>
  )
}

export default Header