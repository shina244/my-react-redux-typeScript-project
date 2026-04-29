import { useSelector, useDispatch } from "react-redux";
import { type AppDispatch, type RootState } from "./state/store";
import { onAddWatched, onCloseMovie } from "./state/watchedSlice";
import Loading from "./Loading";

export default function SelectedBox() {
  const {
    Actors,
    Poster,
    Runtime,
    Released,
    Plot,
    Title,
    imdbID,
    Genre,
    imdbRating,
    Director,
    isLoading,
  } = useSelector((state: RootState) => state.selected);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="details">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header>
            <button
              className="btn-back"
              onClick={() => dispatch(onCloseMovie())}
            >
              &larr;
            </button>
            <img
              src={`${Poster}`}
              alt={`Poster of ${Title} movie`}
              className="header-img"
            />
            <div className="details-overview">
              <h2>{Title}</h2>
              <p>
                {Released} &bull; {Runtime}
              </p>
              <p>{Genre}</p>
              <span>⭐ {imdbRating} IMDB Rating</span>
            </div>
          </header>
          <section>
            <p>
              <em>{Plot}</em>
            </p>
            <p>Starring {Actors}</p>
            <p>Directed by {Director}</p>
          </section>
          <button
            onClick={() =>
              dispatch(
                onAddWatched({ Poster, Runtime, imdbID, imdbRating, Title }),
              )
            }
            className="btn-add"
          >
            Add to Watched
          </button>
        </>
      )}
    </div>
  );
}
