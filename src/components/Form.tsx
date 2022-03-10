type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ getWeather, setCity }: FormPropsType) => {
  return (
    <div>
      <form onSubmit={getWeather}>
        <input
          type={"text"}
          name="city"
          placeholder="City name"
          onChange={(event) => setCity(event.target.value)}
        ></input>
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
