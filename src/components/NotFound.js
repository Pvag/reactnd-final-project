import { NavLink } from "react-router-dom";

export default function NotFound () {
  return(
    <div>
      <NavLink to="/" exact activeClassName="active">
        Login Here
      </NavLink>
      <p>NOTHING FOR YOU HERE, DARLING</p>
    </div>
  );
}