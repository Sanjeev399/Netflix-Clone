import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

    useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
        if(userAuth){
          //Logged In
          dispatch(login({
           uid: userAuth.uid,
           email: userAuth.email,
          }));
        }
        else{
          // Logged Out
          dispatch(logout())
        }
      });
      return unsubscribe;
    },[dispatch]);

  return (
    <div className="app">
      {/* <HomeScreen/> */}
      <Router>
        {!user ? (<LoginScreen />) : (
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            {/* <Route path='/test' element={<h1>hello</h1>} /> */}
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;