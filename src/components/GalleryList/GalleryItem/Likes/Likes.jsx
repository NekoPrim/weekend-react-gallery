import React, {useState} from 'react';

const Likes = ({picture, moreLikes, fetchGallery}) => {

    const onLike = (picture) => {
        console.log('in onLike', picture.id);
        moreLikes(picture.id);
    }

    return (
        <div className="likeArea">
                <button className="like" onClick={() => onLike(picture)}>&#128077;</button>
                <p>{picture.likes} people like this</p>
            </div>
    )
}

export default Likes;