const LoadedHdProfile = (props) => {
    const responseObj = props.responseObj.data.user;
    // const responseError = responseObj.error_code;
console.log(responseObj)
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
            <article className="profile-description">
                <div className="profile-header">
                    <img
                        src= "https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png"
                        className="profile-picture"
                        alt="Profile"
                    />
                    {/* <section className="profile-counts">
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
                    </section> */}
                </div>
            </article>
            <section className="user-intro">
                <h3 className="username">{responseObj.username}</h3>
                <p className="fullname">{responseObj.full_name}</p>
                <p className="bio">{responseObj.biography}</p>
            </section>
            <section className="profile-picture-container">
              <h4>View Profile Pic in HD 👇👇👇</h4>
                {console.log(responseObj.hd_profile_pic_versions[1].url)}
                 <a className = "buttonDownload" target="_blank" href={responseObj.hd_profile_pic_versions[1].url} >View Profile Pic !!!</a>
            </section>
        </>
    );
};

export default LoadedHdProfile;
