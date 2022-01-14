import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {

  // store data
  const [gallery, setGallery] = useState([]);

  // function to recieve data from in house database
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

  useEffect(() => {
    fetchGallery();
  }, []);

    return (
      <div className="App">
        <Header />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <Footer />
      </div>
    );
}

export default App;
