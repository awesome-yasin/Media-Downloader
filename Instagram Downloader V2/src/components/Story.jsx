import { useState } from "react";
import "./Styles/story.css";
import LoadingAnimation from "./LoadingAnimation";
import SearchForm from "./Header/SearchForm";
import LoadedStory from "./LoadedResponses/LoadedStory";
import styled from "styled-components";
import { device } from "./device";

const Story = (props) => {
  const [userId, setUserId] = useState("");
  const [responseObj, setResponseObj] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  // const [storyArray, setStoryArray] = useState([]);

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
      `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile?ig=${id}&response_type=story&corsEnabled=true`,
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
          {hasLoaded && <LoadedStory responseObj={responseObj} />}
        </main>
      </section>

      <Head>Insta Story Downloader</Head>
      <CardWrapper>
        <Image
          src={`https://miro.medium.com/max/2000/1*QXCIerDrCbTNylkvPx3Ung.png`}
        />
        <Content>
          <Heading>Download Public Profile Stories</Heading>
          <Para>
          Stories! Stories we listen to from childhood but this era is the digital era, where the way of stories is change and in this era, the way story express is also changed in the form of photos and videos on social media platforms and Instagram is one of them.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image
          src={`https://calistu.com/blog/wp-content/uploads/2021/09/Instagram-story-downloader-1200x675.jpg`}
        />
        <Content>
          <Heading>HD Format Download</Heading>
          <Para>
          Our story saver is different from other Insta Story downloading sites. We introduce a new feature for more simplify your downloading. Sometimes we miss our friends & family members but we can’t tell them and we have so much care for them and want to see their Instagram Stories without knowing them. So, we update this feature for you.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image
          src={`https://s3-us-west-2.amazonaws.com/jumpermedia.co/uploads/2020/02/image3-1.jpg`}
        />
        <Content>
          <Heading>No signup/Login</Heading>
          <Para>
          Now you can download any public profile Stories anonymously without knowing them. You just paste any Public Instagram account profile URL inside the Story Saver input box and click the search button. InstaFintsa automatically syncs its stories and provides you with downloadable links.
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
export default Story;
