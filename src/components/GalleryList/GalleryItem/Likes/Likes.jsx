const Likes = ({picture, moreLikes, fetchGallery}) => {
    return (
        <div className="likeArea">
                <button className="like">&#128077;</button>
                <p>{picture.likes} people like this</p>
            </div>
    )
}

export default Likes;