import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import MainContent from "./components/mainContent/MainContent";
import Loader from "./components/loader/Loader";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        setIsLoading(true);
        const res = await axios.get(
          `https://api.unsplash.com/photos?page=1&per_page=50`,
          {
            headers: {
              Authorization:
                "Client-ID JwKZ06fE7fA-PYfV9lQxC5JxxKC6WFvO1zQJM4xLqr0",
            },
          }
        );
        setPhotos(res?.data);
        setIsLoading(false);
        console.log(res?.data);
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <Navbar setPhotos={setPhotos} setIsLoading={setIsLoading} />

      {isLoading ? <Loader /> : <MainContent photos={photos} />}
    </div>
  );
}

export default App;
