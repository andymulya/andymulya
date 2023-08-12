import whatsappIcon from '../../assets/img/whatsapp.png'
import instagramIcon from '../../assets/img/instagram.png'
import facebookIcon from '../../assets/img/facebook.png'
import linkedinIcon from '../../assets/img/linkedin.png'
import githubIcon from '../../assets/img/github.png'

export default function MediaSocial(){
    return(
        <div>

            {/* Logo Instagram */}
            <div className="tooltip tooltip-bottom cursor-pointer hover:shadow-lg hover:shadow-slate-400 rounded hover:scale-105 w-[40px] sm:w-[45px]" data-tip="Instagram">
                <img alt="svgImg" src={ instagramIcon }/>
            </div>

            {/* Logo Facebook */}
            <div className="tooltip tooltip-bottom cursor-pointer hover:shadow-lg hover:shadow-slate-400 rounded hover:scale-105 w-[40px] sm:w-[45px]" data-tip="Facebook">
                <img alt="svgImg" src={ facebookIcon }/>
            </div>

            {/* Logo LinkedIn */}
            <div className="tooltip tooltip-bottom cursor-pointer hover:shadow-lg hover:shadow-slate-400 rounded hover:scale-105 w-[40px] sm:w-[45px]" data-tip="LinkedIn">
                <img alt="svgImg" src={ linkedinIcon }/>
            </div>

            {/* Logo GitHub */}
            <div className="tooltip tooltip-bottom cursor-pointer hover:shadow-lg hover:shadow-slate-400 rounded hover:scale-105 w-[40px] sm:w-[45px]" data-tip="GitHub">
                <img alt="svgImg" src={ githubIcon }/>
            </div>
        </div>
    )
}