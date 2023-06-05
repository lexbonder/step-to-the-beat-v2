import './Home.css';

const Home = () => (
  <div className="Home">
    <h1 className="title">
      Step <span className="small-words">to the</span> Beat
    </h1>

    <p className="intro">
      <span className="app-name">Step to the Beat</span> finds music that fits your personal rhythm!
      <br /><br />
      We'll help you calculate your
      <br />
      <strong>Steps per Minute</strong>
      <br />
      and give you a playlist that runs to your beat.
    </p>

    <button className="log-in buttons" onClick={() => console.log('Button clicked!')}>
      Login with Spotify to begin
    </button>
  </div>
);

export default Home;
