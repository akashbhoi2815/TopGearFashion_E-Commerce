import React from "react";
import styled from "styled-components";
const NavbarImg = () =>{
    return (
        <Container>
        <div className="nav">
            <img id="nav-img" src="/TGF.jpeg" alt="" />
            <p className="text">TopGearFashion</p>
        </div>
        </Container>
    )
}
export default NavbarImg;
const Container = styled.div`
.nav{
    height:70px;
    width:100%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 25px
}
#nav-img{
    max-width: 40vw;
    width: 60px;
    height: 55px;
    border-radius: 50%;
    margin-right: 10px;
}
.text{
    margin-left: 10px
}
`