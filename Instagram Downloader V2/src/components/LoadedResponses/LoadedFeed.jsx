import Heart from "../../Media/heart.svg";
import Plays from "../../Media/plays.svg";

const LoadedFeed = (props) => {
    const responseObj = props.responseObj;

    // If no such account found
    if (responseObj.message) {
        return (
            <div className="error-page">
                <h1>No such account found !</h1>
                <p>{responseObj.message}</p>
            </div>
        );
    }
    const storyArray = responseObj.feed.data;
 
   
    if (!storyArray) {
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
                    <h1>No profile Found</h1>
                    <p>User has Private Profile</p>
                </div>
               
            </>
        );
    }

    
    return (
        <>
           <article className="profile-description">
                <div className="profile-header">
                    <img
                        src={responseObj.profile_pic_url}
                        className="profile-picture"
                        alt="Profile"
                    />
                    <section className="profile-counts">
                        <div className="media-count">
                            <h3>{responseObj.media_count}</h3>
                            <p>Posts</p>
                        </div>
                        <div className="follower-count">
                            <h3>{responseObj.follower_count}</h3>
                            <p>Followers</p>
                        </div>
                        <div className="following-count">
                            <h3>{responseObj.following_count}</h3>
                            <p>Followings</p>
                        </div>
                    </section>
                </div>
            </article>
            <section className="user-intro">
                <h3 className="username">Username : {responseObj.username}</h3>
                <p className="fullname">Full Name : {responseObj.full_name}</p>
                <p className="bio">Profile Bio : {responseObj.biography}</p>
            </section>
            <section className="story-list">
                {storyArray.map((element, index) => {
       
                    if (element.media_type === 2) {
                        return (
                            <>
                             <div className="story-item story-box">
                            <video className="story-item" key={index} controls>
                                <source
                                    src={element.video_versions[0].url}
                                    className="story-media"
                                    type="video/webm"
                                ></source>
                                
                            </video>
                            <div className = "likes">
                                <div className = "plays">
                                <img src={Plays} className="nav-icons" alt="search Story" />
                                 <p>Plays : {element.play_count}</p>
                                </div><br/>
                                <div className = "like-count">
                                <img src={Heart} className="nav-icons" alt="search Story" />
                                <p>Likes : {element.like_count}</p>
                                </div>
                            </div>
                            <br />
                           
                            </div>
                            </>
                        );
                        
                    } 
                    if (element.media_type === 1 ){
                        return(
                            <>
                            <div className="story-item story-box">
                            <img
                        src={element.image_versions2.candidates[0].url}
                        className="post-media"
                        alt="post media"
                    />
                           <div className = "likes">
                               <div className = "plays">
                               <img src={Plays} className="nav-icons" alt="search Story" />
                                <p>comments : {element.comment_count}</p>
                               </div><br/>
                               <div className = "like-count">
                               <img src={Heart} className="nav-icons" alt="search Story" />
                               <p>Likes : {element.like_count}</p>
                               </div>
                           </div>
                           <br />
                          
                           </div>
                           </>
                        )
                    }
                    if (element.media_type === 8) {
                        return(
                            <>
                            <div className="story-item story-box">
                            <img
                        src={element.carousel_media[0].image_versions2.candidates[0].url}
                        className="post-media"
                        alt="post media"
                    />
                           <div className = "likes">
                               <div className = "plays">
                               <img src={Plays} className="nav-icons" alt="search Story" />
                                <p>comments : {element.comment_count}</p>
                               </div><br/>
                               <div className = "like-count">
                               <img src={Heart} className="nav-icons" alt="search Story" />
                               <p>Likes : {element.like_count}</p>
                               </div>
                           </div>
                           <br />
                          
                           </div>
                           </>
                        )
                    }
                   
                })}
            </section>
        </>
    );
};

export default LoadedFeed;
