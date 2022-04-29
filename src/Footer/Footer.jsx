import React from "react";
import './Footer.css';
import LogoFacebook from '.././img/logo-facebook.png';
import LogoInstagram from '.././img/logo-instagram.png';
import LogoWhasapp from '.././img/logo-whatsapp.png';

function Footer(){
    return(
        <div>
            <footer>
                <nav className="NF">
                    {/* NF = Nav do Footer */}
                    <div>
                        {/* UF = UL do Footer */}
                        <li className="LF">Estofados Oliveira ©copy 2022. Todos direitos reservados.</li>  
                    </div>
                    <ul class="UF">
                        <li className="LF"><a className="LIF" href=""><img src={LogoFacebook} alt="Facebook"/></a></li>            
                        <li className="LF"><a className="LIF" href=""><img src={LogoInstagram} alt="Instagram"/></a></li>  
                        <li className="LF"><a className="LIF" href=""><img src={LogoWhasapp} alt="Whatsapp"/></a></li>
                        {/* LF,LIF = LI do Footer */}
                    </ul>          
                </nav>
            </footer>
        </div>
    )
}

export default Footer;