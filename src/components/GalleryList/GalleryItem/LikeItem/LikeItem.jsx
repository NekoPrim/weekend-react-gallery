import React, {useState} from 'react';

import './LikeItem.css';

import DeleteItem from '../DeleteItem/DeleteItem';

const LikeItem = ({picture, moreLikes, fetchGallery, deleteGallery}) => {

    const onLike = (picture) => {
        console.log('in onLike', picture.id);
        moreLikes(picture.id);
        fetchGallery();
    }

    return (
        <>
            <div className="buttonArea">
                <button className="like" onClick={() => onLike(picture)}>&#128077;</button>
                <DeleteItem picture={picture} deleteGallery={deleteGallery} fetchGallery={fetchGallery}/>
            </div>
            <div className="likeText">
                <p>{picture.likes} people like this</p>
            </div>
        </>
    )
}

export default LikeItem;