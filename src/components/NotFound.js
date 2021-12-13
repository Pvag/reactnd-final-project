import { NavLink } from "react-router-dom";

export default function NotFound (props) {
  return(
    <div className="not-found-page">
      <h3>The <em>Would you Rather Game</em> website</h3>
      { props.authedUser ? '' :
        <NavLink to="/" exact activeClassName="active">
          Login Here
        </NavLink> }
      <img src="/cat_box.jpeg" alt="a cat inside a box"></img>
      <p>NOTHING FOR YOU HERE, DARLING</p>
    </div>
  );
}