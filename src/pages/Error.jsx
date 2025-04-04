import { Link } from 'react-router-dom'
import errorImg from '../assets/404.png'
import '../styles/Error.scss'
function Error() {
    //<img src={errorImg} alt="erreur 404" className="error_image" />
    return (
        <div className="error">
            <h1 className="error_404">404</h1>
            <p className="error_texte">
                <span>Oups! La page que</span> vous demandez n'existe pas.
            </p>
            <Link to="/" className="error_link">
                Retourner sur la page d’accueil
            </Link>
        </div>
    )
}
export default Error
