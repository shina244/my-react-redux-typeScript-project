import Header from "./Header";
import MainSection from "./MainSection";
import Login from "./Login";
import { useSelector } from "react-redux";
import type { RootState } from "./state/store";
export default function App() {
  const { isLoggedIn } = useSelector((state: RootState) => state.login);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <Header />
          <MainSection />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
