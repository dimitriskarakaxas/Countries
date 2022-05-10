import { useCallback, useEffect, useState } from "react";

import Container from "../components/UI/Container";
import InputSearch from "../components/InputSearch/InputSearch";
import CountriesList from "../components/CountriesList/CountriesList";
import useHttp from "../hooks/useHttp";

const Home = () => {
  const [enteredSearchValue, setEnteredSearchValue] = useState("");
  const [countries, setCountries] = useState([]);

  const transformData = useCallback((countries) => {
    setCountries(countries);
  }, []);

  const {
    error,
    isLoading,
    sendRequest: fetchCountries,
  } = useHttp(transformData);

  useEffect(() => {
    const url = enteredSearchValue
      ? `https://restcountries.com/v2/name/${enteredSearchValue}`
      : "https://restcountries.com/v2/all";
    fetchCountries({ url });
  }, [fetchCountries, enteredSearchValue]);

  const searchValueChangeHandler = (newValue) => {
    setEnteredSearchValue(newValue);
  };

  return (
    <section className="py-8">
      <Container>
        <InputSearch
          enteredValue={enteredSearchValue}
          onValueChange={searchValueChangeHandler}
        />
        {!error && (
          <CountriesList countries={countries} isLoading={isLoading} />
        )}
        {error && <p className="text-center">{error}</p>}
      </Container>
    </section>
  );
};

export default Home;
