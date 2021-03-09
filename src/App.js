import './App.scss'
// import firebase from './firebase';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayPhotos from './DisplayPhoto.js';
import Form from './Form.js'

// App.js
function App() {

  const [randomPhotos, setRandomPhotos] = useState([]);
  const [userChoice, setUserChoice] = useState('')
  // const [filteredPhotos, setFliteredPhotos] = useState([]);
  // const value = 'amsterdam';
  useEffect(() => {

    axios({
      url: "https://api.unsplash.com/search/photos",
      method: "GET",
      dataResponse: "json",
      params: {
        client_id: 'L56MP65Tm-PvPhyEPZSV7TdDg__S-iBTbwwuWHe-eZU',
        // collections: 39293495,
        query: userChoice,
        orientation: "landscape",
        per_page: 5
        // count:3,

      },
    }).then(response => {
      // console.log(response)  

      // store random photos in array
      const responseArray = response.data.results;
      console.log(responseArray)

      setRandomPhotos(responseArray)

    });
    // console.log(userChoice)

  }, [userChoice]);

  // //defining query parameter
  const getPhotos = (choice) => {


    setUserChoice(choice)

  }




  return (
    <div className="App">
      <div className="parent">
        <div className="wrapper">
          <header>
            <h1>The most beutiful cities</h1>
          </header>
          <Form getPhotos={getPhotos} />
          <DisplayPhotos photos={randomPhotos} />
        </div>
        <div className="background-img">
          
        </div>
      </div>

      <footer>
        <p>Created by Olga Sh at <a href="https://junocollege.com/">Juno college</a> </p>
      </footer>
    </div>
  )
}

export default App;