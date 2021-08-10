import styled from "styled-components";
import { useEffect, useState } from "react";
import img from "./starter-code/assets/desktop/bg-image-daytime.jpg";
import nightImg from "./starter-code/assets/desktop/bg-image-nighttime.jpg";
import sunIcon from "./starter-code/assets/desktop/icon-sun.svg";
import nightIcon from "./starter-code/assets/desktop/icon-moon.svg";
import refreshIcon from "./starter-code/assets/desktop/icon-refresh.svg";
import upArrow from "./starter-code/assets/desktop/icon-arrow-up.svg";

const Header = styled.header`
  background-image:linear-gradient( rgba(46, 49, 49, 0.3), rgba(0,0,0,0.1)), ${({
    background,
  }) =>
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
  }
  .headerTextIconFlex {
    display: flex;
  }
  .headerTextIconFlex img {
    margin-right: 10px;
  }
  .refresh {
    border: none;
    background: none;
    color:
    .refresh img {
      background-color:black
    }
   
`;

const Section = styled.section`
  background-color: lightgrey;
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
    padding-top: 50px;
  }
  h3 {
    font-size: 3rem;
    padding-top: 15px;
  }
  .infoDisplay2 {
    border-left: 2px solid black;
  }
  .infoDisplay h3 {
    padding-bottom: 80px;
  }
  .infoDisplay2 p {
    padding-left: 60px;
  }
  .infoDisplay2 h3 {
    padding-bottom: 80px;
    padding-left: 60px;
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
    console.log(realGreeting);
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
              <h3>GOOD {greeting} ITS CURRENTLY</h3>
            </div>
            <h1>{realTime}</h1>

            <div className="headerBottomFlex">
              <div>
                <h4>
                  IN {props.city === "" ? "WHERE ARE YOU?" : props.city},
                  {props.region},{props.country}
                </h4>
              </div>
              <div className="infoButton">
                <button className="arrow" onClick={() => setOpen(!open)}>
                  <h6>More</h6> <img src={upArrow} alt="up arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <main>
        <Section open={open}>
          <div className="infoFlex  wrapper">
            <div className="infoDisplay">
              <p>Current Time Zone</p>
              <h3>{props.timezone}</h3>
              <p>Day of Year</p>
              <h3>{props.dayOfYear}</h3>
            </div>

            <div className="infoDisplay2">
              <p>Day of Week</p>
              <h3>{props.dayOfWeek}</h3>
              <p>Week Number</p>
              <h3>{props.weekNumber}</h3>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default Display;
