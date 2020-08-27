import React from 'react';
import s from './Navbar.module.css';

const Navbar = () =>{
return <nav className={s.nav}>
 <div>Profile</div>
 <div>News</div>
 <div>Settings</div>
 <div>Music</div>
 <div>Masseges</div>
</nav>
}


export default Navbar;
