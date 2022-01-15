import GalleryItem from './GalleryItem/GalleryItem';

const GalleryList = ({list, moreLikes, fetchGallery}) => {
    // loop through gallery
    return (
        <div>
            {
                list.map(picture => (
                    <GalleryItem key={picture.id} picture={picture} moreLikes={moreLikes} fetchGallery={fetchGallery} />
                ))
            }
        </div>
    );
}

export default GalleryList;