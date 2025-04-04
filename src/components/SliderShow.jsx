import { useState } from 'react'
import arrowRight from '../assets/arrow-right.png'
import arrowLeft from '../assets/arrow-left.png'
import '../styles/Carousel.scss'
function Slideshow({ slides }) {
    const slidesLength = slides.length
    const [currentPicture, setCurrentPicture] = useState(0)
    const folowingPicture = () => {
        setCurrentPicture(
            currentPicture === slidesLength - 1 ? 0 : currentPicture + 1,
        )
    }
    const previousPicture = () => {
        setCurrentPicture(
            currentPicture === 0 ? slidesLength - 1 : currentPicture - 1,
        )
    }
    return (
        <>
            {slidesLength > 1 && (
                <span className="carousel_fraction">
                    {currentPicture + 1}/{slidesLength}
                </span>
            )}
            {slidesLength > 1 && (
                <div className="carousel_arrows">
                    <img
                        src={arrowLeft}
                        alt="photo précédente"
                        className="carousel_arrows_left arrow"
                        onClick={previousPicture}
                    />
                    <img
                        src={arrowRight}
                        alt="photo suivante"
                        className="carousel_arrows_right arrow"
                        onClick={folowingPicture}
                    />
                </div>
            )}
            {slides.map((picture, index) => (
                <div key={index}>
                    {index === currentPicture && (
                        <img src={picture} className="carousel_picture" />
                    )}
                </div>
            ))}
        </>
    )
}
export default Slideshow
