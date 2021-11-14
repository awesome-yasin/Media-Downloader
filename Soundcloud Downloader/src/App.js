import React from "react";
import "./App.css";
import GetMedia from "./components/GetMedia";

function App() {
  return (
    <>
      <div className="App">
        <header class="header-area">
          <div class="navbar-area">
            <div class="container">
              <nav class="site-navbar">
                <a href="#home" class="site-logo">
                  SCit{" "}
                </a>

                <ul>
                  <li>
                    <a href="https://fbit.herokuapp.com/">
                      Facebook Downloader
                    </a>
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
                    <a href="https://utit.herokuapp.com/">Youtube Downloader</a>
                  </li>
                </ul>

                <button class="nav-toggler">
                  <span></span>
                </button>
              </nav>
            </div>
          </div>
        </header>
        <GetMedia />
      </div>

      <div class="head">
        <p>SCit Features</p>
      </div>
      <section>
        <div class="grid-flex">
          <div class="col col-image img-1"></div>
          <div class="col col-text">
            <div class="Aligner-item">
              <p>
                SoundCloud Downloader is a webapp to online download SoundCloud
                tracks, songs, music in MP3 format. Use this SoundCloud
                downloader to download SoundCloud high quality mp3 tracks in
                128kbps & 320kbps speed.
              </p>
            </div>
          </div>
        </div>

        <div class="grid-flex">
          <div class="col col-image img-2">&nbsp;</div>
          <div class="col col-text col-left">
            <div class="Aligner-item">
              <p>
                We made the use of our soundcloud to mp3 converter as easy as
                possible, just copy the soundcloud link in the textfield and
                click “Download MP3”. After that everything will go
                automatically behind the scenes
              </p>
            </div>
          </div>
        </div>

        <div class="grid-flex">
          <div class="col col-image img-3">&nbsp;</div>
          <div class="col col-text">
            <div class="Aligner-item">
              <p>
                Our soundcloud downloader / mp3 converter is free and open
                sourced so that everyone can download and learn how to make
                these kind of stuffs, and we will keep it that way
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
                  copy the URL of the photo, video from SoundCloud.
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
                  Paste link into the input field and Click Download button
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
                  SCit will sync your URL and creates a downloadable link
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <footer>
        <div class="wrapper">
          <small>
            &copy;2021 <strong>SCit By Yasin</strong>, Made with ❤️
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
