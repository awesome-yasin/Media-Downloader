/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      downloadUrl: "",
    };
    this.getDownloadLink = (event) => {
      this.setState({
        downloadUrl: event.target.value,
      });
    };
  }

  render() {
    return (
      <div className="Video-List">
        <div>
          <select onChange={this.getDownloadLink}>
            <option defaultValue="quality">Choose Media Quality</option>
            {this.props.streams.map((video) => (
              <option key={video.fmt_id} value={video.url}>
                {video.format}
              </option>
            ))}
          </select>
        </div>
        <span hidden={this.state.downloadUrl ? false : true}>
          <a
            className="btn"
            style={{ margin: "2px" }}
            rel='noreferrer noopener'
            target = "_blank"
            href={this.state.downloadUrl}
          >
            <i className="fa fa-download mr-2"></i> Download
          </a>
          <p className="text-secondary">OR</p>
          <a className="btn-white">
            {" "}
            <i className="fa fa-cloud-upload mr-2" aria-hidden="true"></i> Save
            to Cloud
          </a>
        </span>
      </div>
    );
  }
}
export default VideoList;
