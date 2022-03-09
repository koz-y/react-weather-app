import { useState } from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";

import "./App.css";

function App() {
  const [city, setCity] = useState<string>("");
  const getWeather = (event: any) => {
    event.preventDefault();
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=e45f4be218cb49259cf125320222201&q=London&aqi=no"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="App">
      <div>
        <Title></Title>
        <Form setCity={setCity} getWeather={getWeather}></Form>
        <Results></Results>
      </div>
    </div>
  );
}

export default App;
