import styled from "styled-components";

export const MainFooter = styled.footer`
text-align: center;
padding: 0.675rem;
color: white;
background-color: #00bf8b;
width: 100%;
z-index: 200;

& p {
    font-size: 83%;
}

& a {
    text-decoration: none;
    color: white;
}

& a:hover {
    color: white;
    text-decoration: underline;
    filter: brightness(110%);
}
`
