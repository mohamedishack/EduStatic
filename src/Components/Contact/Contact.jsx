import "./Contact.css";
import msg_icon from "../../assets/msg_icon.jpg";
import mail_icon from "../../assets/mail_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import location_icon from "../../assets/location_icon.png";
import white_arrow from "../../assets/next_icon.png";
import { useState } from "react";
const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("sending");
    event.target.reset();
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          veritatis minima dicta tenetur consectetur sed non sint aspernatur rem
          quidem dolor, nostrum suscipit deleniti illo nisi voluptate eius!
          Ipsum, eum.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            contact@mail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +1 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="" />
            77 Masschusetts Ave, Cambridge
            <br /> MA 02139, United states
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          ></input>
          <label htmlFor="">Write your messages here</label>
          <textarea
            name="message"
            id=""
            rows="6"
            placeholder="Enter your messages here"
            required
          />
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
