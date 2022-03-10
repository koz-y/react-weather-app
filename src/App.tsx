import React, { useState } from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";

import "./App.css";

type ResultsStateType = {
  country: string;
  cityName: string;
  temperture: string;
  conditionText: string;
  icon: string;
};

function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperture: "",
    conditionText: "",
    icon: "",
  });
  const getWeather = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=e45f4be218cb49259cf125320222201&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperture: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        });
        setCity("");
      })
      .catch((err) =>
        alert(
          "エラーが発生しました。ページをリロードして、もう一度トライしてください。"
        )
      );
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Title></Title>
        <Form setCity={setCity} getWeather={getWeather} city={city}></Form>
        <Results results={results}></Results>
      </div>
    </div>
  );
}

export default App;
