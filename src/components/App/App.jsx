import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';
import Footer from '../Footer/Footer';

function App() {

  // store data
  const [gallery, setGallery] = useState([]);

  // function to receive data from in house database
  const fetchGallery = () => {
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

  // function to toggle between pith and description
  const moreLikes = (id) => {
    console.log('in moreLikes', id);
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
        {/* <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/> */}
        <GalleryList list={gallery} moreLikes={moreLikes} fetchGallery={fetchGallery} />
        <Footer />
      </div>
    );
}

export default App;
