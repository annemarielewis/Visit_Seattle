const Home = () => {
  return (
    <div className="home">
      <div className="video-container">
        <video autoPlay muted loop>
          <source src="../../public/assets/HomeVideo.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <h1 className="hometext">Visit Seattle</h1>
          <h2 className="hometext2">Adventure Calls</h2>
        </div>
      </div>
      <div className="aboutSeattle">
        <h3 className="z">About Seattle</h3>
        <p className="fontabout">
        Seattle, a city on Puget Sound in the Pacific Northwest, is surrounded by water, mountains and evergreen forests, and contains<br></br>thousands of acres of parkland. Washington State’s largest city, it’s home to a large tech industry, with Microsoft and Amazon<br></br>headquartered in its metropolitan area. The futuristic Space Needle, a 1962 World’s Fair legacy, is its most iconic landmark.
        </p>
      </div>
    </div>
  );
};

export default Home;
