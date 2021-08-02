import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from './Box.style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom";
function Box8() {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/36fd244f102744f4acc109fb237e24f2.jpg/v1/fill/w_271,h_180,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/36fd244f102744f4acc109fb237e24f2.jpg/v1/fill/w_1287,h_411,al_c,q_85,usm_0.66_1.00_0.01/36fd244f102744f4acc109fb237e24f2.webp"}></Images>
                    <ContentOnImage>Inclusive Governance and Transparency</ContentOnImage>
                    <Imagecaption >Operations<Symbol><ArrowForwardIosIcon style={{height:'14px',width:'25px'}}/></Symbol>Inclusive Governance and Transparency</Imagecaption>
                </Innercontainer>
                <ContentBox>
                    <Content><Content1>Transparency is relatively functioning an Organization While inclusion has been an underlying theme, transparency was assumed, but not enshrined. The biggest step to change this has been the Right to Information Act which enabled monitoring and accountability for every citizen as a right. But apart from this law, several other efforts at improving transparency have been initiated at several levels of the Government. The efforts of inclusion and transparency lead to improved governance. Effective governance needs a foundation for simpler processes and the deployment of technology. The deployment of technology has improved the quality of some services. Changes will be made to improve governance capability.<br/><br/> There are indeed several initiatives that have been taken to promote ‘transparency for inclusive governance.’ While these are all necessary stepping stones for better governance, there is more than one can be done and at a faster pace. Innovation and as can be expected, an unevenness to address challenges. It is becoming increasingly evident that technology is an important enabler for effectingGovernance. Also, the power of the rapidly growing traditional and social media has transformed how citizens access and share information. The growth in the number of young, educated people in India augurs well for promoting a new set of ideas that might have appeared impossible or inconceivable even a few years ago.<br/><br/>Stakeholders across the spectrum have an important role to play in ensuring that the benefits of better governance reach all citizens. The full potential of these and other measures of the Government can be realized only with the active engagement of all stakeholders. The opportunities that are presenting, there is no doubt that we are at the cusp of seeing a new age of greater transparency for inclusive governance that will benefit all citizens.</Content1></Content>
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
                        <Link to="/" style={{textDecoration: 'none'}}><Items>Inclusive Governance and Transparency</Items></Link>
                        <Link to="/Box9" style={{textDecoration: 'none'}}><Items>Research, Technology and Innovation</Items></Link>
                        <Link to="/Box10" style={{textDecoration: 'none'}}><Items>Rights, Policies and Social Protection</Items></Link>
                        <Link to="/Box11" style={{textDecoration: 'none'}}><Items>Sustainability and Inclusion</Items></Link>
                    </SideContent>
                </ContentBox>
            </Container>
        </div>
    )
}

export default Box8
