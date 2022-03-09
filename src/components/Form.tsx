type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form = (props: FormPropsType) => {
  return (
    <div>
      <form onSubmit={props.getWeather}>
        <input
          type={"text"}
          name="city"
          placeholder="City name"
          onChange={(event) => props.setCity(event.target.value)}
        ></input>
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
