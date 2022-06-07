import { ComicDiv } from "../styles/LayoutStyles";

export default function ComicItem({comic}) {

  return(
    <ComicDiv className="comic">
      <div className="comic--container">
        <img className="comic--container--img" src={comic.image.small_url} alt={comic.name} />
      </div>
      <p className="comic--title">{comic.name ? comic.name : comic.volume.name}</p>
      <p className="comic--date">October 03, 2018</p>
    </ComicDiv>
  );
}