import { connect } from 'react-redux';
import { emailChange, signUp, passwordChange, clearInfo } from '../store/action';
import { useEffect } from 'react';
import { registerURL } from "../utils/constant";
import { setToken } from '../utils/storage';
import { useNavigate } from "react-router-dom";

function Signup(props) {

  let navigate = useNavigate();

  useEffect(() => {
    clearUserInfo();
  }, [])

  function clearUserInfo(){
    props.dispatch(clearInfo());
  }

  function registerUser(){
    let { email, password } = props.user;
    return fetch(registerURL, {
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
    }).then(res => res.json()).then(data => data).catch(err => alert(err));
  }

  async function handleSubmit(event){
    event.preventDefault();
    let newUser = await registerUser();
    setToken(newUser.user.token);
    props.dispatch(signUp(newUser.user.email, newUser.user.userId));
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
    <form  onSubmit={handleSubmit} className="form">
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
        <input className="btn form-btn text-xs text-light" type="submit" value="Signup" />
      </fieldset>
    </form>
  );
}

function mapStateToProps(state){
  return {
    user: state.formInputReducer
  }
}

export default connect(mapStateToProps)(Signup);