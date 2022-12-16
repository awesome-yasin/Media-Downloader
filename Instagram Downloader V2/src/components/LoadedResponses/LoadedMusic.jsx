import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const LoadedMusic = (props) => {
  const responseObj = props.responseObj;
  console.log(responseObj);
  // If no such account found
  // if (responseObj.message) {
  //     return (
  //         <div className="error-page">
  //             <h1>No such account found !</h1>
  //             <p>{responseObj.message}</p>
  //         </div>
  //     );
  // }
  const musicArray = responseObj.data;

  if (!musicArray.length) {
    return (
      <>
        <div className="error-page">
          <h1>No Song Found</h1>
          <p>Recheck Osng Name from instagram audio</p>
        </div>
      </>
    );
  }

  // When User found and story is uploaded
  return (
    <>
      {/* <header className="user-info">
                <img
                    src={responseObj.track.cover_artwork_thumbnail_uri}
                    className="profile-picture"
                    alt="Profile"
                />
                <div className="right-section">
                    <h3>{responseObj.username}</h3>
                    <p>{responseObj.full_name}</p>
                </div>
            </header> */}
             <div className="radio">
      <section className="stations">
        {musicArray.map((element, index) => {
          return (
            <>
              {/* <div className="story-item" key={index}>
                <img
                  src={element.track.cover_artwork_thumbnail_uri}
                  className="profile-picture"
                  alt="Profile"
                />
                <p>{element.track.title}</p>

                <AudioPlayer
                  key={index}
                  src={element.track.progressive_download_url}
                  onPlay={(e) => console.log("onPlay")}
                />
              </div> */}
             

              <div className="station" key={index}>
              <div className="stationName">
              <img
                    className="logos"
                    src={element.track.cover_artwork_thumbnail_uri}
                    alt="station logo"
                  />
                   <div className="name">{element.track.title}  <div className="artist">By - {element.track.display_artist} </div> </div>
                  
                  
              </div>
              <AudioPlayer
                  className="player"
                  src={element.track.progressive_download_url}
                  autoPlayAfterSrcChange={false}
                  showJumpControls={false}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS", "ADDITIONAL_CONTROLS"]}
                  customProgressBarSection={
                    [
                      RHAP_UI.PROGRESS_BAR,
                      RHAP_UI.CURRENT_TIME,
                      <div>/</div>,
                      RHAP_UI.DURATION,
                      
                    ]
                  }
                  customAdditionalControls={
                    [
                      
                      <a href = {element.track.progressive_download_url} target = "__blank" className = "music_download">Download </a>,
                      
                    ]
                  }
                  
                />
              </div> 
            </>
          );
        })}
      </section>
      </div>
    </>
  );
};

export default LoadedMusic;
