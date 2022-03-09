type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperture: string;
    conditionText: string;
    icon: string;
  };
};

const Results = (props: ResultsPropsType) => {
  return (
    <div>
      {props.results.cityName && <p>{props.results.cityName}</p>}
      {props.results.country && <p>{props.results.country}</p>}
      {props.results.temperture && <p>{props.results.temperture}</p>}
      {props.results.conditionText && (
        <div>
          <img src={props.results.icon} alt="icon"></img>
          <span>{props.results.conditionText}</span>
        </div>
      )}
    </div>
  );
};

export default Results;
