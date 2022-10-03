import './../styles/Header.css'
import { BsPersonCircle, BsTwitter, BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <header>
        <p>Desarrollado por Puli</p>
        <div className="socials">
          <a href="https://emilianooliveto.vercel.app/" target="_blank"> <i><BsPersonCircle /></i> </a>
          <a href="https://twitter.com/DevPul" target="_blank"><i> <BsTwitter /></i></a>
          <a href="https://www.linkedin.com/in/emilianooliveto/" target="_blank"><i> <BsLinkedin /></i></a>

        </div>
    </header>
  )
}

export default Header