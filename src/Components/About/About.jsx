import "./About.css";
import about_img from "../../assets/about_img.jpg";
import play_icon from "../../assets/play_icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} className="about-img" />
        <img
          src={play_icon}
          className="play-icon"
          onClick={() => setPlayState(true)}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrows Leader Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          corrupti consequatur accusamus voluptatem quia debitis laudantium
          maiores soluta aliquid molestias nobis vitae culpa ipsum incidunt ab
          dolores quo, ex cumque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          corrupti consequatur accusamus voluptatem quia debitis laudantium
          maiores soluta aliquid molestias nobis vitae culpa ipsum incidunt ab
          dolores quo, ex cumque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          corrupti consequatur accusamus voluptatem quia debitis laudantium
          maiores soluta aliquid molestias nobis vitae culpa ipsum incidunt ab
          dolores quo, ex cumque.
        </p>
      </div>
    </div>
  );
};

export default About;
