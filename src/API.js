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
  const [zoneAbrr, setZoneAbrr] = useState("");

  //CITY
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");

  //button to refresh the quote
  const refreshQuote = () => {
    setRefresh(!refresh);
  };
  useEffect(() => {
    //states for grabbing then passing data to Dispaly

    //GRABBING TIME API
    const timeApiUrl = "https://worldtimeapi.org/api/ip";

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

        setZoneAbrr(res.abbreviation);
      })
      .catch((err) => {
        console.error(err);
      });

    const quoteApiUrl = "https://api.quotable.io/random";
    fetch(quoteApiUrl)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      });
    //CITY
    fetch("https://ip-geo-location.p.rapidapi.com/ip/check?format=json", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "416bd0dcc8msha7e6bd427f55873p1744f6jsn44adbd8203c9",
        "x-rapidapi-host": "ip-geo-location.p.rapidapi.com",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCity(data.city.name);
        setRegion(data.area.name);
        setCountry(data.country.name);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const quoteApiUrl = "https://api.quotable.io/random";
    fetch(quoteApiUrl)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch((err) => {
        console.error(err);
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
        country={country}
        timezone={timezone}
        dayOfWeek={dayOfWeek}
        dayOfYear={dayOfYear}
        weekNumber={weekNumber}
        zoneAbrr={zoneAbrr}
      />
    </div>
  );
};

export default API;
