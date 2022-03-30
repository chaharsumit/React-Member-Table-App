import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
import { useEffect } from 'react';
import { getToken } from '../utils/storage';
import { userURL } from '../utils/constant';
import { connect } from 'react-redux';
import { setLoggedUser } from '../store/action';


function App(props){

  useEffect(() => {
    if(getToken()){
      setCurrentUser();
    }
  }, []);

  function setCurrentUser(){
    fetch(userURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${getToken()}`
      },
    }).then(res => res.json()).then(({user}) => props.dispatch(setLoggedUser(user)));
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />

        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

function mapStateToProps(state){
  return {
    currUser: state.authenticationReducer
  }
}

export default connect(mapStateToProps)(App);


/*

useEffect(() => {
    if(getToken()){
      console.log('puta');
      async function setCurrentUser(){
        let currUser = await fetchCurrUser();
        console.log(currUser); 
      }
      setCurrentUser();
    }
  }, []);

  function fetchCurrUser(){
    return fetch(userURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${getToken()}`
      },
    }).then(res => res.json()).then(data => data);
  }

*/