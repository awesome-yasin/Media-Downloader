

const LoadedStory = (props) => {
    const responseObj = props.responseObj;

    
    if (responseObj.error) {
        return (
            <div className="error-page">
                <h1>No Story Uploaded !</h1>
              <p>{responseObj.error}</p>
            </div>
        );
    }
    const storyArray = responseObj.stories;

    // If account exists but no story uploaded
    if (!storyArray.length) {
        return (
            <>
                <header className="user-info">
                    <img
                        src={responseObj.profile_pic_url}
                        className="profile-picture"
                        alt="Profile"
                    />
                    <div className="right-section">
                        <h3>{responseObj.username}</h3>
                        <p>{responseObj.full_name}</p>
                    </div>
                </header>
                <div className="error-page">
                    <h1>No story found !</h1>
                    <p>User has not uploaded any story !</p>
                </div>
            </>
        );
    }

    // When User found and story is uploaded
    return (
        <>
            <header className="user-info">
                <img
                    src={responseObj.profile_pic_url}
                    className="profile-picture"
                    alt="Profile"
                />
                <div className="right-section">
                    <h3>{responseObj.username}</h3>
                    <p>{responseObj.full_name}</p>
                </div>
            </header>
            <section className="story-list">
                {storyArray.map((element, index) => {
                    
                        return (
                            <>
                            <div className="story-item story-box">
                            <video className="story-item" key={index} controls>
                                <source
                                    src={element.media}
                                    className="story-media"
                                    type="video/webm"
                                ></source>
                            </video>
                            {/* <p>Uploaded At:  {moment.unix(element.taken_at).format("Do MMMM YYYY, h:mm:ss a")}</p> */}
                            <a className = "buttonDownload" target="_blank" download = "yasin.mp4" href={element.media} >Download Video !!!</a>
                            </div>
                            </>
                        );
                    
                    //  else {
                    //     return (
                    //         <div className="story-item story-box" key={index}>
                    //             <img
                    //                 src={
                    //                     element.image_versions2.candidates[0]
                    //                         .url
                    //                 }
                    //                 className="story-media"
                    //                 alt=""
                    //             />
                    //              <p>Uploaded At:  {moment.unix(element.taken_at).format("Do MMMM YYYY, h:mm:ss a")}</p>
                    //              <a className = "buttonDownload" target="_blank" download = "yasin.mp4" href={element.image_versions2.candidates[0].url} >Download Post !!!</a>

                    //         </div>
                    //     );
                    // }
                })}
            </section>
        </>
    );
};

export default LoadedStory;
