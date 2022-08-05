import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
console.log(API_KEY);

const useFetch = ({ keyword }) => {
  console.log(keyword.split(" ").join(""));
  const [gifUrl, setGifUrl] = useState("");

  const fetchGifs = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
          .split(" ")
          .join("")}&limit=1`
      );
      const data = await response.json();
      console.log(data, data?.data[0]?.url);
      setGifUrl(data?.data[0]?.bitly_gif_url);
    } catch (e) {
      setGifUrl(
        "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
      );
    }
  };

  useEffect(() => {
    if (keyword) {
      fetchGifs();
    }
  }, [keyword]);

  return gifUrl;
};

export default useFetch;
