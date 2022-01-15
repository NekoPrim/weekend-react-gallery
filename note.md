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


