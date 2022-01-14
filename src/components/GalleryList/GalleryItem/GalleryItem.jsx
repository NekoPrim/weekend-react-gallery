const GalleryItem = ({picture}) => {
    return(
        <div key={picture.id}>
            <img src={picture.path} /> 
        </div>
    );
}

export default GalleryItem;