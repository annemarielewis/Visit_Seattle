const Home = () => {
  return (
    <div className="home">
      <div className="video-container">
        <video autoPlay muted loop>
          <source src="../../public/assets/HomeVideo.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <h1 className="hometext">Visit Seattle</h1>
          <h2 className="hometext">Adventure Calls</h2>
        </div>
      </div>
      <div>
        <h3 className="z">About Seattle</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
          soluta ipsa adipisci nemo numquam perspiciatis sit. Laudantium
          deserunt obcaecati veniam quas ab molestias voluptate fuga? Excepturi
          laudantium quasi porro quaerat?
        </p>
      </div>
    </div>
  );
};

export default Home;
