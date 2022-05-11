import { useCallback, useEffect, useState } from "react";

import Container from "../components/UI/Container";
import InputSearch from "../components/InputSearch/InputSearch";
import CountriesList from "../components/CountriesList/CountriesList";
import useHttp from "../hooks/useHttp";
import useDebounce from "../hooks/useDebounce";

const Home = () => {
  const [enteredSearchValue, setEnteredSearchValue] = useState("");
  const [countries, setCountries] = useState([]);

  const debouncedSearchTerm = useDebounce(enteredSearchValue, 500);

  const transformData = useCallback((countries) => {
    setCountries(countries);
  }, []);

  const {
    error,
    isLoading,
    sendRequest: fetchCountries,
  } = useHttp(transformData);

  useEffect(() => {
    const url = debouncedSearchTerm
      ? `https://restcountries.com/v2/name/${debouncedSearchTerm}`
      : "https://restcountries.com/v2/all";
    fetchCountries({ url });
  }, [fetchCountries, debouncedSearchTerm]);

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
