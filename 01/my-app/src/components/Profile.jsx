import React from 'react';
import s from './Profile.module.css';




const Profile = () => {
  return <div className={s.content}>
    <div >
      <img className='mainFoto' src='https://get.wallhere.com/photo/boat-sunset-water-reflection-sky-rainbows-cloud-atmospheric-phenomenon-228595.jpg' />
    </div>
    <article className='avadescript'>
      <img src='https://avatars.mds.yandex.net/get-pdb/2796483/3c232efb-36f8-40b9-9aca-ee93070d3d15/s1200?webp=false' />
    </article>
  </div>
}


export default Profile;
