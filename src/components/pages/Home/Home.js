import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import img3 from "./carousel-images/bridge.jpg";
import img2 from "./carousel-images/road.jpg";
import img1 from "./carousel-images/sea.jpg";
import img4 from "./carousel-images/woods.jpeg";
import saleimg from "./sale.jpeg";
import { Link } from "react-router-dom";

function Home() {
  const images = [img1, img2, img3, img4];
  const [currentImage, setCurrentImage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsScrolling(true);
      setTimeout(() => {
        setIsScrolling(false);
        setCurrentImage((currentImage + 1) % images.length);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <>
      <div className={`carousel ${isScrolling ? "slide" : ""}`}>
        <div className={style["carousel-inner"]}>
          <div className="carousel-item">
            <div className="container">
              <img
                src={images[currentImage]}
                alt="Image"
                style={{
                  width: "100%",
                  objectFit: "contain",
                  filter: "brightness(30%)",
                }}
              />
              <div className={style["centered"]}>
                CASA
                <p className={style["slogan"]}>
                  The new way to buy real estate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style["what-we-do"]}>
        <div className={style["what-we-do-container"]}>
          <div className={style["what-we-do-description"]}>
            <div className={style["what-we-do-title"]}>What We Do</div>
            <div>
              At Casa, we make it easy and affordable to invest in real estate
              properties with any amount of capital starting at $10. To learn
              more about how we work, go to our About page.
            </div>
            <div>
              <button className={style["about-us-button"]}>
                <Link to="/about" id="about">
                  About &rarr;
                </Link>
              </button>
            </div>
          </div>
          <div className={style["what-we-do-block"]}>
            <img src={img1} className={style["property-image"]} />
            <p className={style["address"]}>1600 Pennsylvania Ave</p>
            <p className={style["stats"]}>House Stats</p>
            <div className={style["stats-bar"]}></div>
            <button className={style["share-button"]}>Buy a share</button>
          </div>
          <div className={style["what-we-do-block"]}>
            <img src={img1} className={style["property-image"]} />
            <p className={style["address"]}>1600 Pennsylvania Ave</p>
            <p className={style["stats"]}>House Stats</p>
            <div className={style["stats-bar"]}></div>
            <button className={style["share-button"]}>Buy a share</button>
          </div>
          <div className={style["what-we-do-block"]}>
            <img src={img1} className={style["property-image"]} />
            <p className={style["address"]}>1600 Pennsylvania Ave</p>
            <p className={style["stats"]}>House Stats</p>
            <div className={style["stats-bar"]}></div>
            <button className={style["share-button"]}>Buy a share</button>
          </div>
        </div>
        <div>
          <button className={style["about-us-button"]}>
            <Link to="/properties" id="about">
              More &rarr;
            </Link>
          </button>
        </div>
      </div>

      <div className={style["sellers"]}>
        <div className={style["sellers-container"]}>
          <div className={style["what-we-do-block"]}>
            <img src={saleimg} className={style["sale-image"]} />
          </div>
          <div className={style["sellers-description"]}>
            <div className={style["sellers-title"]}>Sellers</div>
            <div>
              At Casa, we make it easy for real estate owners to sell their
              properties. If your application to sell a property on Casa is
              accepted, our team will work tirelessly to sell your property
              within 3-6 months.
            </div>
            <div>
              <button className={style["about-us-button"]}>
                <Link
                  to="https://forms.gle/mEh4qBhYjgduY3r68"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about"
                >
                  Apply to be a seller &rarr;
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
