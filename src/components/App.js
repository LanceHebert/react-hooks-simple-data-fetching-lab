// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogs, setDogs] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(
    () =>
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((dogPic) => {            
          setDogs(dogPic.message);
          setIsLoaded(true);
        }),
    []
  );

  return <div>
      <p>{isLoaded ? <img src={dogs} alt="A Random Dog"/> : "Loading..."}</p>
  </div>;
}

export default App;
