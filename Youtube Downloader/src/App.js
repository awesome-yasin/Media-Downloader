import React, { useEffect, useState } from "react";
import "./App.css";
import DownloadButton from "./DownloadButton";
import DownloadButtonDefault from "./DownloadButtonDefault";
import DownloadButtonInvalid from "./DownloadButtonInvalid";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const id = videoUrl.replace("https://www.youtube.com/watch?v=", "");
    console.log(id);
    setId(id);
  }, [videoUrl]);

  return (
    <>
      <header class="header-area">
        <div class="navbar-area">
          <div class="container">
            <nav class="site-navbar">
              <a href="#home" class="site-logo">
                Ytit{" "}
              </a>

              <ul>
                <li>
                  <a href="https://fbit.herokuapp.com/">Facebook Downloader</a>
                </li>
                <li>
                  <a href="https://instait.herokuapp.com/">
                    Instagram Downloader
                  </a>
                </li>
                <li>
                  <a href="#">Spotify Downloader</a>
                </li>
                <li>
                  <a href="#">Soundcloud Downloader</a>
                </li>
              </ul>

              <button class="nav-toggler">
                <span></span>
              </button>
            </nav>
          </div>
        </div>
      </header>
      <div className="app">
        <div className="app__linkBox">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className = "utheading">Youtube Video Downloader</h1>
            <input
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Paste youtube video url here..."
            />
          </form>
        </div>

        {videoUrl === "" ? (
          <DownloadButtonDefault />
        ) : (
          <div>
            {videoUrl.startsWith("https://www.youtube.com/watch?v=") ||
            videoUrl.startsWith("https://youtube.com/watch?v=") ||
            videoUrl.startsWith("www.youtube.com/watch?v=") ||
            videoUrl.startsWith("youtube.com/watch?v=") ||
            videoUrl.startsWith("https://youtu.be/") ||
            videoUrl.startsWith("https://youtube.com/shorts/") ||
            videoUrl.startsWith("https://m.youtube.com/watch?v=") ||
            videoUrl.startsWith("v=") ? (
              <div>
                <DownloadButton id={id} type="mp3" />
                <br />
                <DownloadButton id={id} type="videos" />
              </div>
            ) : (
              <DownloadButtonInvalid />
            )}
          </div>
        )}
      </div>

      <div class="head">
        <p>Ytit Features</p>
      </div>
      <section>
        <div class="grid-flex">
          <div class="col col-image img-1"></div>
          <div class="col col-text">
            <div class="Aligner-item">
              <p>
                Using our Youtube downloader is the fast and easy way to
                download and save any YouTube video to MP3 or MP4. Simply copy
                YouTube URL, paste it on the search box.
              </p>
            </div>
          </div>
        </div>

        <div class="grid-flex">
          <div class="col col-image img-2">&nbsp;</div>
          <div class="col col-text col-left">
            <div class="Aligner-item">
              <p>
                Download and convert YouTube videos as much as you want without
                limitation and always free.We support all device platforms. Easy
                to convert YouTube videos to MP3 files regardless of whether you
                are using Windows, Mac or Linux, Android, iPhone.
              </p>
            </div>
          </div>
        </div>

        <div class="grid-flex">
          <div class="col col-image img-3">&nbsp;</div>
          <div class="col col-text">
            <div class="Aligner-item">
              <p>
                We support all video and audio formats conversion. You can
                easily convert YouTube videos to MP3, 3GP, MP4, WMA, M4A, FLV,
                WEBM and MO formats, etc.
              </p>
            </div>
          </div>
        </div>

        <div class="grid-flex">
          <div class="col col-image img-4">&nbsp;</div>
          <div class="col col-text col-left">
            <div class="Aligner-item">
              <p>
                With the rising awareness of device security, people attach
                great importance to personal data. The service is totally clean
                with no virus under intense supervision based on security
                database.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="main">
        <div class="head">
          <p>How to Download</p>
        </div>
        <ul class="cards">
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="https://en.savefrom.net/img/articles/youtube_com/new/ss_en_1.jpg" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Copy The URL</h2>
                <p class="card_text">
                  copy the URL of the photo, video from Youtube.
                </p>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="https://en.savefrom.net/img/articles/youtube_com/new/any_page_en.jpg" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Paste The Link</h2>
                <p class="card_text">
                  Paste link into the input field and wait sometime for the conversion
                </p>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="https://en.savefrom.net/img/articles/youtube_com/new/site_en.jpg" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Download Successful</h2>
                <p class="card_text">
                  Ytit will sync your URL and creates a downloadable link
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <footer>
        <div class="wrapper">
          <small>
            &copy;2021 <strong>FBit By Yasin</strong>, Made with ❤️
          </small>
          <nav class="footer-nav">
            <a href="#">Github Link</a>
            <a href="#">Instagram Link</a>
            <a href="#">Other Awesome Projects</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default App;
