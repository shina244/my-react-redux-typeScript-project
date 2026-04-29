import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./state/store";
import { updateEmail, updatePassword, onButtonClick } from "./state/loginSlice";
export default function Login() {
  const { email, password } = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();
  return (
    <div className="inputFunction">
      <div className="div1">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => dispatch(updateEmail(e.target.value))}
          className="inputEmail"
          required
        />
      </div>
      <div className="div2">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => dispatch(updatePassword(e.target.value))}
          className="inputPass"
          required
        />
      </div>
      <div className="div3">
        <button
          type="submit"
          onClick={() => dispatch(onButtonClick())}
          className="button"
        >
          Login
        </button>
      </div>
    </div>
  );
}
