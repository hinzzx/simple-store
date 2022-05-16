import styled from "styled-components";
import { Link } from "react-router-dom";

// Main Container // Content wrapper
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: calc(100vh - 60px); // because of the navbar
    background-color: #f5f5f5; 
    margin-top: 60px; // because of the navbar
    overflow: auto;

/* Little parallax effect */
 
    & article {
        height: 100%;
        width: 100%;
        flex-shrink: 0;
        object-fit: cover;
        position: sticky;
        top: 0;
    }
`

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    border-radius: 10px;
    margin-bottom: 20px;
    overflow: auto;
    `   

// Header

    export const Header1 = styled.h1`
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
        `

