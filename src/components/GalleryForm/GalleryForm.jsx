import React, {useState} from 'react';

import './GalleryForm.css';

const GalleryForm = ({addGallery}) => {

    // set variable for inputs
    const [newTitle, setNewTitle] = useState('');
    const [newUrl, setNewUrl] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // setup data to be added from inputs
        let newItem = {
            title: newTitle,
            url: newUrl,
            description: newDescription
        };

        // sent data to server side
        addGallery(newItem);

        // clear inputs
        setNewTitle('');
        setNewUrl('');
        setNewDescription('');
    }

    return (
        <div className="galleryForm">
            <h3 className="galleryTitle">Add to Street Art Gallery</h3>
            <form onSubmit={handleSubmit}>

                    <label>Title:</label>
                    <input
                        type="text"
                        onChange = {(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                    />

                    <label>Url:</label>
                    <input
                        type="text"
                        onChange={(event) => setNewUrl(event.target.value)}
                        value={newUrl}
                    />

                    <label>Description</label>
                    <input
                        type="text"
                        onChange={(event) => setNewDescription(event.target.value)}
                        value={newDescription}
                    />

                    <button className="addBtn">Add</button>
            </form>
        </div>
    )
}

export default GalleryForm;