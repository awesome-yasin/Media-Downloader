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
                  Downit{" "}
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
                    <a href="https://scdit.herokuapp.com/">
                      SoundCloud Downloader
                    </a>
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
        <p>Downit Features</p>
      </div>
      <section>
        <div class="grid-flex">
          <div class="col col-image img-1"></div>
          <div class="col col-text">
            <div class="Aligner-item">
              <p>
                Online Dailymotion and adult website video downloader is a perfect choice for
                people who need to watch videos when they are far away from the
                internet..
              </p>
            </div>
          </div>
        </div>

        <div class="grid-flex">
          <div class="col col-image img-2">&nbsp;</div>
          <div class="col col-text col-left">
            <div class="Aligner-item">
              <p>
                Dailymotion is one of the most popular video sharing platforms
                out there. There are numerous interesting videos shared and now
                you can download any of these dailymotion videos hassle-free
                with the help of our popular dailymotion video downloader
              </p>
            </div>
          </div>
        </div>

        <div class="grid-flex">
          <div class="col col-image img-3">&nbsp;</div>
          <div class="col col-text">
            <div class="Aligner-item">
              <p>
              Download an unlimited number of videos from the top Adult websites without limitations. Supports multiple Adult websites can't name here try it on your own.
              </p>
            </div>
          </div>
        </div>

        <div class="grid-flex">
          <div class="col col-image img-4">&nbsp;</div>
          <div class="col col-text col-left">
            <div class="Aligner-item">
              <p>
              100% safe website using SSL encryption and free of any malware, virus or annoying ads and Download videos at the highest possible speeds.
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
                  copy the URL of the photo, video from Website.
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
                  Downit will sync your URL and creates a downloadable link
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <footer>
        <div class="wrapper">
          <small>
            &copy;2021 <strong>Downit By Yasin</strong>, Made with ❤️
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
