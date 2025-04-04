import { useParams, Navigate } from 'react-router-dom'
import data from '../data/data.json'
import Slidershow from '../components/SliderShow'
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'
import '../styles/Appart.scss'
function Appart() {
    const { id } = useParams()
    const appart = data.find((appt) => appt.id === id)
    if (!appart) {
        return <Navigate to="*" />
    }

    const {
        title,
        host,
        location,
        rating,
        tags,
        description,
        equipments,
        pictures,
    } = appart

    //préparer les éléments avant le return
    const equipment = equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
    ))
    const tag = tags.map((tag, index) => (
        <span key={`${tag}-${index}`} className="appart_tag">
            {tag}
        </span>
    ))

    return (
        <section className="appart">
            <div className="carousel">
                <Slidershow slides={pictures} />
            </div>
            <div className="appart_infos">
                <div className="appart_title_location_tags">
                    <h1 className="appart_title">{title}</h1>
                    <p className="appart_location">{location}</p>
                    <div className="appart_tags">{tag}</div>
                </div>
                <div className="appart_profil_rating">
                    <div className="appart_profil">
                        <div className="appart_name">
                            <span>{host.name.split(' ')[0]}</span>
                            <span>{host.name.split(' ')[1]}</span>
                        </div>
                        <img
                            src={host.picture}
                            alt="photo de profil"
                            className="appart_picture"
                        />
                    </div>
                    <div className="appart_rating">
                        <Rating rating={rating} />
                    </div>
                </div>
            </div>
            <div className="dropdowns">
                <Collapse
                    head="Description"
                    body={description}
                    className="collapse-appart"
                />
                <Collapse
                    head="Equipements"
                    body={equipment}
                    className="collapse-appart"
                />
            </div>
        </section>
    )
}
export default Appart
