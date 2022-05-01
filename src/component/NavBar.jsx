import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.nav`
    height: 60px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    box-shadow: 0px 0px 10px #ccc;
    `

const MenuLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin-left: 20px;
    margin-right: 20px;
    font-weight: bold;`

const navBar = () => {
  return (
    <Container>
        <MenuLink>
        <NavLink to="/" style={{textDecoration: "none", color: "black", marginRight:"20px"}}>Villes</NavLink>
        <NavLink to="/map" style={{textDecoration: "none", color: "black"}}>Map</NavLink>
        </MenuLink>
    </Container>
  )
}

export default navBar