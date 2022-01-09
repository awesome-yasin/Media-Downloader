const LoadedIgtv = (props) => {
    let responseObj = props.responseObj;
    
    // If no post found
    if (responseObj.message) {
        return (
            <div className="error-page">
                <h1>No IGTV found !</h1>
                <p>Make sure you've entered proper link.</p>
            </div>
        );
    }
    responseObj = responseObj.items[0];

    return (
        <>
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
                    <video className="post-media" controls>
                        <source
                            src={responseObj.video_versions[0].url}
                            type="video/webm"
                        ></source>
                    </video>
                )}
                {responseObj.media_type === 1 && (
                    <img
                        src={responseObj.image_versions2.candidates[0].url}
                        className="post-media"
                        alt=""
                    />
                )}
            </article>
            <p className="post-caption">{responseObj.caption.text}</p>
        </>
    );
};

export default LoadedIgtv;
