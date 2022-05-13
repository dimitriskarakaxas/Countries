import { useCallback, useEffect, useState } from "react";

import Container from "../components/UI/Container";
import InputSearch from "../components/InputSearch/InputSearch";
import ContinentSelector from "../components/ContinentSelector/ContinentSelector";
import CountryList from "../components/CountriesList/CountryList";
import useHttp from "../hooks/useHttp";
import useDebounce from "../hooks/useDebounce";

const Home = () => {
  const [enteredSearchValue, setEnteredSearchValue] = useState("");
  const [selectedContinent, setSelectedContinent] = useState(false);
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
      ? `https://restcountries.com/v3.1/name/${debouncedSearchTerm}`
      : "https://restcountries.com/v3.1/all";
    fetchCountries({ url });
  }, [fetchCountries, debouncedSearchTerm]);

  useEffect(() => {
    if (selectedContinent === false) return;
    const url = selectedContinent
      ? `https://restcountries.com/v3.1/region/${selectedContinent}`
      : "https://restcountries.com/v3.1/all";
    fetchCountries({ url });
  }, [fetchCountries, selectedContinent]);

  const searchValueChangeHandler = (newValue) => {
    setEnteredSearchValue(newValue);
  };

  const continentChangeHandler = (newValue) => {
    setSelectedContinent(newValue);
  };

  return (
    <Container>
      <div className="mb-10 sm:flex sm:justify-between">
        <div className="mb-10 sm:mb-0 sm:w-3/5 sm:max-w-lg">
          <InputSearch
            enteredValue={enteredSearchValue}
            onValueChange={searchValueChangeHandler}
          />
        </div>
        <div className="w-3/5 sm:max-w-[200px]">
          <ContinentSelector
            selectedContinent={selectedContinent}
            onContinentChange={continentChangeHandler}
          />
        </div>
      </div>
      {!error && <CountryList countries={countries} isLoading={isLoading} />}
      {error && <p className="text-center">{error}</p>}
    </Container>
  );
};

export default Home;
