import { Link } from 'react-router-dom'
import '../styles/Home.scss'
import Banner from '../components/Banner'
import data from '../data/data.json'
import Cards from '../components/Cards'
function Home() {
    return (
        <>
            <Banner texte="Chez vous, partout et ailleurs" />
            <section className="gallery">
                {data.map(({ id, title, cover }) => (
                    <div className="gallery_card" key={id}>
                        <Link to={`/appart/${id}`}>
                            <Cards cover={cover} title={title} />
                        </Link>
                    </div>
                ))}
            </section>
        </>
    )
}
export default Home
