import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [imageUrls, setImageUrls] = useState([]);

  async function getImages() {
    const apiKey = "grGTd5mrcdvzCKeb38qVFsMSYrGbhS6a";
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cats&limit=10`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Http error! status: ${response.status}`);
      }
      const data = await response.json();
      const urls = data.data.map((image) => image.images.original.url);
      setImageUrls(urls);
    } catch (error) {
      console.error("Error fetching image: ", error);
    }
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <header>
          <div className="info">
            <h1></h1>
            <h3></h3>
          </div>
          <div className="score-container">
            <p className="score"></p>
            <p className="score best-score"></p>
          </div>
        </header>
        <main>
          <a href="">
            <div className="memory-card">
              <img src={} alt="" />
              <p></p>
            </div>
          </a>
          <a href="">
            <div className="memory-card">
              <img src="" alt="" />
              <p></p>
            </div>
          </a>
          <a href="">
            <div className="memory-card">
              <img src="" alt="" />
              <p></p>
            </div>
          </a>
          <a href="">
            <div className="memory-card">
              <img src="" alt="" />
              <p></p>
            </div>
          </a>
          <a href="">
            <div className="memory-card">
              <img src="" alt="" />
              <p></p>
            </div>
          </a>
        </main>
      </div>
    </>
  );
}

export default App;
