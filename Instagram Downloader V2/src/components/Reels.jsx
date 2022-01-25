import { useState } from "react";
import "./Styles/reel.css";
import styled from "styled-components";
import LoadingAnimation from "./LoadingAnimation";
import SearchForm from "./Header/SearchForm";
import LoadedReels from "./LoadedResponses/LoadedReels";
import { device } from "./device";
const Reels = (props) => {
    const [reelUrl, setReelUrl] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [responseObj, setResponseObj] = useState();

    function getId(url) {
        return url.slice(31, 42);
    }

    function onChangehandler(e) {
        setReelUrl(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        if (reelUrl.length === 0) {
            alert("Empty Reel link !");
            return;
        }
        setIsLoading(true);
        fetchReel();
    }

    async function fetchReel() {
        const reelId = getId(reelUrl);
        if (reelId.length !== 11) {
            alert("Invaid Reel URL");
            setIsLoading(false);
            return;
        }
        const response = await fetch(
            `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_id?shortcode=${reelId}&response_type=reels&corsEnabled=true`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key": "your-key",
                    "x-rapidapi-host": "instagram-bulk-profile-scrapper.p.rapidapi.com",
                },
            }
        );
        const data = await response.json();
        setResponseObj(data[0]);
        setIsLoading(false);
        setHasLoaded(true);
    }

    return (
        <>


        <section id="reel-section">
            <SearchForm
                submitHandler={submitHandler}
                onChangehandler={onChangehandler}
                placeholder="Enter Reel link"
            />

            <div className="reel-response">
                {isLoading && <LoadingAnimation />}
                {hasLoaded && <LoadedReels responseObj={responseObj} />}
            </div>
        </section>
        <Head>Reel features</Head>
  <CardWrapper>
     
  <Image src={`https://igram.io/static/img/app-instagram-feed.jpg`} />
  <Content>
  <Heading>Unlimited Download</Heading>
  <Para>
  A free and fast tool for Instagram reels video download in HD. With this Instagram reels downloader, you can save reels video in MP4 high quality in your phone gallery without providing your log in details. The Instagram reels downloader is a free service for everyone and you can unlimitedly download reels video as you want.</Para>
  </Content>
  
</CardWrapper>
<CardWrapper>
  <Image src={`https://igram.io/static/img/instagram-video.jpg`} />
  <Content>
  <Heading>No SignUp/Login</Heading>
  <Para>
  The best part of Reels video downloader is that we do not use Instagram API, so you no need to worry about providing your credentials for downloading the reels video. You are free to use our reels video download services without creating an account for login or signup.</Para>
  </Content>
  
</CardWrapper>
<CardWrapper>
  <Image src={`https://igram.io/static/img/applications-instagram-igtv.jpg`} />
  <Content>
  <Heading>Fast Download</Heading>
  <Para>
  Before using the download Instagram reels video service, you need to have a link to that Instagram reel video which you want to download and paste that link in the Instagram reels downloader input box. The Instagram reels downloader will automatically synchronize the video and generate a reels video downloading link for you.</Para>
  </Content>
  
</CardWrapper>
<CardWrapper>
  <Image src={`https://verloop.io/wp-content/uploads/Instagram-API-The-Ultimate-Guide-1200x600.jpg`} />
  <Content>
  <Heading>No Instagram API</Heading>
  <Para>
  This webapp uses Instagram Bulk Profile Scrapper from Rapid API which allows limited No of Download Per Day i.e 250 Request Per day. When I will have money Ill Buy premium version of the API but its good for personal use.</Para>
  </Content>
  
</CardWrapper>



 </>
    );
};

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
const Head = styled.div`
font-size: 36px;
text-align: center;
margin-top: 10%;
font-weight: bold;
border-top: 1px solid #000;
background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const Image = styled.img`
max-width: 600px !important;
  height: auto;
`;

const Content = styled.div`padding: 10px;

`;

const Heading = styled.div`
font-size: 32px;
font-weight: bolder;
text-align: center

`
const Para = styled.div`
font-size: 20px;
letter-spacing: 2px;
margin-top: 30px !important;
padding: 40px;
background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;   

text-shadow: 2px 0 #e6683c;
`




export default Reels;
