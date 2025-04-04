import bannerHome from '../assets/banner-home.png'
import bannerAbout from '../assets/banner-about.png'
import { useLocation } from 'react-router-dom'
function Banner({ texte }) {
    const location = useLocation()
    return (
        <div className="banner">
            <img
                src={location.pathname != '/About' ? bannerHome : bannerAbout}
                alt="image banner"
                className={
                    location.pathname != '/About' ? 'bannerHome' : 'bannerAbout'
                }
            />
            <h1 className="texte">{texte}</h1>
        </div>
    )
}
export default Banner
