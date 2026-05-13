import type { ReactElement } from "react";
import { useRef, useState, useEffect } from "react";
import { apiAsync } from "./state/omdbSlice";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "./state/store";
import { FiLogOut } from "react-icons/fi";
import { onLogOut } from "./state/loginSlice";

interface NavBar {
  children: ReactElement[];
}

export default function Header() {
  return (
    <NavBar>
      <Logo />
      <InputBar />
      <NumResults />
      <DetailsBar />
    </NavBar>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function NavBar({ children }: NavBar) {
  return <nav className="nav-bar">{children}</nav>;
}

function InputBar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <input
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
        dispatch(apiAsync(e.target.value));
      }}
      placeholder="Search..."
      className="search"
      ref={inputRef}
    />
  );
}

function NumResults() {
  const { data } = useSelector((state: RootState) => state.movies);
  return (
    <p className="num-results">
      Found <strong>{data?.length}</strong> results
    </p>
  );
}

function DetailsBar() {
  const { email } = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();
  return (
    <>
      <p className="details-bar3">
        {email}{" "}
        <span
          className="log-out"
          // type="button"
          onClick={() => dispatch(onLogOut())}
        >
          <FiLogOut size={22} />
        </span>
      </p>
    </>
  );
}
