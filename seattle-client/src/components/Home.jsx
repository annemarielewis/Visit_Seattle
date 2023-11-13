import { useEffect, useRef } from "react";
import Quiz from "./Quiz";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return
    }

    const handleTimeUpdate = () => {
      const stopTime = 145

      if (video.currentTime >= stopTime) {
        video.currentTime = 0
      }
    };

    const handleEnded = () => {
      video.play()
    };

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  return (
    <div className="home">
      <div className="video-container">
        <video ref={videoRef} autoPlay muted loop>
          <source src="../../public/assets/HomeVideo.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <h1 className="hometext">Visit Seattle</h1>
          <h2 className="hometext2">Adventure Calls</h2>
        </div>
      </div>
      <div className="aboutSeattle">
        <img src="/assets/funMap.png" alt="fun-map" />
        <h3 className="z">About Seattle</h3>
        <p className="fontabout">
          Seattle, a city on Puget Sound in the Pacific Northwest, is surrounded by water, mountains and evergreen forests, and contains thousands of acres of parkland. Washington State’s largest city, it’s home to a large tech industry, with Microsoft and Amazon headquartered in its metropolitan area. The futuristic Space Needle, a 1962 World’s Fair legacy, is its most iconic landmark.
        </p>
      </div>
      <div className="quiz-section">
        <Quiz />
        <img src="/assets/notSure2.png" alt="not-sure" />
      </div>
    </div>
  );
};

export default Home;
