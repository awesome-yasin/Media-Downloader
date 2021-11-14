import { useState } from "react";
import styled from "styled-components";
import { device } from "./device";
import Loader from 'react-loader-spinner';

function App() {
  const [WriteUrl, SetWriteUrl]= useState("");
  const [loaderPop, setLoaderPop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const downloadInstagramAnyVideo = (e) => {
  e.preventDefault();
    if(WriteUrl){
        setLoaderPop(true);
  const req = { 
    url:WriteUrl
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req)
  };

  fetch('/api/', requestOptions)
  .then(response => response.json())
  .then(json => {
    if(json.type === "Video"){
      window.open(json.file, "_blank");
    }
    if(json.type === "Image"){
      window.open(json.file, "_blank");
    }
    setLoaderPop(false);
  });
    }
};

const handleKeypress = e => {

  if (e.code === "Enter") {
    downloadInstagramAnyVideo(e);
  }
};



  return (
  <>
  
  <Container >

<Nav>
      <Logo href="">
        Instait<span style={{fontSize:'12px'}}>&nbsp;&nbsp;&nbsp;-By Yasin</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
       
        <MenuLink href="https://fbit.herokuapp.com/">Facebook Downloader</MenuLink>
        <MenuLink href="https://utit.herokuapp.com/">Youtube Downloader</MenuLink>
        <MenuLink href="https://downitt.herokuapp.com/">DailyMotion/Adult site Downloader</MenuLink>
        <MenuLink href="https://scdit.herokuapp.com/">Soundcloud Downloader</MenuLink>
    
      </Menu>
    </Nav>


    <Section>

    <Title>Instagram Media Downloader</Title>
    <p>Note: This webapp will not work Deployed Download the Source code and Run on your Localhost it will work</p>
    {loaderPop?
      
      <Loader type="Hearts" color="#ff0fa7" height="100" width="100" />:    <Actionwidget>
    
    <Input
    placeholder="Enter the Instagram URL Here"
    onChange={e=>SetWriteUrl(e.target.value)}
    onKeyPress={handleKeypress}
    />

    <Button 
    onClick={downloadInstagramAnyVideo} 
    
    >Download Now</Button>

  </Actionwidget>}
    </Section>


    </Container>
    <Head>Instait features</Head>
    <CardWrapper>
       
    <Image src={`https://igram.io/static/img/app-instagram-feed.jpg`} />
    <Content>
    <Heading>Photos Downloader</Heading>
    <Para>
    Instagram photo downloader provided by Instait is a great tool for
     saving images from Instagram posts. With Instait you can download a single posts
      image as well as download multiple Instagram photos.</Para>
    </Content>
    
  </CardWrapper>
  <CardWrapper>
    <Image src={`https://igram.io/static/img/instagram-video.jpg`} />
    <Content>
    <Heading>Videos Downloader</Heading>
    <Para>
    Instait is created to enable you to download IG
     videos for any purpose you want. Instait supports video downloading for
      singular video and multiple video from carousels.</Para>
    </Content>
    
  </CardWrapper>
  <CardWrapper>
    <Image src={`https://igram.io/static/img/applications-instagram-igtv.jpg`} />
    <Content>
    <Heading>IGTV Downloader</Heading>
    <Para>
    IGTV is a long video type, in case you can’t watch it now, you can download IGTV videos
     to your device, to be sure that you can return to watching later, without need to be online
      or in case the IGTV can be deleted..</Para>
    </Content>
    
  </CardWrapper>
  <CardWrapper>
    <Image src={`https://igram.io/static/img/instagram-reels.jpg`} />
    <Content>
    <Heading>Reel Downloader</Heading>
    <Para>
    REEL is a new video format that clone the principle of TikTok.
     Download Instagram REEL videos with help of Instait. Our REEL downloader can help you to save your favorite Reels videos.</Para>
    </Content>
    
  </CardWrapper>

  
  <Head>How to download ?</Head>
  

  <Mains>
    <Cards>
    <CardItem>
      <Card>
<CardImage>
<Images src={`https://igram.io/static/img/instagram-post-copy-link.jpg`}></Images>
</CardImage>
<CardContent>
<CardTitle>
Copy the URL
</CardTitle>
<CardText>copy the URL of the photo, video, carousel or IGTV.</CardText>
</CardContent>
</Card>
    </CardItem>
    <CardItem>
      <Card>
<CardImage>
<Images src={`https://igram.io/static/img/instagram-link-insert.jpg`}></Images>
</CardImage>
<CardContent>
<CardTitle>
Paste the link
</CardTitle>
<CardText>Paste link into the Instait field and click the Download button</CardText>
</CardContent>
</Card>
    </CardItem>
    <CardItem>
      <Card>
<CardImage>
<Images src={`https://igram.io/static/img/results.jpg`}></Images>
</CardImage>
<CardContent>
<CardTitle>
Download Successful
</CardTitle>
<CardText>Instait will sync your URL and creates a downloadable link</CardText>
</CardContent>
</Card>
    </CardItem>
    </Cards>
  </Mains>
   
   <Footer>
     <Wrapper>
     <Small>&copy;2021 <strong>Instait By Yasin</strong>, Made with ❤️</Small>
     <FooterNav>
    <FooterLink href="https://github.com/awesome-yasin">Github Link</FooterLink>
    <FooterLink href="https://www.instagram.com/yasinn.0x/">Instagram Link</FooterLink>
    <FooterLink href="https://github.com/awesome-yasin">Other Awesome Projects</FooterLink>
     </FooterNav>
     </Wrapper>
   </Footer>

</>
    );
}

