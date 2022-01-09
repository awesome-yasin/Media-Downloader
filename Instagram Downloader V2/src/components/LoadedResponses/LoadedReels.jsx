const LoadedReels = (props) => {
    let responseObj = props.responseObj;
    // let downloadFileName = responseObj.user.username;

    let downloadFileName = "reel.mp4";
    console.log(responseObj);

    // If no reel found
    if (responseObj.message) {
        return (
            <div className="error-page">
                <h1>No reel found !</h1>
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
            <video controls className="reel-video">
                <source
                    src={responseObj.video_versions[0].url}
                    type="video/webm"
                    download={downloadFileName}
                ></source>
            </video>
           
            <p className="reel-caption">{responseObj.caption.text}</p>



          
        </>
    );
};


export default LoadedReels;
