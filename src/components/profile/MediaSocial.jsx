import whatsappIcon from '../../assets/whatsapp.png'
import instagramIcon from '../../assets/instagram.png'
import facebookIcon from '../../assets/facebook.png'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'

export default function MediaSocial(){
    return(
        <div>

            {/* Logo Whatsapp */}
            <div className="tooltip tooltip-bottom cursor-pointer" data-tip="WA">
                <img className="hover:scale-105 w-[50px] hover:shadow-lg hover:shadow-slate-400 rounded" alt="svgImg" src={ whatsappIcon }/>            
            </div>

            {/* Logo Instagram */}
            <div className="tooltip tooltip-bottom cursor-pointer" data-tip="Instagram">
                <img className="hover:scale-105 w-[50px] hover:shadow-lg hover:shadow-slate-400 rounded" alt="svgImg" src={ instagramIcon }/>
            </div>

            {/* Logo Facebook */}
            <div className="tooltip tooltip-bottom cursor-pointer" data-tip="Facebook">
                <img className="hover:scale-105 w-[50px] hover:shadow-lg hover:shadow-slate-400 rounded" alt="svgImg" src={ facebookIcon }/>
            </div>

            {/* Logo LinkedIn */}
            <div className="tooltip tooltip-bottom cursor-pointer" data-tip="LinkedIn">
                <img className="hover:scale-105 w-[50px] hover:shadow-lg hover:shadow-slate-400 rounded" alt="svgImg" src={ linkedinIcon }/>
            </div>

            {/* Logo GitHub */}
            <div className="tooltip tooltip-bottom cursor-pointer" data-tip="GitHub">
                <img className="hover:scale-105 w-[50px] hover:shadow-lg hover:shadow-slate-400 rounded" alt="svgImg" src={ githubIcon }/>
            </div>
        </div>
    )
}