import styled from 'styled-components'
export const Container = styled.body`
margin: 0px;
height:auto;
width:100%;
@media only screen and (max-width: 600px) {
   width:100%;
}
`;
export const Innercontainer = styled.div`

height:450px;
width:100%;
background-color:#eef2f5;
@media only screen and (max-width: 600px) {
   width: 100%;
   height: 300px;
}
`;
export const Images = styled.img`
height:400px;
width:100%;
@media only screen and (max-width: 600px) {      
    display: none;
    
}
`;
export const ImagesMobile = styled.img`
display: none;
@media only screen and (max-width: 600px) {      
    width:100%;
    height:225px;
    display:flex;
}
`;
export const ContentOnImage = styled.h1`
 position: absolute;
    top: 95px;
    left: 66px;
    font-size: 45.5px;
    color: white;
    width:690px;
    font-family:helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
    @media only screen and (max-width: 600px) {      
        position: absolute;
    top:70px;
    left: 24px;
    font-size: 23.5px;
    color: white;
    width:304px;
    font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
}



`;

export const Imagecaption = styled.h5`
font-size:16px;
font-weight: 650;
margin:13px 50px;
color:#005C9C;
 font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
 @media only screen and (max-width: 600px) {      
    margin: 13px 20px;     
}


`;
export const Symbol = styled.span`
color:rgb(184 193 199);
height:14px;
@media only screen and (max-width: 600px) {      
    margin-right:200px;     
}
`;
export const ContentBox = styled.div`
margin:50px 35px;
width:auto;
height:700px;
display:flex;
flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 600px) {      
    flex-direction:none;
    margin: 30px 20px;
    
}
`;
export const Content = styled.div`
width:65%;
height:700px;
@media only screen and (max-width: 600px) {      
    width:100%;
}
`;
export const Content1 = styled.p`
font-family:helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
font-size:15.5px;
font-weight: normal;
margin:0px;
padding:0px;
color: #141414;
line-height: 1.2em;
@media only screen and (max-width: 600px) {      
    font-size:14.5px;
}
`;

export const SideContent = styled.div`
width:30%;
height:700px;
padding-top:80px;
@media only screen and (max-width: 600px) {      
width:100%;
}
`;
export const Moreitems = styled.h6`
font-size:16.5px;
padding:0px;
margin:0px;
font-family:helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
color:#141414;
`;
export const Items = styled.p`
font-size:14px;
font-family:helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
color:#005C9C;
`;