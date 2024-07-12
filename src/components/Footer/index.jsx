import { BsLinkedin } from "react-icons/bs"
import logo from "../../assets/LogoMain.png"
import { BiSolidCopyright } from "react-icons/bi"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer-container">
            
            <ul className="icon-redes">
                <li>
                    <a href="https://www.linkedin.com/in/luis-desarrollador/" target="BLACK">
                    <BsLinkedin className="icons" />
                    </a>
                </li>
            </ul>
            <p className="footer-descripcion">
                Diseñado por Alura. <br />
                Desarrollado por Luis Fernando Henao Garcia. <br />
                2024
            </p>
            
            <div className="logo-footer">
                <img src={logo} alt="logo alura" />
            </div>
        </footer>
    )
}

export default Footer