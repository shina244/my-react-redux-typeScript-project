import { useSelector } from "react-redux";
import type { RootState } from "./state/store";
import type { WatchedMovie } from "./state/watchedSlice";

import Watched from "./Watched";
export default function WatchedBox() {
  const { watched } = useSelector((state: RootState) => state.watched);

  return (
    <ul className="list">
      {watched.map((item: WatchedMovie) => {
        return <Watched item={item} key={item.imdbID} />;
      })}
    </ul>
  );
}
