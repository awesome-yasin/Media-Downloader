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
    const id = userId;
    const response = await fetch(
      `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile?ig=${id}&response_type=feeds&corsEnabled=true`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "your-key",
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
      <section id="story-section">
        <SearchForm
          submitHandler={submitHandler}
          onChangehandler={onChangehandler}
          placeholder="Enter Username"
        />

        <main className="story-response">
          {isLoading && <LoadingAnimation />}
          {hasLoaded && <LoadedFeed responseObj={responseObj} />}
        </main>
      </section>
      <Head>Profile Stalker</Head>
      <CardWrapper>
        <Image src={`https://uttertechnology.com/wp-content/webpc-passthru.php?src=https://uttertechnology.com/wp-content/uploads/2021/09/acastro_190919_1777_instagram_0001.0.jpg&nocache=1`} />
        <Content>
          <Heading>Stalk Profile</Heading>
          <Para>
          An Instagram stalker, or private viewer, lets you discover profiles on Instagram without login. This service is online so no additional downloads are needed. You can search any public account you are interested in by typing it in the search bar.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image src={`https://1.bp.blogspot.com/-kXpnVoOgnUU/YUoveCZHDJI/AAAAAAAAK9U/W6CSrhWfelASNNpIQYHS0bA2kPEvXRR_QCNcBGAsYHQ/s1600/know-who-views-Instagram-profile.jpeg`} />
        <Content>
          <Heading>No SignUp/Login</Heading>
          <Para>
          If you wonder whether you can view someone’s Instagram without an account, you have come to the right website. Usually, when you get a link to an Insta post and you tap on it, you first need to sign up. But this Instagram web viewer is what you need if you don’t have an Insta account but want to see someone’s posts.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image
          src={`https://www.techprevue.com/wp-content/uploads/2020/07/can-someone-tell-if-you-look-at-their-instagram-1024x683.jpg`}
        />
        <Content>
          <Heading>Fast Download</Heading>
          <Para>
          With a private Instagram photo downloader tool, you can see private content from Instagram. You can find photos of Instagram users without revealing your identity. It is one of the best ways to easily read their blog or content, even if you don’t follow them on Instagram. It is a free online service, so you can get its features without spending any amount.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image
          src={`https://verloop.io/wp-content/uploads/Instagram-API-The-Ultimate-Guide-1200x600.jpg`}
        />
        <Content>
          <Heading>No Instagram API</Heading>
          <Para>
            This webapp uses Instagram Bulk Profile Scrapper from Rapid API
            which allows limited No of Download Per Day i.e 250 Request Per day.
            When I will have money Ill Buy premium version of the API but its
            good for personal use.
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
  margin-top: 18%;
  font-weight: bold;
  border-top: 1px solid #000;
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
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
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow: 2px 0 #e6683c;
`;

export default Feed;
