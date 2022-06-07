import { Link } from "wouter";

export default function ComicPage({params}) {
  return(
    <div>
      <Link to="/">Go Home</Link>
      <p>ComicPage view {params.id}</p>
    </div>
  );
}