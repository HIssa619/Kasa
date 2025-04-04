import starGrey from '../assets/star-grey.svg'
import star from '../assets/star.svg'

function Rating({ rating }) {
    const stars = [1, 2, 3, 4, 5]
    const fullStar = <img src={star} alt="full star" className="tag_star" />
    const emptyStar = (
        <img src={starGrey} alt="empty star" className="tag_star" />
    )
    return (
        <>
            {stars.map((star) => (
                <span key={star}>{star <= rating ? fullStar : emptyStar}</span>
            ))}
        </>
    )
}
export default Rating
