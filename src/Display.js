import styled from "styled-components";
import { useEffect, useState } from "react";
import img from "./starter-code/assets/desktop/bg-image-daytime.jpg";
import nightImg from "./starter-code/assets/desktop/bg-image-nighttime.jpg";
import tabletImgDay from "./starter-code/assets/tablet/bg-image-daytime.jpg";
import tabletImgNight from "./starter-code/assets/tablet/bg-image-nighttime.jpg";
import mobileImgDay from "./starter-code/assets/mobile/bg-image-daytime.jpg";
import mobileImgNight from "./starter-code/assets/mobile/bg-image-nighttime.jpg";
import sunIcon from "./starter-code/assets/desktop/icon-sun.svg";
import nightIcon from "./starter-code/assets/desktop/icon-moon.svg";
import refreshIcon from "./starter-code/assets/desktop/icon-refresh.svg";
import upArrow from "./starter-code/assets/desktop/icon-arrow-up.svg";

const Header = styled.header`
  background-image: linear-gradient(rgba(46, 49, 49, 0.3), rgba(0, 0, 0, 0.1)),
    ${({ background }) =>
      (background >= 1 && background <= 4) ||
      (background >= 18 && background <= 24)
        ? `url(${nightImg})`
        : `url(${img})`};

  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  .quote {
    font-size: 1.4rem;
    padding-top: 70px;
    padding-bottom: 10px;
  }
  .quoteFlex {
    display: flex;
    // align-items: center;
    visibility: ${({ open }) => (open ? "hidden" : "visible")};
  }
  .quoteText {
    width: 50%;
  }
  .quoteRefresh {
    padding-top: 100px;
    margin-left: 40px;
  }
  .flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    transform: ${({ open }) => (open ? "translateY(-45%)" : "translateY(0)")};
    transition: all 0.3s linear;
  }
  .headerText {
    margin-bottom: 100px;
  }
  p {
    color: white;
  }
  h1 {
    font-size: 12rem;
    color: white;
  }
  h3,
  h4 {
    text-transform: uppercase;
    color: white;
    letter-spacing: 3px;
  }
  .headerBottomFlex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .headerTextIconFlex {
    display: flex;
    align-items: center;
  }
  .headerTextIconFlex img {
    margin-right: 10px;
  }
  .refresh {
    border: none;
    background: none;
    cursor: pointer;
  }
  .zoneAbrr {
    display: flex;
    align-items: flex-end;
  }
  .zoneAbrr p {
    padding-bottom: 40px;
    font-size: 1.4rem;
  }
  .arrow {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 3px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .arrow h6 {
    padding-right: 10px;
    font-size: 1.2rem;
    letter-spacing: 2px;
  }

  .arrow img {
    transform: ${({ open }) => (open ? "scaleY(1);" : "scaleY(-1);")};
  }

  @media (max-width: 790px) {
    background-image: linear-gradient(rgba(46, 49, 49, 0.3), rgba(0, 0, 0, 0.1)),
      ${({ background }) =>
        (background >= 1 && background <= 4) ||
        (background >= 18 && background <= 24)
          ? `url(${tabletImgNight})`
          : `url(${tabletImgDay})`};
    span {
      display: none;
    }
    .headerBottomFlex {
      flex-flow: column nowrap;
      align-items: flex-start;
    }
    .headerBottomFlex button {
      margin-top: 20px;
    }
    h1 {
      font-size: 10rem;
    }
    h3,
    h4 {
      font-size: 1.3rem;
    }
    .quoteText {
      width: 100%;
    }
    .zoneAbrr p {
      padding-bottom: 29.4px;
      font-size: 1.4rem;
    }
  }
  @media (max-width: 585px) {
    background-image: linear-gradient(rgba(46, 49, 49, 0.3), rgba(0, 0, 0, 0.1)),
      ${({ background }) =>
        (background >= 1 && background <= 4) ||
        (background >= 18 && background <= 24)
          ? `url(${mobileImgNight})`
          : `url(${mobileImgDay})`};
    h1 {
      font-size: 7rem;
    }
    h3 {
      font-size: 1.3rem;
    }
    h4 {
      font-size: 1rem;
    }
    .quote {
      font-size: 1.1rem;
      padding-top: 15px;
    }
    .quoteRefresh {
      padding-top: 50px;
      margin-left: 20px;
    }
    .zoneAbrr p {
      padding-bottom: 19.4px;
      font-size: 1.4rem;
    }
  }
  @media (max-width: 420px) {
    h1 {
      font-size: 5rem;
    }
    h4 {
      font-size: 0.9rem;
    }
    zoneAbrr p {
      padding-bottom: 11.4px;
      font-size: 1.4rem;
    }
  }
`;

