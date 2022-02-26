import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Seach from "./component/Seach";
import Profilepages from "./pages/Profilepages";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);

  const getPhotosRandom = async () => {
    const response = await axios.get(
      "https://api.unsplash.com/photos/random?client_id=0MykGDiZCKg4FZ9BRL6tOcy0P0g3mVYvZn1XaNWau0w&count=12&orientation=squarish"
    );
    console.log(response.data);
    const data = await response.data;
    setPhotos(data);
  };

  const getPhotosSearch = async (search) => {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=0MykGDiZCKg4FZ9BRL6tOcy0P0g3mVYvZn1XaNWau0w&&orientation=squarish&query=${search}`
    );
    //console.log(response.data);
    const data = await response.data.results;
    setPhotos(data);
  };

  const getProfile = async (username) => {
    console.log(username);
    const response = await axios.get(
      `https://api.unsplash.com/${username}/photos?client_id=0MykGDiZCKg4FZ9BRL6tOcy0P0g3mVYvZn1XaNWau0w`
    );
    console.log(response.data);
    const data = await response.data;
    setPhotos(data);
  };

  return (
    <Router>
      <Seach getPhotosSearch={getPhotosSearch} />
      <div className="container  mx-auto">
        <Routes>
          <Route
            path="/"
            element={<Home handledOnLoad={getPhotosRandom} photos={photos} />}
          />
          <Route
            path="/Profile/:username"
            element={<Profilepages getProfile={getProfile} photos={photos} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
