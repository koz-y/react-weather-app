import { useState } from "react";

const Form = () => {
  const [city, setCity] = useState<string>("");
  const getWeather = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=e45f4be218cb49259cf125320222201&q=London&aqi=no"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <form>
        <input
          type={"text"}
          name="city"
          placeholder="City name"
          onChange={(event) => setCity(event.target.value)}
        ></input>
        <button type="submit" onClick={getWeather}>
          Get Weather
        </button>
      </form>
    </div>
  );
};

export default Form;
