import { useState } from "react";

const Form = () => {
  const [city, setCity] = useState("");
  return (
    <div>
      <form>
        <input
          type={"text"}
          name="city"
          placeholder="City name"
          onChange={(event) => setCity(event.target.value)}
        ></input>
        <button type="submit"> Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
