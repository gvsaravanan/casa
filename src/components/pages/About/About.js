import React from "react";
import style from "./About.module.css";
import img1 from "./background.jpeg";
import founder from "./founder.png";

function About() {
  return (
    <>
      <div className={style["carousel"]}>
        <div className={style["carousel-inner"]}>
          <div className="carousel-item">
            <div className="container">
              <img
                src={img1}
                alt="Image"
                style={{
                  width: "100%",
                  objectFit: "contain",
                  filter: "brightness(30%)",
                }}
              />
              <div className={style["centered"]}>
                About
                <p className={style["slogan"]}>
                  Take a look at our team &nbsp; &darr;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style["sellers"]}>
        <div className={style["sellers-container"]}>
          <div className={style["what-we-do-block"]}>
            <img src={founder} className={style["sale-image"]} />
          </div>
          <div className={style["sellers-description"]}>
            <div className={style["sellers-title"]}>Founder</div>
            <div>
              Hi, my name is Yash Kavadia. I am the Founder of Casa along with
              being a BBA Mccombs Student at The University of Texas - Austin.
              Outside of college, I am an entrepreneur, avid equities investor,
              and family real estate manager.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
