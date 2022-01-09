const LoadedPost = (props) => {
    let responseObj = props.responseObj;

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
                    <video className="post-media" controls>
                        <source
                            src={responseObj.video_versions[0].url}
                            type="video/webm"
                        ></source>
                    </video>
                )}
                {responseObj.media_type === 8 && (
                    <img
                        src={responseObj.carousel_media[0].image_versions2.candidates[0].url}
                        className="post-media"
                        alt="post media"
                    />
                )}
            </article>
            <p className="post-caption">{responseObj.caption.text}</p>
            </div>
        </>
    );
};

export default LoadedPost;
