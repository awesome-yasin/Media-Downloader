import { useState } from "react";
import "./Styles/post.css";
import LoadingAnimation from "./LoadingAnimation";
import SearchForm from "./Header/SearchForm";
import LoadedIgtv from "./LoadedResponses/LoadedIgtv";
import styled from "styled-components";
import { device } from "./device";

const Igtv = (props) => {
  const [igtvUrl, setIgtvUrl] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [responseObj, setResponseObj] = useState();
  // const [error, setError] = useState(false);
  function getId(url) {
    return url.slice(29, 40);
  }

  function onChangehandler(e) {
    setIgtvUrl(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (igtvUrl.length === 0) {
      alert("Empty Post link !");
      return;
    }
    setIsLoading(true);
    fetchPost();
  }

  async function fetchPost() {
    const igtvId = getId(igtvUrl);

    const response = await fetch(
      `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_id?shortcode=${igtvId}&response_type=feeds&corsEnabled=true`,
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
    setHasLoaded(true);
    setIsLoading(false);
  }

  return (
    <>
      <section id="post-section">
        <SearchForm
          submitHandler={submitHandler}
          onChangehandler={onChangehandler}
          placeholder="Enter IGTV link"
        />

        <div className="post-response">
          {isLoading && <LoadingAnimation />}
          {hasLoaded && <LoadedIgtv responseObj={responseObj} />}
        </div>
      </section>
      <Head>IGTV Downloader</Head>
      <CardWrapper>
        <Image
          src={`https://www.instagramsave.com/ogimage/instagram-igtv-downloader.png`}
        />
        <Content>
          <Heading>High-quality IGTV</Heading>
          <Para>
          Use go-to Instagram Downloader to download IGTV to your device and to enjoy it any time, even if there is no WiFi. Poor Wifi can piss on parade. Avoid it by saving IGTV on computer or phone. Do it with no hassle in no time and without quality loss.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image
          src={`https://img.olhardigital.com.br/wp-content/uploads/2019/05/20190521093121-860x450.jpg`}
        />
        <Content>
          <Heading>Use for free</Heading>
          <Para>
          It is a unique service with which you are able to save all IGTV to your phones, tablets, and laptops and watch them any time. The unique development makes it possible to save high-resolution content of any public account.
          </Para>
        </Content>
      </CardWrapper>
      <CardWrapper>
        <Image
          src={`https://www.socialbakers.com/website/storage/2019/11/1537471182-og-blog-mordecai_igtv.jpg`}
        />
        <Content>
          <Heading>Unlimited Download</Heading>
          <Para>
          You can use Instagram IGTV Downloader without fear of being fined. The content published on Instagram is public and can be legally used offline. Clips will be displayed in your phone Gallery.
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
export default Igtv;
