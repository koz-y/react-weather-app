type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (event: React.FormEvent<HTMLFormElement>) => void;
  city: string;
};

const Form = ({ getWeather, setCity, city }: FormPropsType) => {
  return (
    <div>
      <form onSubmit={getWeather}>
        <input
          type={"text"}
          name="city"
          placeholder="City name"
          onChange={(event) => setCity(event.target.value)}
          value={city}
          required
        ></input>
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
