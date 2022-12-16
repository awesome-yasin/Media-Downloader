const LoadedPostDown = (props) => {
    let responseObj = props.responseObj;
    console.log("hiii")
    console.log(responseObj)
    const postArray = responseObj.media;
    // If no post found

    if (responseObj.message) {
        return (
            <div className="error-page">
                <h1>No post found !</h1>
                <p>Make sure you've entered proper link.</p>
            </div>
        );
    }


    return (
        <>
        <div className="post-head">
            {/* <header className="reel-header">
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
               
            </header> */}

            <article className="post-section">
               
                        <section className="story-list">
                        {postArray.map((element, index) => {
                          
                               return ( 
                                   <>
                                    <img
                                           src={
                                               "https://www.creativefabrica.com/wp-content/uploads/2021/01/18/video-instagram-icon-template-logo-Graphics-7862331-1.jpg"}
                                           className="story-media"
                                           alt=""
                                           
                                       />
     <a className = "buttonDownload" target="_blank" download = "yasin.mp4" href={element} >Download !!!</a>

                                   </>
                               );
                           
                          
                       })}
                         </section>
               
            
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
