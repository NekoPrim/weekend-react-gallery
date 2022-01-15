import React, {useState} from 'react';

import './GalleryItem.css';
import Likes from './Likes/Likes';

const GalleryItem = ({picture, moreLikes, fetchGallery}) => {

    const [toggle, setToggle] = useState(true);

    return(
        <div key={picture.id} className="displayArea">
            <div className="toggleArea" onClick={() => setToggle(!toggle)}>
                {toggle ? <img src={picture.path} /> : <h4>{picture.description}</h4>}
            </div>
            <Likes key={picture.id} picture={picture} moreLikes={moreLikes} fetchGallery={fetchGallery} />
        </div>
    );
}

export default GalleryItem;