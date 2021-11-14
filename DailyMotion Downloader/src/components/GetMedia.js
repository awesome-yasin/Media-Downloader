/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MediaThumbnail from "./MediaThumbnail";
import VideoList from "./VideoList";
import "../App.css";

class GetMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      thumbnail: "",
      streams: [],
      isDataAvailable: false,
      showSpinner: false,
      error: false,
    };

    this.getMediaUrl = (event) => {
      this.setState({ url: event.target.value });
    };

    this.getMediaDetails = async () => {
      let url = this.state.url;
      this.setState({ showSpinner: true, error: false });
      console.log(url);
      this.getDownloadUrl(url);
    };
  }

  getDownloadUrl(url) {
    fetch(`https://getvideo.p.rapidapi.com/?url=${url}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "getvideo.p.rapidapi.com",
        "x-rapidapi-key":
          process.env.REACT_APP_RAPID_API_KEY ||
          "5be05bd400msh1fe8c757005c169p10ea3bjsnf6b6811bc600",
        "content-type": "application/json",
      },
    })
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          this.setState({
            thumbnail: data.thumbnail,
            streams: data.streams || "",
            isDataAvailable: true,
          });
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: true });
      });
  }

  checkIFDataIsAvailable() {
    if (!this.state.isDataAvailable && !this.state.showSpinner) {
      return (
        <div className="ad">
          <img
            alt="media-downloader-caption"
            src="media-downloader-download.png"
            className="ad-img"
          />
        </div>
      );
    }
    if (this.state.isDataAvailable && this.state.showSpinner) {
      if (this.state.thumbnail && this.state.streams) {
        return (
          <div style={{ padding: "30px 0px" }}>
            <MediaThumbnail source={this.state.thumbnail} />
            <VideoList streams={this.state.streams} />
          </div>
        );
      }
    } else if (this.state.showSpinner === true && this.state.error === false) {
      return (
        <div style={{ marginTop: "40px" }}>
          <img width="100px" height="100px" src="spin.gif" alt="spinner"></img>
          <p className="text-primary">Fetching Data...</p>
        </div>
      );
    } else if (this.state.error) {
      return <h1> An Error Occured</h1>;
    }
  }

  render() {
    return (
      <div>
        <div className = "field">
        <div className="input-url">
          <input
            type="text"
            placeholder="Enter Media URL of Dailymotion and Adult Sites"
            onChange={this.getMediaUrl}
          />
        </div>
        <div className="get-media">
          <a className="btn btn-large" onClick={this.getMediaDetails}>
            Download
          </a>
        </div>
        </div>
        <div>{this.checkIFDataIsAvailable()}</div>
      </div>
    );
  }
}

export default GetMedia;
