import GalleryItem from './GalleryItem/GalleryItem';

import './GalleryList.css';

const GalleryList = ({list, moreLikes, fetchGallery}) => {
    // loop through gallery
    return (
        <div className="galleryArea">
            {
                list.map(picture => (
                    <GalleryItem key={picture.id} picture={picture} moreLikes={moreLikes} fetchGallery={fetchGallery} />
                ))
            }
        </div>
    );
}

export default GalleryList;