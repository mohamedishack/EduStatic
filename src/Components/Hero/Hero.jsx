import "./Hero.css";
import dark_arrow from "../../assets/dark_arrow.jpg";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for better world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus
          ad, qui labore odio iure nesciunt commodi maiores autem cum molestias
          assumenda, similique reiciendis optio nisi asperiores voluptatibus
          repudiandae rerum? Ea eveniet impedit, obcaecati saepe harum
          explicabo.
        </p>
        <button className="btn">
          Explore more
          <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
