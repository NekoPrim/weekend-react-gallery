import GalleryItem from './GalleryItem/GalleryItem';

const GalleryList = ({list}) => {
    return (
        <div>
            {
                list.map(picture => (
                    <GalleryItem key={picture.id} picture={picture} />
                ))
            }
        </div>
    );
}

export default GalleryList;