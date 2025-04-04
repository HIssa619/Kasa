import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import dataCollapse from '../data/dataAbout.json'
import '../styles/About.scss'

function About() {
    return (
        <>
            <Banner />
            <div className="dropdown-about">
                {dataCollapse.map(({ title, description, index }) => (
                    <div key={`${title}-${index}`}>
                        <Collapse head={title} body={description} />
                    </div>
                ))}
            </div>
        </>
    )
}
export default About
