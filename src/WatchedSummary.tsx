import { useSelector } from "react-redux";
import type { RootState } from "./state/store";

export default function WatchedSummary() {
  const { watched } = useSelector((state: RootState) => state.watched);
  const avgImdbRatingTotal = watched.reduce(
    (acc, items) => acc + Number(items.imdbRating),
    0,
  );
  const avgImdbRating = avgImdbRatingTotal / watched.length;

  const avgRuntimeTotal = watched.reduce(
    (acc, item) => acc + Number(item.Runtime.split(" ")[0]),
    0,
  );
  const avgRuntime = avgRuntimeTotal / watched.length;
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched?.length ?? 0} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating ? avgImdbRating.toFixed(2) : 0}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime ? avgRuntime : 0} min</span>
        </p>
      </div>
    </div>
  );
}
