import moment from 'moment'

const LoadedStoryTwo = (props) => {
    const responseObj = props.responseObj;

    // If no such account found
    // if (responseObj.message) {
    //     return (
    //         <div className="error-page">
    //             <h1>No such account found !</h1>
    //             <p>{responseObj.message}</p>
    //         </div>
    //     );
    // }
    const storyArray = responseObj;

    // If account exists but no story uploaded
    // if (!storyArray.length) {
    //     return (
    //         <>
    //             <header className="user-info">
    //                 <img
    //                     src={responseObj.profile_pic_url}
    //                     className="profile-picture"
    //                     alt="Profile"
    //                 />
    //                 <div className="right-section">
    //                     <h3>{responseObj.username}</h3>
    //                     <p>{responseObj.full_name}</p>
    //                 </div>
    //             </header>
    //             <div className="error-page">
    //                 <h1>No story found !</h1>
    //                 <p>User has not uploaded any story !</p>
    //             </div>
    //         </>
    //     );
    // }

    // When User found and story is uploaded
    return (
        <>
            {/* <header className="user-info">
                <img
                    src={responseObj.profile_pic_url}
                    className="profile-picture"
                    alt="Profile"
                />
                <div className="right-section">
                    <h3>{responseObj.username}</h3>
                    <p>{responseObj.full_name}</p>
                </div>
            </header> */}
            <section className="story-list">
                {storyArray.map((element, index) => {
                    
                        return (
                            <>
                            <div className="story-item story-box">
                            <video className="story-item" key={index} controls>
                                <source
                                    src={element}
                                    className="story-media"
                                    type="video/webm"
                                ></source>
                            </video>
                            {/* <p>Uploaded At:  {moment.unix(element.taken_at).format("Do MMMM YYYY, h:mm:ss a")}</p> */}
                            <a className = "buttonDownload" target="_blank" download = "yasin.mp4" href={element} >Download Video/Photo !!!</a>
                            </div>
                            </>
                        );
                    
                    
                })}
            </section>
        </>
    );
};

export default LoadedStoryTwo;
