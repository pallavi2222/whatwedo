import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from './Box.style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom";
function Box6() {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/nsplsh_ad0a072b3efa45d980ca78666a1e6491~mv2.jpg/v1/fill/w_271,h_181,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/nsplsh_ad0a072b3efa45d980ca78666a1e6491~mv2.jpg/v1/fill/w_1287,h_411,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_ad0a072b3efa45d980ca78666a1e6491~mv2.webp"}></Images>
                    <ContentOnImage>Equality, Growth & Distribution of Prosperity</ContentOnImage>
                    <Imagecaption >Operations<Symbol><ArrowForwardIosIcon style={{height:'14px',width:'25px'}}/></Symbol>Equality, Growth & Distribution of Prosperity</Imagecaption>
                </Innercontainer>
                <ContentBox>
                    <Content><Content1>Longstanding inequities in income, wealth, and opportunity have steadily worsened—and are now reaching unprecedented levels. While there is no single causal explanation, broad economic and political transformations, including the decline in union membership and the shift from an economy based on manufacturing to one based on services and retail, have certainly played a role. Promoting shared prosperity means that we will work to increase the incomes and welfare of the bottom 40 percent of society wherever they are, be it the poorest of nations or thriving middle- or high-income countries.<br/><br/>The shared prosperity goal reflects the fact that as developing countries grow their economies and lift millions out of poverty, they may also experience growing inequality. We now know that nations with a widening gap between those who can and cannot access opportunities in life have difficulty sustaining economic growth and social stability over time. Without a significant reduction in inequality, especially high rates of poverty and inequality, the world will not meet its goal to end extreme poverty. Inequality between all people in the world has declined, but within-country inequality is still higher today than, which means that an average person today is more likely to live in an economy with higher inequality. Inequality is not an inevitable consequence of economic growth. In fact, long-term growth and social stability are two important reasons to focus on equity. A stronger focus on faster inequality reduction, especially in countries with high inequality and large numbers of poor people, will further enhance the power of economic growth to translate into poverty reduction and better opportunities for all.<br/><br/></Content1></Content>
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
                        <Link to="/Box10" style={{textDecoration: 'none'}}><Items>Rights, Policies and Social Protection</Items></Link>
                        <Link to="/Box11" style={{textDecoration: 'none'}}><Items>Sustainability and Inclusion</Items></Link>
                    </SideContent>
                </ContentBox>
            </Container>
        </div>
    )
}

export default Box6
