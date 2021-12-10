import { Component } from "react";
import { connect } from "react-redux";
import Nav from './Nav';
import LoginItems from "./LoginItems";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Nav />
        <LoginItems />
      </div>
    )
  }
}

function mapStateToProps() {
 return {
 }
}

export default connect(mapStateToProps)(Header);