export default App;


const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #f26896;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;



const Container = styled.div`
background-color:#0d1117;
width:100%;
height:100vh;
display:grid;
place-items:center;
background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  

`;

const Section = styled.div`
display:flex;
flex-direction: column;
padding:10px;
text-align:center;
`;

const Actionwidget = styled.div`
display:flex;
padding:10px;

border-radius:5px;

text-align:center;

`;

const Input = styled.input`
display:flex;
    flex-grow: 1;
    height:40px;
    border-radius:1px;
    overflow:hidden;
    margin-left:4px;
    outline: 0;
    border: 0;
    :focus-within{
        box-shadow: 0 0 0 2px #0d1117;
    }
    color:#c9d1d9;
    // outline: none;
    // border-radius: 10px;
    // border-color: violet;
    border-style: solid;

    /* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    height:33px;
    font-size:10px;
}
 
`;

const Button = styled.button`
background-color: #292929;  
display:flex;
justify-content:center;
align-items:center;

border: 2px solid #0d1117;
padding:4px 25px;
margin-left:10px;
cursor:pointer;
color:#ffffffa1;
font-weight:bold;
font-family: 'Roboto', cursive;
transition-duration: 0.4s;

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    height:40px;
    font-size:10px;
}
&:hover,
  &:focus {
    background-color: #4a4a4a;  
  }
`;

const Title = styled.h1`

font-family: cursive;
color: #fff;
display:flex;
font-size:50px;



@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    font-size:25px;
    text-align: justify;
    text-justify: inter-word;
    text-align:center;
}`;


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid gray;
  box-shadow: 5px 5px #ccc;
  padding: 10px;
  margin: 10px;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const Image = styled.img`
max-width: 700px !important;

  height: auto;
`;

const Content = styled.div`padding: 10px;

`;

const Heading = styled.div`
font-size: 40px;
font-weight: bolder;
text-align: center
`
const Para = styled.div`
font-size: 20px;
letter-spacing: 2px;
margin-top: 30px !important;
padding: 40px;
color:#888888;    
text-shadow: 2px 0 #888888;
`

const Head = styled.div`
font-size: 50px;
text-align: center;
font-weight: bold;
color: #444;
text-shadow: 
  1px 0px 1px #ccc, 0px 1px 1px #eee, 
  2px 1px 1px #ccc, 1px 2px 1px #eee,
  3px 2px 1px #ccc, 2px 3px 1px #eee,
  4px 3px 1px #ccc, 3px 4px 1px #eee,
  5px 4px 1px #ccc, 4px 5px 1px #eee,
  6px 5px 1px #ccc, 5px 6px 1px #eee,
  7px 6px 1px #ccc;
  margin-bottom: 30px;
`


const Mains = styled.div `
max-width: 1600px;
margin: 0 auto;
 color: #272727;
font-family: 'Quicksand', serif;
font-style: normal;
font-weight: 400;
letter-spacing: 0;
padding: 1rem;
  box-sizing: border-box;

  
  &:before,
  &:after {
  box-sizing: border-box;
}
`

const Cards = styled.ul `
display: flex;
flex-wrap: wrap;
list-style: none;
margin: 0;
padding: 0;
`

const CardItem = styled.li `
display: flex;
  padding: 1rem;
`
const CardImage = styled.div `
object-fit: cover;
`
const Images = styled.img `
height: auto;
  max-width: 100%;
  vertical-align: middle;
  
`
const Card = styled.div `
background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;`

  const CardContent = styled.div `
  padding: 0.5rem;
  background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%);`
 
  const CardTitle = styled.h2 `
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;`

  const CardText = styled.p `
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;    
  font-weight: 400;`

const Footer = styled.div `
background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  display: table;
  width: 100vw;
  height: 8rem;
  text-align: center;
  padding: 1rem;
  font-family: 'Arial', sans-serif;
  font-size: .875rem;
`

const Wrapper = styled.div `
display: table-cell;
  vertical-align: middle;`

  const Small =  styled.div `
  color: #ccc;
  letter-spacing: .025rem;
  margin-bottom: 1.5rem;
  display: block;`

  const FooterNav = styled.div ``

  const FooterLink = styled.a `
  color: #fff;
  text-decoration: none;
  margin: 0 .5rem;
  display: inline-block;

  &:hover{
    color: #f26896;
  transition: color .15s ease-in-out;
  }
`