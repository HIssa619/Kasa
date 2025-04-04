function Cards({ cover, title }) {
    return (
        <>
            <img src={cover} alt="photo de la location" />
            <h2 className="title">{title}</h2>
        </>
    )
}
export default Cards
