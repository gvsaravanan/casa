import React, { useState } from "react";
import style from "./ContactForm.module.css";
import logo from "../../casa-high-resolution-logo-transparent.png";


export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/BEVhZ48-wsB", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
        } else if (response.code === 422) {
          // Field validation failed
          setError(response.message);
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })
      .catch((error) => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }

  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className={style["formcarry-container"]}
    >
      <div className={style["formcarry-block"]}>
        <div className={style["logo-container"]}>
          <img src={logo} className={style["logo"]}/>
        </div>
        
      </div>
      <div className={style["formcarry-block-description"]}>
        If you have any questions, whether you’re a customer looking for more
        information about our process or a seller looking for more information,
        please feel free to reach out to us!
      </div>

      <div className={style["formcarry-block"]}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="First and last name"
        />
      </div>

      <div className={style["formcarry-block"]}>
        <label htmlFor="email">Your Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="example@gmail.com"
        />
      </div>

      <div className={style["formcarry-block"]}>
        <label htmlFor="message">Your message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          placeholder="Enter your message..."
        ></textarea>
      </div>

      <div className={style["formcarry-block"]}>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
