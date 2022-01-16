import React, {useState} from 'react';

import './GalleryItem.css';
import LikeItem from './LikeItem/LikeItem';

const GalleryItem = ({picture, moreLikes, fetchGallery, deleteGallery}) => {

    const [toggle, setToggle] = useState(true);

    return(
        <div key={picture.id} className="displayArea">
            <div className="toggleArea" onClick={() => setToggle(!toggle)}>
                {toggle ? <img className="pic" src={picture.url} /> : <h4>{picture.description}</h4>}
            </div>
            <LikeItem picture={picture} moreLikes={moreLikes} fetchGallery={fetchGallery} deleteGallery={deleteGallery} />
        </div>
    );
}

export default GalleryItem;