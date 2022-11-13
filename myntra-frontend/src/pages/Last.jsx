import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const Last = () => {
    const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault()
        navigate("/")
    }
    return (
        <Container>
        <div className="lastdiv">
            <div>
                <img style={{height:"200px",margin:"auto"}} src="https://www.poornima.edu.in/wp-content/uploads/2020/08/greentick.jpg" alt="Lastpage" />
            </div>
            <h2 style={{fontSize:"30px",fontWeight:"bold"}}>Your Order Is Complete!</h2>
            <p style={{fontSize:"15px",marginTop:"20px",marginBottom:"20px"}}>You will be recieving a confirmation email on your registered e-mail regarding your trip details.</p>
            <p style={{fontWeight:"bold"}}>Thank Your For Choosing Top Gear Fashion.</p>
            <button id="lastbutton" onClick={handleClick}>Continue Shoping</button>
        </div>
        </Container>
    )
}

export default Last;
const Container = styled.div`
#lastbutton{
    border: 2px solid #74c4e5;
    background-color: #cce1f3;
    border-radius: 20px;
    margin: auto;
    margin: 30px 0px;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px 35px;
  }
  .lastdiv{
    height: auto;
    width: 55%;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    margin: auto;
    margin-top: 50px;
    text-align: center;
    border-radius: 10px;
  }

  @media only screen and (max-width: 700px) {
    .lastdiv{
        width: 80%;
    }
    #lastbutton{
        padding: 7px 20px;
    }
  }
  
`
