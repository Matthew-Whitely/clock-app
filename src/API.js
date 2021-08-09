import Display from "./Display";
import { useEffect, useState } from "react";
const API = () => {
  //QUOTE
  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [refresh, setRefresh] = useState(false);

  //TIME AND timezone/days/week//dayofweek
  const [time, setTime] = useState("");
  const [timezone, setTimeZone] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [dayOfYear, setDayOfYear] = useState("");
  const [weekNumber, setWeekNumbers] = useState("");

  //CITY
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");

  const timeFunction = () => {
    const timer = time.substr(11, 12);
    const des = [...timer];
    const actualTime = des.slice(0, 5);
    // setRealTime(actualTime);
  };
  timeFunction();
  //button to refresh the quote
  const refreshQuote = () => {
    setRefresh(!refresh);
  };
  useEffect(() => {
    //states for grabbing then passing data to Dispaly

    //GRABBING TIME API
    const timeApiUrl = "http://worldtimeapi.org/api/ip";
    const cityApiUrl = "https://freegeoip.app/json/";

    fetch(timeApiUrl)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setTime(res.datetime);
        setTimeZone(res.timezone);
        setDayOfWeek(res.day_of_week);
        setDayOfYear(res.day_of_year);
        setWeekNumbers(res.week_number);
        console.log(res.day_of_week, res.day_of_year, res.week_number);

        console.log(res);
      });
    //CITY
    fetch(cityApiUrl)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setCity(res.city);
        setRegion(res.country_code);
      });
    const quoteApiUrl = "https://api.quotable.io/random";
    fetch(quoteApiUrl)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
        console.log(`${data.content} —${data.author}`);
      });
  }, []);

  useEffect(() => {
    const quoteApiUrl = "https://api.quotable.io/random";
    fetch(quoteApiUrl)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
        console.log(`${data.content} —${data.author}`);
      });
    // setRefresh(false);
  }, [refresh]);
  return (
    <div>
      <Display
        quote={quote}
        author={quoteAuthor}
        refresh={refreshQuote}
        time={time}
        city={city}
        region={region}
        timezone={timezone}
        dayOfWeek={dayOfWeek}
        dayOfYear={dayOfYear}
        weekNumber={weekNumber}
      />
    </div>
  );
};

export default API;
