import React, {useState} from 'react';

const GalleryItem = ({picture, moreLikes, fetchGallery}) => {

    const [toggle, setToggle] = useState(true);

    return(
        <div key={picture.id}>
            <div className="picOrDesc" onClick={() => setToggle(!toggle)}>
                {toggle ? <img src={picture.path} /> : <h4>{picture.description}</h4>}
            </div>
            <br />
            <button className="like">&#128077;</button>
            <p>{picture.likes} people like this</p>
        </div>
    );
}

export default GalleryItem;