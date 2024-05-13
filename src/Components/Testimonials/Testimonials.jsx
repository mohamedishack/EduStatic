import "./Testimonials.css";
import next_icon from "../../assets/next_icon.png";
import back_icon from "../../assets/back_icon.jpg";
import user_1 from "../../assets/program_1.jpg";
import user_2 from "../../assets/program_2.jpg";
import user_3 from "../../assets/program_3.jpg";
import user_4 from "../../assets/program_1.jpg";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} className="next-btn" onClick={slideForward} />
      <img src={back_icon} className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson 1</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                placeat obcaecati voluptatibus ducimus, quo quia adipisci non
                optio distinctio enim fuga vero aliquam quas odio, deserunt
                velit temporibus consectetur provident.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson 2</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                placeat obcaecati voluptatibus ducimus, quo quia adipisci non
                optio distinctio enim fuga vero aliquam quas odio, deserunt
                velit temporibus consectetur provident.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William Jackson 3</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                placeat obcaecati voluptatibus ducimus, quo quia adipisci non
                optio distinctio enim fuga vero aliquam quas odio, deserunt
                velit temporibus consectetur provident.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William Jackson 4</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                placeat obcaecati voluptatibus ducimus, quo quia adipisci non
                optio distinctio enim fuga vero aliquam quas odio, deserunt
                velit temporibus consectetur provident.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
