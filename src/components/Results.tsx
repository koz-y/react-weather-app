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
      <h1>Resultページ</h1>
      <p>{props.results.cityName}</p>
    </div>
  );
};

export default Results;
