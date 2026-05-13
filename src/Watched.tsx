import { useDispatch } from "react-redux";
import { onFilter } from "./state/watchedSlice";
import { type WatchedMovie } from "./state/watchedSlice";

interface Item {
  item: WatchedMovie;
}
export default function Watched({ item }: Item) {
  const dispatch = useDispatch();
  const { Poster, Title, imdbRating, Runtime, imdbID } = item;
  return (
    <li>
      <img src={`${Poster}`} alt={`Poster of ${Poster} movie`} />
      <h3>{Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{imdbRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{Runtime}</span>
        </p>

        <button
          className="btn-delete"
          onClick={() => dispatch(onFilter(imdbID))}
        >
          X
        </button>
      </div>
    </li>
  );
}
