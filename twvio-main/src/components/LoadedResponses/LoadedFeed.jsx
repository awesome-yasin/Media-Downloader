import { ReactVideoPlayer } from 'video-player-for-react'
import 'video-player-for-react/dist/index.css'

const LoadedFeed = (props) => {
    const responseObj = props.responseObj;
    const storyArray = responseObj.body.videos;
    // If no such account found
    if (responseObj.message) {
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
          
        <div className="reel-video">
            <ReactVideoPlayer
      width='500px'
      
      url={responseObj.body.videos[0].url}
      type='video/mp4'
      poster={responseObj.body.thumbnail}
    
    />
    </div>
            <p className="reel-caption">{responseObj.body.title}</p>

            {storyArray.map((element, index) => {
                return (
                    <>
                    <a className = "buttonDownload" target="_blank" download = "yasin.mp4" href={element.url} >Download {element.quality}</a>
                   
                    </>
                )

            })
        }
    
         
            </article>
           
           
        </>
    );
};

export default LoadedFeed;


// https://twitter.com/JubinNautiyal/status/1486934898078142467?s=20&t=tXmTF_JAbkOKsLgRtnys8A