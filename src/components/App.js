import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
import { useEffect } from 'react';
import { getToken } from '../utils/storage';
import { userURL } from '../utils/constant';


export default function App(){

  useEffect(() => {
    if(getToken()){
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