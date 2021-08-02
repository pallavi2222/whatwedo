import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from './Box.style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom";
function Box10() {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/nsplsh_f8982786c58740a4928e42475c81c64e~mv2.jpg/v1/fill/w_271,h_181,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/nsplsh_f8982786c58740a4928e42475c81c64e~mv2.jpg/v1/fill/w_1287,h_411,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_f8982786c58740a4928e42475c81c64e~mv2.webp"}></Images>
                    <ContentOnImage>Rights, Policies and Social Protection</ContentOnImage>
                    <Imagecaption >Operations<Symbol><ArrowForwardIosIcon style={{height:'14px',width:'25px'}}/></Symbol>Rights, Policies and Social Protection</Imagecaption>
                </Innercontainer>
                <ContentBox>
                    <Content><Content1>Introducing Social protection calls by the global to develop the countries based not only on moral grounds and increasingly believe that it is an important instrument in economic growth. Social protection has the right to health care, education, a pension scheme, and financial support in the event of job losses, bad harvests, sickness, or invalidity. Social protection can contribute to economic growth indicates a shift in perceptions about the role that social protection policies play or can play in society. Promotive social protection measures seek to enhance incomes and capabilities with the longer-term aim of contributing to economic growth. Social protection can be part of a strategy of strengthening the most vulnerable groups and ensuring more inclusive growth.<br/><br/>Inclusive social-policy and equity can focus on accelerated growth, good governance, innovative budgeting, and effective implementation by enhancing social inclusion and the realization of basic rights for all. It aims to enable a social policy that addresses the various types of barriers, including caste, gender, or religion, which prevent children from freely accessing information, social services, and institutions. Inclusive social policy can strengthen policies and systems so that children and adolescents, particularly the most marginalized and vulnerable, progressively benefit from effective and inclusive social services and social protection systems.<br/><br/></Content1></Content>
                    <SideContent>
                        <Moreitems>More Items</Moreitems>
                        <hr></hr>
                        <Link to="/Box1" style={{textDecoration: 'none'}}> <Items>Agriculture and Livelihood Cooperatives</Items></Link>
                        <Link to="/Box2" style={{textDecoration: 'none'}}><Items>Culture, Heritage and Society</Items></Link>
                        <Link to="/Box3" style={{textDecoration: 'none'}}><Items>Economic Development and Standard of Living</Items></Link>
                        <Link to="/Box4" style={{textDecoration: 'none'}}><Items>Education, Employment and Skills</Items></Link>
                        <Link to="/Box5" style={{textDecoration: 'none'}}><Items>Entrepreneurship, Businesses and Partnerships</Items></Link>
                        <Link to="/Box6" style={{textDecoration: 'none'}}><Items>Equality & Distribution of Prosperity</Items></Link>
                        <Link to="/Box7" style={{textDecoration: 'none'}}><Items>Holistic Health and Nutrition</Items></Link>
                        <Link to="/Box8" style={{textDecoration: 'none'}}><Items>Inclusive Governance and Transparency</Items></Link>
                        <Link to="/Box9" style={{textDecoration: 'none'}}><Items>Research, Technology and Innovation</Items></Link>
                        <Link to="/" style={{textDecoration: 'none'}}><Items>Rights, Policies and Social Protection</Items></Link>
                        <Link to="/Box11" style={{textDecoration: 'none'}}><Items>Sustainability and Inclusion</Items></Link>
                    </SideContent>
                </ContentBox>
            </Container>
        </div>
    )
}

export default Box10
