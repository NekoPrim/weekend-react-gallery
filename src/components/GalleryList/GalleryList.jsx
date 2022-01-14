const GalleryList = ({list}) => {
    return (
        <div>
            {
                list.map(picture => (
                    <div key={picture.id}>
                        <img src={picture.path}/> 
                    </div>
                ))
            }
        </div>
    );
}

export default GalleryList;