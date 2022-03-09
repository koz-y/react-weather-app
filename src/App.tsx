import { useState } from "react";

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
  const getWeather = (event: any) => {
    event.preventDefault();
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=e45f4be218cb49259cf125320222201&q=London&aqi=no"
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
      });
  };

  return (
    <div className="App">
      <div>
        <Title></Title>
        <Form setCity={setCity} getWeather={getWeather}></Form>
        <Results results={results}></Results>
      </div>
    </div>
  );
}

export default App;
