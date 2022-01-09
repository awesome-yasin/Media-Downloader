const LoadedProfile = (props) => {
    const responseObj = props.responseObj;
    const responseError = responseObj.error_code;

    if (responseError) {
        return (
            <div className="error-page">
                <h1>No such account found !</h1>
                <p>{responseObj.message}</p>
            </div>
        );
    }

    return (
        <>
            <article className="profile-description">
                <div className="profile-header">
                    <img
                        src={responseObj.hd_profile_pic_versions[0].url}
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
                <h3 className="username">{responseObj.username}</h3>
                <p className="fullname">{responseObj.full_name}</p>
                <p className="bio">{responseObj.biography}</p>
            </section>
            <section className="profile-picture-container">
                <img
                    src={responseObj.hd_profile_pic_url_info.url}
                    className="fullsize-profile-picture"
                    alt="Fullsize"
                />
            </section>
        </>
    );
};

export default LoadedProfile;
