**technical tasks**
[X] pubic/images
    [X] add more photos!
[X] galleryItems.data.js
    [X] update galleryItems array to have id, title, path, description, likes
    [X] update galleryItems array to have new photos
[ ] create GalleryList and GalleryItem components
### Task List
[X] Use `axios` to retrieve (`GET`) data from to `/gallery` and store it in `App.jsx`.
[X] Create a new **component** for the `GalleryList` and pass it the gallery data stored in `App` via `props`.
    [X] Iterate (loop over) the list of gallery data
    [X] Make GalleryItems
[X] Create a new **component** called `GalleryItem.jsx` and pass it the individual gallery item via `props`. 
    [X] Update the `GalleryList` to use this component to display an image.
    [X] Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
    [X] Display the number likes for each item and include a like button.
    [X] When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
    [X] Update the gallery each time a like button is clicked.
    **STRETCH**
[X] Move the data into a database (postgresql)
    [X] name your database `react_gallery`
    [X] include a `database.sql` file documenting your database tables
[X] Add a form (new **component**) that allows a user to POST a new gallery item
    [X] Client side form (use absolute URL for images)
    [X] Server side route for posting an image
[X] Ability to delete a gallery item
[ ] Add styling with Material-UI [https://material-ui.com/](https://material-ui.com/)
[ ] Implement [uppy](https://uppy.io/) for image upload 


