import './DeleteItem.css';

const DeleteItem = ({picture, deleteGallery, fetchGallery}) => {

    const onDelete = (picture) => {
        console.log('in onDelete', picture.id);
        deleteGallery(picture.id);
        fetchGallery();
    }

    return (
        <div className="deleteArea">
            <button className="delete" onClick={() => onDelete(picture)}>Delete</button>
        </div>
    )
}

export default DeleteItem;