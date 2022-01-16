import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

import Header from '../Header/Header';
import GalleryForm from '../GalleryForm/GalleryForm';
import GalleryList from '../GalleryList/GalleryList';
import Footer from '../Footer/Footer';

function App() {

  // store data
  const [gallery, setGallery] = useState([]);

  // function to receive data from database
  const fetchGallery = () => {
    // receive data from server side
    axios.get('/gallery')
      .then((res) => {
        // tell client of success
        console.log('response', res.data);

        // store data
        setGallery(res.data);
      })
      .catch((err) => {
        // tell client of failure
        console.log('axios GET ERROR!', err);
      });
  }

  // call function to store data
  useEffect(() => {
    fetchGallery();
  }, []);

  // function to add data to the database
  const addGallery = (newItem) => {
    // check data
    console.log('sent data from form:', newItem);
    // send to server
    axios.post('/gallery', newItem)
      .then(() => {
        // tell client of success
        console.log('axios POST success!');
        // reload list
        fetchGallery();
      })
      .catch((err) => {
        // tell client of failure
        console.log('axios POST ERROR!', err);
      })
  }

  // function to update likes
  const moreLikes = (id) => {
    console.log('in moreLikes', id);
    // send data to server side
    axios.put(`/gallery/like/${id}`)
      .then((res) => {
        // tell client of success
        console.log('axios PUT success', res);

        // reload gallery
        fetchGallery();
      })
      .catch((err) => {
        // tell client of failure
        console.log('axios PUT ERROR', err);
      })
  }

    return (
      <div className="App">
        <Header />
        <GalleryForm addGallery={addGallery} />
        {/* <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/> */}
        <GalleryList list={gallery} moreLikes={moreLikes} fetchGallery={fetchGallery} />
        <Footer />
      </div>
    );
}

export default App;
