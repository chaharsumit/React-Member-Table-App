import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
import Modal from './Modal';
import { useEffect } from 'react';
import { getToken } from '../utils/storage';
import { userURL, membersURL } from '../utils/constant';
import { connect } from 'react-redux';
import { setLoggedUser, fillMembers } from '../store/action';


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
    }).then(res => res.json()).then(({user}) => props.dispatch(setLoggedUser(user))).catch(err => alert(err));
  }

  return (
    <>
      <Header />
      {
        props.modal.isOpen ? <Modal /> : ""
      }
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
    currUser: state.authenticationReducer,
    modal: state.modalReducer
  }
}

export default connect(mapStateToProps)(App);