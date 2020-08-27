import React from 'react';
import logo from './logo.svg';
import './App.css';//в той же папке где и я лежит докумеент
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


const App = () => {
  return (<div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile/>
    </div>
  );
}







export default App;

