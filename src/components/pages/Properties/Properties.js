import React, { useState, useEffect } from "react";
import style from "./Properties.module.css";
import { Link } from "react-router-dom";
import img1 from "./background.jpg";

function Properties() {
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
                Properties
                <p className={style["slogan"]}>
                  Take a look at the properties we are currently offering &nbsp;
                  &darr;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style["what-we-do"]}>
        <div className={style["what-we-do-container"]}>
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
          <div className={style["what-we-do-block"]}>
            <img src={img1} className={style["property-image"]} />
            <p className={style["address"]}>1600 Pennsylvania Ave</p>
            <p className={style["stats"]}>House Stats</p>
            <div className={style["stats-bar"]}></div>
            <button className={style["share-button"]}>Buy a share</button>
          </div>
        </div>
      </div>
      <div className={style["what-we-do"]} style={{marginTop: "-40px", paddingBottom: "30px"}}>
        <div className={style["what-we-do-container"]}>
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
          <div className={style["what-we-do-block"]}>
            <img src={img1} className={style["property-image"]} />
            <p className={style["address"]}>1600 Pennsylvania Ave</p>
            <p className={style["stats"]}>House Stats</p>
            <div className={style["stats-bar"]}></div>
            <button className={style["share-button"]}>Buy a share</button>
          </div>
        </div>
      </div>
      <div className={style["what-we-do"]} style={{marginTop: "-40px", paddingBottom: "30px"}}>
        <div className={style["what-we-do-container"]}>
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
          <div className={style["what-we-do-block"]}>
            <img src={img1} className={style["property-image"]} />
            <p className={style["address"]}>1600 Pennsylvania Ave</p>
            <p className={style["stats"]}>House Stats</p>
            <div className={style["stats-bar"]}></div>
            <button className={style["share-button"]}>Buy a share</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Properties;
