import type { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedApiAsync } from "./state/selectedSlice";
import MovieBox from "./MovieBox";
import { type AppDispatch, type RootState } from "./state/store";
import { type MovieState } from "./state/omdbSlice";
import SelectedBox from "./SelectedBox";
import WatchedBox from "./WatchedBox";
import { onSelectMovie } from "./state/watchedSlice";
import WatchedSummary from "./WatchedSummary";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
interface Main {
  children: ReactElement[];
}
interface Box {
  children: ReactElement;
}
interface Boxes {
  children: ReactElement[];
}
export default function MainSection() {
  const watched = useSelector((state: RootState) => state.watched);
  const { isLoading, isError } = useSelector(
    (state: RootState) => state.movies,
  );
  return (
    <Main>
      <Boxes>
        {isLoading && <Loading />}
        {!isError && !isLoading && <Movielist />}
        {isError && <ErrorMessage />}
      </Boxes>
      <Box>
        {watched.selectedID ? (
          <SelectedBox />
        ) : (
          <>
            <WatchedSummary />
            <WatchedBox />
          </>
        )}
      </Box>
    </Main>
  );
}

function Main({ children }: Main) {
  return <main className="main">{children}</main>;
}

function Boxes({ children }: Boxes) {
  return <div className="box">{children}</div>;
}

function Box({ children }: Box) {
  return <div className="box">{children}</div>;
}

function Movielist() {
  const { data } = useSelector((state: RootState) => state.movies);
  //   const watched = useSelector((state: RootState) => state.watched);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <ul className="list list-movies">
      {data.map((item: MovieState) => {
        return (
          <MovieBox
            item={item}
            key={item.imdbID}
            onClick={() => {
              dispatch(selectedApiAsync(`${item.imdbID}`));
              dispatch(onSelectMovie());
            }}
          />
        );
      })}
    </ul>
  );
}
