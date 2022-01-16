import React, {useState} from 'react';

import './Likes.css';

const Likes = ({picture, moreLikes, fetchGallery}) => {

    const onLike = (picture) => {
        console.log('in onLike', picture.id);
        moreLikes(picture.id);
        fetchGallery();
    }

    return (
        <>
            <div className="buttonArea">
                <button className="like" onClick={() => onLike(picture)}>&#128077;</button>
            </div>
            <div className="likeText">
                <p>{picture.likes} people like this</p>
            </div>
        </>
    )
}

export default Likes;