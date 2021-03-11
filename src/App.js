import "./App.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayPhotos from "./DisplayPhoto.js";
import Form from "./Form.js"
import firebase from "./firebase.js";

// App.js
function App() {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [userChoice, setUserChoice] = useState("")
  const [citiesArray, setCitiesArray] = useState([]);
  const [textInput, setTextInput] = useState("");
  useEffect(() => {

    axios({
      url: "https://api.unsplash.com/search/photos",
      method: "GET",
      dataResponse: "json",
      params: {
        client_id: "L56MP65Tm-PvPhyEPZSV7TdDg__S-iBTbwwuWHe-eZU",
        query: userChoice,
        orientation: "landscape",
        per_page: 5
      },
    }).then(response => {
      const responseArray = response.data.results;
      setRandomPhotos(responseArray)
    });
  }, [userChoice]);


  const getPhotos = (choice) => {
    setUserChoice(choice)
  }

  //for city list
  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on("value", (data) => {
      console.log(data.val());
      const cityData = data.val();
      const cityBag = [];
      for (let cityKey in cityData) {
        cityBag.push({
          uniqueKey: cityKey,
          title: cityData[cityKey]
        });
      }
      setCitiesArray(cityBag);
    });

  }, []);

  const handleChange = (event) => {
    setTextInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(textInput);
    setTextInput("");
  }
  const handleClick = (cityUniqueId) => {
    const dbRef = firebase.database().ref();
    dbRef.child(cityUniqueId).remove();
  }

  
  return (
    <div className="App">     
        <div className="parent">
        <main>
          <div className="wrapper">
            <header>
              <h1>The most beautiful cities</h1>
            </header>
            <Form getPhotos={getPhotos} />
            <DisplayPhotos photos={randomPhotos}/>
            <div className="cities-box">
              <form action="" onSubmit={handleSubmit} className="more-cities">
                <label htmlFor="citiesToVisit" className="to-visit"><h2></h2>Add cities to visit :</label>
                <div className="cities-to-visit">
                  <input type="text" id="cityToVisit" required onChange={handleChange} value={textInput} />
                  <button><FontAwesomeIcon icon={faSuitcaseRolling} /></button>
                </div>
              </form>
              <ul className="cities-list">
                {
                  citiesArray.map((city) => {
                    return (
                      <li key={city.uniqueKey}>
                        <button onClick={() => { handleClick(city.uniqueKey) }}><FontAwesomeIcon icon={faCheck} /></button>
                        <span>{city.title}</span>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>                
      </main>
      </div>
      <footer>
        <p>Created by Olga Sh at <span><a href="https://junocollege.com/">Juno college</a></span></p>
      </footer>
    </div>
  )
}

export default App;