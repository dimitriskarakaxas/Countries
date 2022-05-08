import { useEffect, useState } from "react";

import Country from "./Country";
import useHttp from "../../hooks/useHttp";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  const transformData = (countries) => {
    setCountries(countries);
  };

  const { sendRequest: fetchCountries } = useHttp(
    { url: "https://restcountries.com/v2/all" },
    transformData
  );

  useEffect(() => {
    fetchCountries();
  }, []);

  console.log(countries);

  return (
    <ul className="w-10/12 max-w-xl mx-auto">
      {countries.length > 0 &&
        countries.map((country, idx) => (
          <Country
            key={country.numericCode}
            flagUrl={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
    </ul>
  );
};

export default CountriesList;
