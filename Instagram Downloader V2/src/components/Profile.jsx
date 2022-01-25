import { useState } from "react";
import "./Styles/profile.css";
import LoadingAnimation from "./LoadingAnimation";
import SearchForm from "./Header/SearchForm";
import LoadedProfile from "./LoadedResponses/LoadedProfile";
import styled from "styled-components";
import { device } from "./device";

const Profile = (props) => {
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
      `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile?response_type=full&ig=${id}&corsEnabled=true`,
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
    try {
      setResponseObj(data[0]);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
    setHasLoaded(true);
  }

  return (
    <>
      <section id="profile-section">
        <SearchForm
          submitHandler={submitHandler}
          onChangehandler={onChangehandler}
          placeholder="Enter Username"
        />
        <main className="profile-response">
          {isLoading && <LoadingAnimation />}
          {hasLoaded && <LoadedProfile responseObj={responseObj} />}
        </main>
      </section>
      <Head>Insta DP viewer</Head>
      <CardWrapper>
        <Image
          src={`https://uttertechnology.com/wp-content/webpc-passthru.php?src=https://uttertechnology.com/wp-content/uploads/2021/09/acastro_190919_1777_instagram_0001.0.jpg&nocache=1`}
        />
        <Content>
          <Heading>HD Profile Pic viewer</Heading>
          <Para>
          You have lots of friends on Instagram and you followed them and you see their photos or video easily but when you want to see their Instagram profile and want to save them in your phone gallery and try to download them but you can’t save them because Instagram didn’t allow directly to download Instagram profile picture in your phone gallery.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image
          src={`https://1.bp.blogspot.com/-kXpnVoOgnUU/YUoveCZHDJI/AAAAAAAAK9U/W6CSrhWfelASNNpIQYHS0bA2kPEvXRR_QCNcBGAsYHQ/s1600/know-who-views-Instagram-profile.jpeg`}
        />
        <Content>
          <Heading>Scrap Private Profile</Heading>
          <Para>
            Download Profile Photo, View No of Follower and following with Profile that not only works for public profile but also with private profile and download DP in HD format. Downloading is difficult until we didn’t launch our tool. Our tool is solving you all problem regarding downloading any Instagram DP
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image
          src={`https://www.techprevue.com/wp-content/uploads/2020/07/can-someone-tell-if-you-look-at-their-instagram-1024x683.jpg`}
        />
        <Content>
          <Heading>No signup/Login</Heading>
          <Para>
          So, here insta dp viewer helps you to save you memories by downloading Instagram profile picture and see when you want to miss them in your phone or you can also download your own old memories which you uploaded in past.
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
export default Profile;
