import { useEffect, useState, useCallback } from "react";

import Country from "./Country";
import useHttp from "../../hooks/useHttp";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  const transformData = useCallback((countries) => {
    setCountries(countries);
  }, []);

  const { isLoading, sendRequest: fetchCountries } = useHttp(transformData);

  useEffect(() => {
    fetchCountries({ url: "https://restcountries.com/v2/all" });
  }, [fetchCountries]);

  return (
    <ul className="w-10/12 max-w-xl mx-auto sm:max-w-full sm:w-full sm:grid sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {isLoading && (
        <>
          <Country loading={true} />
          <Country loading={true} />
          <Country loading={true} />
          <Country loading={true} />
          <Country loading={true} />
          <Country loading={true} />
          <Country loading={true} />
          <Country loading={true} />
          <Country loading={true} />
          <Country loading={true} />
          <Country loading={true} />
          <Country loading={true} />
        </>
      )}
      {countries.length > 0 &&
        !isLoading &&
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
