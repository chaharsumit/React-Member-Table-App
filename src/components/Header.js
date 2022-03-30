import { connect } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { logout } from '../store/action';

function Header(props){

  const navigate = useNavigate();

  function handleLogout(){
    localStorage.removeItem("token");
    props.dispatch(logout());
    navigate("/", { replace: true });
  }

  let { email } = props.currUser;
  return (
    <header className="header">
      <div className="container flex justify-space-between align-center">
        <a className="brand-name text-xlg text-dark bold"><strong>Members Table App</strong></a>
        <nav className="nav">
          <ul className="nav-menu flex justify-space-between align-center col-gap-2">
            { email ? authenticatedUserNavbar(email, handleLogout) : unAuthenticatedUserNavbar() }
          </ul>
        </nav>
      </div>
    </header>
  )
}

function authenticatedUserNavbar(email, handleLogout){
  return (
    <>
      <li className="nav-menu-item text-dark">
        {email.toUpperCase()}
      </li>
      <li onClick={handleLogout} className="nav-menu-item">
        <button className="btn btn-nav text-light">Logout</button>
      </li>
    </>
  )
}


function unAuthenticatedUserNavbar(){
  return (
    <>
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
    </>
  )
}

function mapStateToProps(state){
  return {
    currUser: state.authenticationReducer
  }
}

export default connect(mapStateToProps)(Header);