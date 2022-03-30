import { loginURL } from "../utils/constant";
import { connect } from 'react-redux';
import { emailChange, passwordChange, clearInfo, login } from '../store/action';
import { useEffect } from "react";
import { setToken } from '../utils/storage';
import { useNavigate } from "react-router-dom";

function Login(props) {

  let navigate = useNavigate();

  useEffect(() => {
    clearUserInfo();
  }, [])

  function clearUserInfo(){
    props.dispatch(clearInfo());
  }

  function loginUser(){
    let { email, password } = props.user;
    return fetch(loginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    }).then(res => res.json()).then(data => data);
  }

  async function handleSubmit(event){
    event.preventDefault();
    let newUser = await loginUser();
    setToken(newUser.user.token);
    props.dispatch(login(newUser.user.email, newUser.user.userId));
    clearUserInfo();
    navigate("/", { replace: true });
  }

  function handleChange({ target }){
    switch (target.name){
      case "email":
        return props.dispatch(emailChange(target.value));
      case "password":
        return props.dispatch(passwordChange(target.value)); 
      default:
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <fieldset>
        <input
          type="email"
          name="email"
          className="form-control mb-1"
          placeholder="Email Address"
          value={props.user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="form-control mb-1"
          placeholder="Enter Password"
          value={props.user.password}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <input className="btn form-btn text-xs text-light" type="submit" value="Login" />
      </fieldset>
    </form>
  );
}

function mapStateToProps(state){
  return {
    user: state.loginReducer,
    newUser: state.authenticationReducer
  }
}

export default connect(mapStateToProps)(Login);