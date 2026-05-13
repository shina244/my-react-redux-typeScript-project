import { type MovieState } from "./state/omdbSlice";

interface Movie {
  item: MovieState;
  onClick: any;
}

export default function MovieBox({ item, onClick }: Movie) {
  return (
    <li onClick={onClick}>
      <img src={`${item.Poster}`} alt={`${item.Title} poster`} />
      <h3>{item.Title}</h3>
      <div>
        <p>
          <span>📆</span>
          <span>{item.Year}</span>n bn
        </p>
      </div>
    </li>
  );
}
