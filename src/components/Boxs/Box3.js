import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from './Box.style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom";
function Box3() {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/nsplsh_6d704e37786a4b515f4e73~mv2.jpg/v1/fill/w_271,h_203,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/nsplsh_6d704e37786a4b515f4e73~mv2.jpg/v1/fill/w_1287,h_411,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_6d704e37786a4b515f4e73~mv2.webp"}></Images>
                    <ContentOnImage>Economic Development and Standard of Living</ContentOnImage>
                    <Imagecaption >Operations<Symbol><ArrowForwardIosIcon style={{height:'14px',width:'25px'}}/></Symbol>Economic Development and Standard of Living</Imagecaption>
                </Innercontainer>
                <ContentBox>
                    <Content><Content1>Economic growth is the rate of utilization of the factors of production capital and labor -and the efficiency of their use and increased use of capital relative to labor and by high productivity growth. Growth can generate virtuous circles of prosperity and opportunity. Efficient markets and macroeconomic stability are essential for Economic growth.Economic growth enables the possibility to deal with many serious problems of poverty, homelessness, and lack of basic amenities.<br/><br/>Broadly speaking, there are two main sources of economic growth: growth in the size of the workforce and growth in the productivity (output per hour worked) of that workforce. Either can increase the overall size of the economy but only strong productivity growth can increase per capita GDP and income. Productivity growth allows people to achieve a higher material standard of living without having to work more hours or to enjoy the same material standard of living while spending fewer hours in the paid labor force.<br/><br/>The higher levels of employment and a longer run of productivity growth will be needed to achieve higher standards of living.A coordinated initiative is required to transform inclusive growth from aspiration into action- into a new global growth agenda that places people and living standards at the centre of economic policy and economic integration.</Content1></Content>
                    <SideContent>
                        <Moreitems>More Items</Moreitems>
                        <hr></hr>
                        <Link to="/Box1" style={{textDecoration: 'none'}}> <Items>Agriculture and Livelihood Cooperatives</Items></Link>
                        <Link to="/Box2" style={{textDecoration: 'none'}}><Items>Culture, Heritage and Society</Items></Link>
                        <Link to="/" style={{textDecoration: 'none'}}><Items>Economic Development and Standard of Living</Items></Link>
                        <Link to="/Box4" style={{textDecoration: 'none'}}><Items>Education, Employment and Skills</Items></Link>
                        <Link to="/Box5" style={{textDecoration: 'none'}}><Items>Entrepreneurship, Businesses and Partnerships</Items></Link>
                        <Link to="/Box6" style={{textDecoration: 'none'}}><Items>Equality & Distribution of Prosperity</Items></Link>
                        <Link to="/Box7" style={{textDecoration: 'none'}}><Items>Holistic Health and Nutrition</Items></Link>
                        <Link to="/Box8" style={{textDecoration: 'none'}}><Items>Inclusive Governance and Transparency</Items></Link>
                        <Link to="/Box9" style={{textDecoration: 'none'}}><Items>Research, Technology and Innovation</Items></Link>
                        <Link to="/Box10" style={{textDecoration: 'none'}}><Items>Rights, Policies and Social Protection</Items></Link>
                        <Link to="/Box11" style={{textDecoration: 'none'}}><Items>Sustainability and Inclusion</Items></Link>
                    </SideContent>
                </ContentBox>
            </Container>
        </div>
    )
}

export default Box3
