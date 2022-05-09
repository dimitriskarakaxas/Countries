import { useEffect, useState, useCallback } from "react";
import { Skeleton } from "@mantine/core";

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
    <ul className={`w-10/12 max-w-xl mx-auto`}>
      {isLoading && (
        <>
          <li className="mb-8">
            <Skeleton height={341} className="rounded-lg" />
          </li>
          <li className="mb-8">
            <Skeleton height={341} className="rounded-lg" />
          </li>
          <li className="mb-8">
            <Skeleton height={341} className="rounded-lg" />
          </li>
          <li>
            <Skeleton height={341} className="rounded-lg" />
          </li>
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
