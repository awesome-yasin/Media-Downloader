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
      `https://socialdownloader.p.rapidapi.com/api/facebook/video?video_link=${id}`,
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
      <section id="story-section">
        <SearchForm
          submitHandler={submitHandler}
          onChangehandler={onChangehandler}
          placeholder="Paste Video Link"
        />
        

        <main className="story-response">
          {isLoading && <LoadingAnimation />}
          {hasLoaded && <LoadedFeed responseObj={responseObj} />}
        </main>
      </section>
      
      <Head>Profile Stalker</Head>
      <CardWrapper>
        <Image src={`https://cdn.digitbin.com/wp-content/uploads/Facebook-Downloader-App-740x467.png`} />
        <Content>
          <Heading>Stalk Profile</Heading>
          <Para>
          Facebook photo downloader provided by Fbvio is a great tool for saving images from Facebook posts. With Fbvio you can download a single posts image as well as download multiple Facebook photos.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image src={`https://viralyft.com/blog/wp-content/uploads/2021/08/Facebook-Video-Downloader.png`} />
        <Content>
          <Heading>No SignUp/Login</Heading>
          <Para>
          Fbvio is created to enable you to download IG videos for any purpose you want. Fbvio supports video downloading for singular video and multiple video from carousels.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image
          src={`https://cdn.searchenginejournal.com/wp-content/uploads/2020/04/25-amazing-facts-about-facebook-5f08549c55fa6-1520x800.png`}
        />
        <Content>
          <Heading>Fast Download</Heading>
          <Para>
          Our Facebook video download helps you download FULL HD, and 4K videos with sound. Most of the current tools only allow HD videos.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image
          src={`https://i0.wp.com/techbland.com/wp-content/uploads/2018/12/facebook-videmobile.png?fit=1024%2C536&ssl=1`}
        />
        <Content>
          <Heading>No Instagram API</Heading>
          <Para>
            Facebook video downloader for every device (mobile phone, PC, or tablet), and every OS (Android, IOS). You don't need to install any software.
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
