import React from "react";
import Button from '@mui/material/Button';
//import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
//import ShoppingCartOutlinedIcon from '@mui/material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { blueGrey } from '@mui/material/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdOutlineShoppingCart } from "react-icons/md";
import './CardWidget.css'



const CardWidget = () =>{
    
      return (
        <MdOutlineShoppingCart className="nav-link active CardWidget"  />
        
      );
    }
export default CardWidget