const Section = styled.section`
  background-color: ${({ background }) =>
    (background >= 1 && background <= 4) ||
    (background >= 18 && background <= 24)
      ? `#303030`
      : `lightgrey`};
  position: fixed;
  height: 50vh;
  z-index: 10;
  width: 100%;
  bottom: 0;
  right: 0;
  transform: ${({ open }) => (!open ? "translateY(100%)" : "translateY(0)")};
  transition: all 0.3s linear;
  .infoFlex {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 40px;
  }

  p {
    color: ${({ background }) =>
      (background >= 1 && background <= 4) ||
      (background >= 18 && background <= 24)
        ? `white`
        : `#303030`};
  }

  h3 {
    font-size: 2rem;
    padding-top: 15px;
    color: ${({ background }) =>
      (background >= 1 && background <= 4) ||
      (background >= 18 && background <= 24)
        ? `white`
        : `#303030`};
  }

  .infoDisplay2 {
    border-left: ${({ background }) =>
      (background >= 1 && background <= 4) ||
      (background >= 18 && background <= 24)
        ? `2px solid lightgrey`
        : `2px solid #303030 `};
    margin-bottom: 40px;
  }

  .infoDisplay2 p {
    padding-left: 60px;
  }
  .infoDisplay2 h3 {
    padding-left: 60px;
  }
  .sectionFix {
    padding-bottom: 80px;
    padding-right: 20px;
  }
  @media (max-width: 585px) {
    .infoFlex {
      grid-template-columns: 1fr;
    }
    .mobileSection {
      display: Flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
    }
    .infoDisplay2 {
      border: none;
    }
    .infoDisplay2 p {
      padding-left: 0;
    }
    .sectionFix {
      padding: 0;
    }
    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 420px) {
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

const Display = (props) => {
  // TO OPEN THE MORE INFO
  const [open, setOpen] = useState(false);
  const [realTime, setRealTime] = useState("");
  const [greeting, setGreeting] = useState("");
  const [background, setBackground] = useState();

  useEffect(() => {
    const timer = props.time.substr(11, 12);
    const des = [...timer];
    const actualTime = des.slice(0, 5);
    const greetingTime = des.slice(0, 2);
    const displayTime = actualTime.join("");
    setRealTime(displayTime);
    const greetingTimeNumber = greetingTime.join("");
    const realGreeting = Number(greetingTimeNumber);

    setBackground(realGreeting);

    if (realGreeting >= 5 && realGreeting <= 11) {
      setGreeting("MORNING");
    } else if (realGreeting >= 12 && realGreeting <= 18) {
      setGreeting("AFTERNOON");
    } else if (
      (realGreeting >= 19 && realGreeting <= 24) ||
      (realGreeting >= 1 && realGreeting <= 4)
    ) {
      setGreeting("Evening");
    }
  }, [props.time]);

  return (
    <>
      <Header open={open} background={background}>
        <div className="wrapper flex">
          <div className="quoteFlex">
            <div className="quoteText">
              <p className="quote">{props.quote}</p>
              <p className="author">—{props.author}</p>
            </div>
            <div className="quoteRefresh">
              <button
                className="refresh"
                onClick={() => {
                  props.refresh();
                }}
              >
                <img src={refreshIcon} alt="refresh icon" />
              </button>
            </div>
          </div>
          <div className="headerText">
            <div className="headerTextIconFlex">
              {background >= 5 && background <= 18 ? (
                <img src={sunIcon} alt="sun icon" />
              ) : (
                <img src={nightIcon} alt="Moon icon" />
              )}
              <h3>
                GOOD {greeting} <span>ITS CURRENTLY</span>
              </h3>
            </div>
            <div className="zoneAbrr">
              <h1>{realTime}</h1>
              <p>{props.zoneAbrr}</p>
            </div>

            <div className="headerBottomFlex">
              <div>
                <h4>
                  <span>IN </span>
                  {props.city === "" ? "WHERE ARE YOU?" : props.city},
                  {props.region},{props.country}
                </h4>
              </div>
              <div className="infoButton">
                <button className="arrow" onClick={() => setOpen(!open)}>
                  {open === false ? <h6>MORE</h6> : <h6>LESS</h6>}
                  <img src={upArrow} alt="up arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <main>
        <Section open={open} background={background}>
          <div className="infoFlex  wrapper">
            <div className="infoDisplay">
              <div className="mobileSection">
                <p>Current Time Zone</p>
                <h3 className="sectionFix">{props.timezone}</h3>
              </div>
              <div className="mobileSection">
                <p>Day of Year</p>
                <h3>{props.dayOfYear}</h3>
              </div>
            </div>

            <div className="infoDisplay2">
              <div className="mobileSection">
                <p>Day of Week</p>
                <h3 className="sectionFix">{props.dayOfWeek}</h3>
              </div>
              <div className="mobileSection">
                <p>Week Number</p>
                <h3>{props.weekNumber}</h3>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default Display;
