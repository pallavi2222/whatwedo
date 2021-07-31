import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from './Box.style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom";
function Box7() {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                <ImagesMobile src={"https://static.wixstatic.com/media/cc959ab171974ae3826592a76e5815fa.jpg/v1/fill/w_320,h_180,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></ImagesMobile>  
            <Images src={"https://static.wixstatic.com/media/cc959ab171974ae3826592a76e5815fa.jpg/v1/fill/w_1287,h_411,al_c,q_85,usm_0.66_1.00_0.01/cc959ab171974ae3826592a76e5815fa.webp"}></Images>
            <ContentOnImage>
            Holistic Health and Nutrition</ContentOnImage>
            
                <Imagecaption >Operations<Symbol><ArrowForwardIosIcon style={{height:'14px',width:'25px'}}/></Symbol>Holistic Health and Nutrition</Imagecaption>
                </Innercontainer>
                <ContentBox>
                    <Content><Content1>The philosophy of holistic nutrition is that one’s health is an expression of the complex interplay between the physical and chemical, mental, and emotional, as well as spiritual and environmental aspects of one’s life and being. As such, professionals who are trained in holistic nutrition approach health and healing from a whole-person perspective. Using nutritional education as a primary tool, holistic nutrition professionals emphasize the building of health by approaching each person as a
unique individual. This requires fully engaging the individual in their health recovery process and honoring their innate wisdom by working in an empowering and cooperative manner to chart a course to optimal health.
<br/><br/>

Nutritional deficiencies, poor environmental conditions, and inadequate educational infrastructure hamper children's learning, which is critical for the future supply of skilled labor and hence for economic development. There is a need to assign priorities for resource allocation among nutritional, health-care, and educational policies. Improved sanitation and vaccines against infections will prevent the loss of vital nutrients. Investments in educational infrastructure, including adult literacy
programs, are beneficial for children's cognitive development. Nutrition and health policies based on long-term considerations will lead to a well-trained labor force enabling non-resource-rich developing countries to escape from poverty traps.

<br/><br/></Content1></Content>
                    <SideContent>
                        <Moreitems>More Items</Moreitems>
                        <hr></hr>
                        <Link to="/Box1" style={{textDecoration: 'none'}}> <Items>Agriculture and Livelihood Cooperatives</Items></Link>
                        <Link to="/Box2" style={{textDecoration: 'none'}}><Items>Culture, Heritage and Society</Items></Link>
                        <Link to="/Box3" style={{textDecoration: 'none'}}><Items>Economic Development and Standard of Living</Items></Link>
                        <Link to="/Box4" style={{textDecoration: 'none'}}><Items>Education, Employment and Skills</Items></Link>
                        <Link to="/Box5" style={{textDecoration: 'none'}}><Items>Entrepreneurship, Businesses and Partnerships</Items></Link>
                        <Link to="/Box6" style={{textDecoration: 'none'}}><Items>Equality & Distribution of Prosperity</Items></Link>
                        <Link to="/" style={{textDecoration: 'none'}}><Items>Holistic Health and Nutrition</Items></Link>
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

export default Box7
