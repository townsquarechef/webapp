import React from 'react';
import image from "./4kscenery.jpg";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Introduction = () => {
    return (
        <div className='herocontainer'>
            <img className="img" alt='heroimg' src={image}  />
            <div className="centered"><p>HELLO THERE!</p></div>
            <div className='centereddown'><KeyboardDoubleArrowDownIcon className='wobble' fontSize='40'></KeyboardDoubleArrowDownIcon></div>
        </div>
    )
}

export { Introduction }