import { useState } from "react";
import "./Styles/post.css";
import LoadingAnimation from "./LoadingAnimation";
import SearchForm from "./Header/SearchForm";
import LoadedPost from "./LoadedResponses/LoadedPost";
import styled from "styled-components";
import { device } from "./device";

const Post = (props) => {
  const [postUrl, setPostUrl] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [responseObj, setResponseObj] = useState();

  function getId(url) {
    return url.slice(28, 39);
  }

  function onChangehandler(e) {
    setPostUrl(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (postUrl.length === 0) {
      alert("Empty Post link !");
      return;
    }
    setIsLoading(true);
    fetchPost();
  }

  async function fetchPost() {
    const postId = getId(postUrl);
    const response = await fetch(
      `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_id?shortcode=${postId}&response_type=feeds&corsEnabled=true`,
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
      <section id="post-section">
        <SearchForm
          submitHandler={submitHandler}
          onChangehandler={onChangehandler}
          placeholder="Enter post link"
        />

        <div className="post-response">
          {isLoading && <LoadingAnimation />}
          {hasLoaded && <LoadedPost responseObj={responseObj} />}
        </div>
      </section>
      <Head>Insta Post Downloader</Head>
      <CardWrapper>
        <Image
          src={`https://i.gadgets360cdn.com/large/instagram_download_anything_1592469191941.jpg`}
        />
        <Content>
          <Heading>Download Post/Videos</Heading>
          <Para>
          We introduce a new feature that provides you online Instagram photo download service. Instagram Photo downloader is a web-based tool that is highly secure and safe and easy to use. This insta image downloader tool does not require any login signup because we use Instagram API so, you are free to use it without providing any login credentials.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image
          src={`https://www.postplanner.com/hubfs/what-to-post-on-instagram.png`}
        />
        <Content>
          <Heading>HD Quality</Heading>
          <Para>
          Instagram image downloader also provides you to download multiple Instagram images or photos. You have seems that many users and creator on Instagram post multiple photos on profile and you want to download all Instagram images with a single click. It is very easy with the photo downloader tool you only have to copy the URL of the Instagram photos which you want to download and paste the URL in the Instagram Photo Downloader downloading box.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image
          src={`https://9to5mac.com/wp-content/uploads/sites/6/2021/11/Instagram-Reels.jpg?quality=82&strip=all`}
        />
        <Content>
          <Heading>Unlimited Download</Heading>
          <Para>
          No, there is no limit to download Instagram images at all. Instagram photos are freely downloadable on our website but we don’t have any right to these images or photos all the credit goes to the creator of that profile who uploads the photo, pic or images, etc.
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
  margin-top: 10%;
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
export default Post;
