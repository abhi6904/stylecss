import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaBars, FaTimesCircle  } from "react-icons/fa";
import { useState } from 'react';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);



  const Nav = styled.nav`
  .navbar-list{
    display: flex;
    gap:4.8rem; 

    li{
      list-style: none;
     
      .navbar-link{
        text-decoration: none;

        &:link, &:visited{
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        
        &:hover, &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }
  .mobile-navbar-btn {
    display: none;

    .close-outline {
      display: none;
      }
  }

  .mobile-navbar-btn[name="close-outline"] {
    display: none;
  }


  @media (max-width: ${({theme})=>theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
      border: ${({theme})=>theme.colors.black};

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({theme})=>theme.colors.black};
      }
    }
    // hide the orignal navbar list
    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      // show menu middle
      display: flex;
      justify-content: center:
      align-content: center;
      flex-direction: column;
      text-align: center;

      // show menu icon right side
      transform: translateX(100%);

      visibility: hidden;
      opacity: 0;

      li {
        .navbar-link{
          text-decoration: none;
  
          &:link, &:visited{
            font-size: 4.2rem;
          }
          
          &:hover, &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 3%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999 ;
    }

    .active .close-outline {
      display: inline-block;
    }

    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
    }
  }
  `;
  return (
    <Nav>
      <div className={openMenu ?"menuIcon active" : "menuIcon" }>
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" onClick={()=>setOpenMenu(false)}  to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={()=>setOpenMenu(false)}  to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={()=>setOpenMenu(false)}  to='/contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={()=>setOpenMenu(false)}  to='/services'>Services</NavLink>
          </li>
        </ul>
        {/* nav icon */}
        <div className="mobile-navbar-btn">
        <FaBars name="menu-outline" className='mobile-nav-icon' onClick={()=>setOpenMenu(true)} />
        <FaTimesCircle name="close-outline" className='close-outline mobile-nav-icon' onClick={()=>setOpenMenu(false)} />
        </div>
      </div>
    </Nav>
  )
}
