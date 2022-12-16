const LoadedPostDown = (props) => {
    let responseObj = props.responseObj;
    console.log("hiii")
    console.log(responseObj)
    const postArray = responseObj.items[0].carousel_media;
    // If no post found
    if (responseObj.message) {
        return (
            <div className="error-page">
                <h1>No post found !</h1>
                <p>Make sure you've entered proper link.</p>
            </div>
        );
    }
    responseObj = responseObj.items[0];

    return (
        <>
        <div className="post-head">
            <header className="reel-header">
                <div className="reel-creator">
                    <img
                        src={responseObj.user.profile_pic_url}
                        className="profile-picture"
                        alt="profile"
                    />
                    <div className="creator-info">
                        <h3>{responseObj.user.username}</h3>
                        <p>{responseObj.user.full_name}</p>
                    </div>
                </div>
               
            </header>

            <article className="post-section">
                {responseObj.media_type === 2 && (
                    <div className="postinger">
                    <video className="post-media" controls>
                        <source
                            src={responseObj.video_versions[0].url}
                            type="video/webm"
                        ></source>
                    </video>
       <a className = "buttonDownload" target="_blank" download = "yasin.mp4" href={responseObj.video_versions[0].url} >Download !!!</a>
          </div>
                )}
                   {responseObj.media_type === 8 && (
                        <section className="story-list">
                        {postArray.map((element, index) => {
                           if (element.media_type === 2) {
                               return ( 
                                   <>
                                   <video className="story-item" key={index} controls>
                                       <source
                                           src={element.video_versions.candidates[0].url}
                                           className="story-media"
                                           type="video/webm"
                                       ></source>
                                   </video>
     <a className = "buttonDownload" target="_blank" download = "yasin.mp4" href={element.video_versions.candidates[0].url} >Download !!!</a>

                                   </>
                               );
                           } 
                           else if( element.media_type === 1) {
                               return (
                                <>
                                   <div className="story-item" key={index}>
                                       <img
                                           src={
                                               element.image_versions2.candidates[0].url}
                                           className="story-media"
                                           alt=""
                                           
                                       />

                                   </div>
                                   <a className = "buttonDownload" target="_blank" download = "yasin.mp4" href={element.image_versions2.candidates[0].url} >Download !!!</a>

                                   </>

                               );
                           }
                       })}
                         </section>
                )}
            
            </article>
            {(() => {
    if (responseObj.caption === "NULL") {
        return (
          <div>No Captions</div>
        )
      } else if(responseObj.caption) {
        return (
          <p className="post-caption">{responseObj.caption.text}</p>
        )
      }
    })()}
            {/* <p className="post-caption">{responseObj.caption.text}</p> */}
            </div>
        </>
    );
};

export default LoadedPostDown;
