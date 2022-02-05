

const LoadedFeed = (props) => {
    const responseObj = props.responseObj;

    // If no such account found
    if (responseObj.errorMessage) {
        return (
            <div className="error-page">
                <h1>No such account found !</h1>
                <p>{responseObj.errorMessage}</p>
            </div>
        );
    }

 
   
   

    
    return (
        <>
           <article className="profile-description">
           <a className = "buttonDownload" target="_blank" download = "yasin.mp4" href={responseObj.body.video} >Download SD (360p)</a>
           <a className = "buttonDownload" target="_blank" download = "yasin.mp4" href={responseObj.body.videoHD} >Download HD (720p)</a>
            </article>
           
            
        </>
    );
};

export default LoadedFeed;
