import { useState } from 'react'
import arrow from '../assets/arrow.png'
import '../styles/About.scss'
function Collapse({ head, body }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="collapse">
            <div className="dropdown-header">
                <h2 className="collapse-header collapse-header-appart">
                    {head}
                </h2>
                <img
                    src={arrow}
                    alt={isOpen ? 'Masquer le contenu' : 'Afficher le contenu'}
                    className={`arrow ${isOpen ? 'rotated' : ''}`}
                    onClick={toggleCollapse}
                    aria-expanded={isOpen}
                />
            </div>
            <div className={`collapse_description ${isOpen ? 'show' : 'hide'}`}>
                <p>{body}</p>
            </div>
        </div>
    )
}
export default Collapse
