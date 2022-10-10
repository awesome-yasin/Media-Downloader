import { useState } from "react";
import LoadingAnimation from "./LoadingAnimation";
import SearchForm from "./Header/SearchForm";
import "./Styles/feed.css";
import styled from "styled-components";
import { device } from "./device";
import LoadedFeed from "./LoadedResponses/LoadedFeed";
const Feed = () => {
  const [userId, setUserId] = useState("");
  const [responseObj, setResponseObj] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  function getId(url) {
        
    return encodeURIComponent(url);
}

  function submitHandler(e) {
    e.preventDefault();
    if (userId.length === 0) {
      alert("Empty Username !");
      return;
    }
    setIsLoading(true);
    fetchProfile();
  }

  function onChangehandler(e) {
    setUserId(e.target.value);
  }
  async function fetchProfile() {
    const id = getId(userId);
    console.log(id)
    const response = await fetch(
      `https://socialdownloader.p.rapidapi.com/api/twitter/video?video_link=${id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
          `${process.env.REACT_APP_IGVIO_KEY}`,
          "x-rapidapi-host": "socialdownloader.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    setResponseObj(data);
    console.log(data)
    setIsLoading(false);
    setHasLoaded(true);
  }
  
  return (
    <>
      <section id="reel-section">
        <SearchForm
          submitHandler={submitHandler}
          onChangehandler={onChangehandler}
          placeholder="Paste Video Link"
        />
        

        <main className="reel-response">
          {isLoading && <LoadingAnimation />}
          {hasLoaded && <LoadedFeed responseObj={responseObj} />}
        </main>
      </section>
      
      <Head>Twitter Video Downloader</Head>
      <CardWrapper>
        <Image src={`https://www.techrounder.com/wp-content/uploads/2020/09/Twitter-Video-Download.jpg`} />
        <Content>
          <Heading>Download Videos/GIFs</Heading>
          <Para>
          Twitter downloader provided by Twvio  is the best and most secure free Twitter video downloader online tool, it helps you generate direct links for your favorite twitter videos and save them for offline viewing and sharing.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image src={`https://cdn.ilovefreesoftware.com/wp-content/uploads/2017/05/free-twitter-video-downloader-websites.png`} />
        <Content>
          <Heading>No SignUp/Login</Heading>
          <Para>
          This is an online tool used to download Twitter video (mp4). This downloader will help you find twitter to mp4 url link. Twitter mp4 video is downloaded directly from Twitter server to user device. This online service does not host any copyrighted or pirated content on its server. We are not associated with Twitter offcially. Can also be used as twitter gif downloader to download Twitter GIFs.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image
          src={`https://www.softwaretestinghelp.com/wp-content/qa/uploads/2020/11/Top-10-Twitter-Video-Downloader.png`}
        />
        <Content>
          <Heading>Fast Download</Heading>
          <Para>
          No more annoying screen recording, or weird "Twitter video downloading hacks," just follow the instructions below to pull your favorite Tweet vids, GIFs and turn them into posts on Instagram, Facebook, or wherever.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image
          src={`https://downloader4twitter.com/wp-content/uploads/2019/04/twitter-mac.jpg`}
        />
        <Content>
          <Heading>No Twitter API</Heading>
          <Para>
            Twitter video downloader for every device (mobile phone, PC, or tablet), and every OS (Android, IOS). You don't need to install any software.
          </Para>
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
  margin-top: 3%;
  font-weight: bold;
  border-top: 1px solid #000;
  background: hsla(248, 87%, 36%, 1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Image = styled.img`
  max-width: 600px !important;
  height: auto;
`;

const Content = styled.div`
  padding: 10px;
`;

const Heading = styled.div`
  font-size: 32px;
  font-weight: bolder;
  text-align: center;
`;
const Para = styled.div`
  font-size: 20px;
  letter-spacing: 2px;
  margin-top: 30px !important;
  padding: 40px;
  background: hsla(248, 87%, 36%, 1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow: 2px 0 hsla(248, 87%, 36%, 1);
`;

export default Feed;
