import React from 'react';
import ErrorImg from '../assets/error.png';
import Nav from '../components/NavBarComponent';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

export default function ErrorPage() {
  return <div>
<Nav/>
<div className='HomePage_container'>
    <div className='left_side'>
    <Link to='/'><Button variant="contained">Take me to somewhere safe.</Button></Link>


    </div>
    <div className='right_side'>
    <img src={ErrorImg}/>

    </div>
</div>

  </div>;
}


