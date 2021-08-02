import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from './Box.style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom";
import Box2 from './Box2'
function Box1() {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/11062b_ab01ac081db248c991e1c4ae79d90355~mv2.jpg/v1/fill/w_282,h_180,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/11062b_ab01ac081db248c991e1c4ae79d90355~mv2.jpg/v1/fill/w_1287,h_411,al_c,q_85,usm_0.66_1.00_0.01/11062b_ab01ac081db248c991e1c4ae79d90355~mv2.webp"}></Images>
                    <ContentOnImage>Agriculture and Livelihood Cooperatives</ContentOnImage>
                    <Imagecaption >Operations<Symbol><ArrowForwardIosIcon style={{height:'14px',width:'25px'}}/></Symbol>Agriculture and Livelihood Cooperatives</Imagecaption>
                </Innercontainer>
                <ContentBox>
                    <Content><Content1>Agriculture cooperatives is an autonomous association of people to meet their common social, cultural and economic needs and it occupies a key position in agricultural development with support in resource and input use, harvesting of water resources, marketing channels, storage facilities, distribution channels, value addition, market information, and a regular monitoring network system and also engaged with economic activities.<br/><br/>Agriculture is important for increasing the rural standards of living. Thus, it is an essential component of any inclusive growth strategy that aims to reduce inequality and regional disparities. Growth in agricultural productivity and output is a necessary component of food security strategies. It helps to reduce import dependence and increases the country’s ability to deal with large swings in international food prices and their impact on the poor and vulnerable. It makes a matching technique and evaluates the livelihood development and poverty reduction which impacts on agriculture cooperatives.<br/><br/>Agriculture Cooperatives improved the livelihood of farmers through impacting better income, more savings, and reduced costs which makes deepening and needs further support and promotion.</Content1></Content>
                    <SideContent>
                        <Moreitems>More Items</Moreitems>
                        <hr></hr>
                        <Link to="/" style={{textDecoration: 'none'}}> <Items>Agriculture and Livelihood Cooperatives</Items></Link>
                        <Link to="/Box2" style={{textDecoration: 'none'}}><Items>Culture, Heritage and Society</Items></Link>
                        <Link to="/Box3" style={{textDecoration: 'none'}}><Items>Economic Development and Standard of Living</Items></Link>
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

export default Box1
