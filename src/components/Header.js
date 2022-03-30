import { connect } from "react-redux";
import { NavLink } from "react-router-dom"

function Header(props){
  console.log(props.filter);
  return (
    <header className="header">
      <div className="container flex justify-space-between align-center">
        <a className="brand-name text-xlg text-dark bold"><strong>Members Table App</strong></a>
        <nav className="nav">
          <ul className="nav-menu flex justify-space-between col-gap-2">
            <li className="nav-menu-item">
              <NavLink to="/" className="text-dark bold">
                Home
              </NavLink>
            </li>
            <li className="nav-menu-item">
              <NavLink to="/login" className="btn btn-nav text-light">
                Login
              </NavLink>
            </li>
            <li className="nav-menu-item">
              <NavLink to="/signup" className="btn btn-nav text-light"> 
                Sign up
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function mapStateToProps(state){
  console.log(state);
  return {
    allMembers: state.memberReducer,
    filter: state.filterReducer
  }
}

export default connect(mapStateToProps)(Header);