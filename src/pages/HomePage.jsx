import { useEffect } from "react";
import { useState } from "react";
import { MainContainer, SectionComics } from "../styles/LayoutStyles";

import apiComics from "../services/apiComics";
import ComicItem from "../components/ComicItem";

const apiURL = `https://comicvine.gamespot.com/api/issues/?api_key=${import.meta.env.VITE_COMIC_KEY}&format=json&limit=10`;

export default function HomePage() {

  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);

    apiComics({
      method: 'GET',
      url: apiURL,
      data: ''
    }, function printResult(result) {
      setComics(JSON.parse(result).results);
      setLoading(false);
      // console.log(result);
    });

  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return(
    <MainContainer className="main">
      <SectionComics className="main--comics">
      {
        comics.map(comic => <ComicItem key={comic.id} comic={comic} /> )
      }
      </SectionComics>
    </MainContainer>
  );
}