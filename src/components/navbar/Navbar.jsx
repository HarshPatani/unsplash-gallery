import { useState } from "react";
import "./Navbar.scss";
import axios from "axios";

const Navbar = ({ setPhotos, setIsLoading }) => {
  const [query, setQuery] = useState("");

  const searchQuery = () => {
    try {
      (async () => {
        setIsLoading(true);
        const res = await axios.get(
          // `https://api.unsplash.com/photos?page=1&per_page=50`,
          `https://api.unsplash.com/search/photos?page=1&query=${query}&per_page=50`,
          {
            headers: {
              Authorization:
                "Client-ID JwKZ06fE7fA-PYfV9lQxC5JxxKC6WFvO1zQJM4xLqr0",
            },
          }
        );
        setPhotos(res?.data?.results);
        setIsLoading(false);
        console.log(res?.data?.results);
      })();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="navbar">
      <h2>GeekGallery</h2>
      <div className="navbar__search">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
