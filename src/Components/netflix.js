import { React, useEffect, useState } from "react";
import axios from "axios";

const Netflix = () => {
  const [netflixList, setNetflixList] = useState([]);

  useEffect(async () => {
    const API_KEY = "AIzaSyAnj_TiCUOFUshB8uSJX5nsK25n00riJL4";
    const channelId = "UCWOA1ZGywLbqmigxE4Qlvuw";
    const maxResult = 5;
    const url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=${maxResult}&part=snippet&q=Trailer&channelId=${channelId}&key=${API_KEY}`;

    await axios.get(url).then((response) => {
      let data = response.data;
      console.log(data);
      const link = data.items.map(
        (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
      );
      setNetflixList(link);
    });
  });

  return (
    <div>
      {netflixList.map((link, id) => {
        return (
          <iframe
            width="560"
            height="315"
            frameBorder="0"
            src={link}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      })}
    </div>
  );
};

export default Netflix;
