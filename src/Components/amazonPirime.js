import { React, useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import image from "./prime.png";

const Prime = () => {
  const [primeList, setPrimeList] = useState([]);

  useEffect(async () => {
    const API_KEY = "AIzaSyDS-Ahrwz6gA4WOf-y6CVl_7B3TO98DrqA";
    const channelId = "UC4zWG9LccdWGUlF77LZ8toA";
    const maxResult = 10;
    const url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=${maxResult}&q=Trailer&channelId=${channelId}&key=${API_KEY}`;

    const primeApi = await axios
      .get(url)
      .then((response) => {
        let data = response.data;
        console.log(data);
        const link = data.items.map(
          (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        setPrimeList(link);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <img src={image} className="primetitle"></img>
      </div>
      <div className="PrimeContainer">
        {primeList.map((link, id) => {
          return (
            <iframe
              className="frame"
              width="200"
              height="120"
              frameBorder="0"
              src={link}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          );
        })}
      </div>
    </div>
  );
};

export default Prime;
