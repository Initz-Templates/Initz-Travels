import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Recommendation.css";
import SingaporeTripPage from "./SingaPore";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

function Recommendation() {
  const [active, setActive] = useState();

  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore is an island and city state, the Smallest Country.",
      cost: "38,800",
      duration: "Approx 2 night trip",
      distance: "5,961 KM",
      link:"/singapore"
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",// beaches and islands
      cost: "54,200",
      duration: "Approx 2 night trip",
      distance:"4,182 KM",
      link:"/thailand"
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, also known as City of Love.",
      cost: "45,500",
      duration: "Approx 2 night trip",
      distance:"8,717 KM",
      link:"/paris"
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
      distance:"11,965 KM",
      link:"/newzealand"
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
      distance:"14,662 KM",
      link:"/borabora"
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
      distance:"7,480 KM",
      link:"/london"
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>Recommend</h1>
        <div className="CategoryBar">
          <ul>
            {packages.map((pkg, index) => {
              return (
                <li
                  key={index}
                  className={active === index + 1 ? "Active" : ""}
                  onClick={() => setActive(index + 1)}>
                  {pkg}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="recommendationBox">
        {data.map((item) => {
          return (
            <Link to={item.link} key={item.title || index}>
            <div className="box">
              <div className="image">
                <img src={item.image} alt="image" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>

              <div className="price">
                <div>
                  <img src={info1} alt="image" />
                  <img src={info2} alt="image" />
                  <img src={info3} alt="image" />
                </div>

                <p>${item.cost}</p>
              </div>

              <div className="details">
                <p>{item.distance}</p>
                <p>{item.duration}</p>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Recommendation;
