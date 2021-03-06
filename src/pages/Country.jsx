import { useState, useCallback, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@mantine/core";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

import Container from "../components/UI/Container";
import useHttp from "../hooks/useHttp";

const Country = () => {
  const [country, setCountry] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const transformData = useCallback((country) => {
    const [
      {
        name,
        population,
        region,
        subregion,
        capital,
        tld,
        currencies,
        languages,
        borders,
        flags,
      },
    ] = country;

    const updatedCurrencies = [];
    Object.keys(currencies).forEach((key) => {
      updatedCurrencies.push({
        name: currencies[key].name,
        symbol: currencies[key].symbol,
      });
    });

    const updatedLanguages = [];
    Object.keys(languages).forEach((key) => {
      updatedLanguages.push(languages[key]);
    });

    const nativeName = name.nativeName[Object.keys(name.nativeName)[0]].common;

    const storedCountry = {
      name: name.common,
      nativeName,
      flagUrl: flags.svg,
      population,
      capital: capital[0],
      tld: tld[0],
      region,
      subregion,
      borders: borders ? borders : [],
      currencies: updatedCurrencies,
      languages: updatedLanguages,
    };

    setCountry(storedCountry);
  }, []);

  const {
    // error,
    // isLoading,
    sendRequest: fetchCountry,
  } = useHttp(transformData);

  useEffect(() => {
    fetchCountry({
      url: `https://restcountries.com/v3.1/alpha/${params.countryId}`,
    });
  }, [fetchCountry, params]);

  return (
    <Container>
      <Button
        leftIcon={<HiOutlineArrowNarrowLeft className="text-lg" />}
        className="bg-white text-inherit font-normal shadow-md px-6 hover:bg-white hover:text-inherit dark:bg-dark-blue-dm"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
      {country && (
        <div className="mt-16 md:flex md:justify-between md:items-center">
          <div className="group-hover:scale-90 transition-transform md:w-[46%]">
            <img
              src={`${country.flagUrl}`}
              alt={`${country.name}'s flag`}
              className="w-full object-cover aspect-[5/3]"
            />
          </div>
          <div className="mt-10 md:w-[46%] lg:w-[40%] md:mt-0">
            <h2 className="text-xl font-extrabold mb-4">{country.name}</h2>
            <div className="md:flex md:justify-between">
              <div className="">
                <p className="font-semibold mb-2">
                  Native Name:{" "}
                  <span className="font-normal">{country.nativeName}</span>
                </p>
                <p className="font-semibold mb-2">
                  Population:{" "}
                  <span className="font-normal">
                    {country.population.toLocaleString("en-US")}
                  </span>
                </p>
                <p className="font-semibold mb-2">
                  Region: <span className="font-normal">{country.region}</span>
                </p>
                <p className="font-semibold mb-2">
                  Sub Region:{" "}
                  <span className="font-normal">{country.subregion}</span>
                </p>
                <p className="font-semibold mb-8">
                  Capital:{" "}
                  <span className="font-normal">{country.capital}</span>
                </p>
              </div>
              <div className="md:ml-6">
                <p className="font-semibold mb-2">
                  Top Level Domain:{" "}
                  <span className="font-normal">{country.tld}</span>
                </p>
                <p className="font-semibold mb-2">
                  Currencies:{" "}
                  {country?.currencies.length > 0 &&
                    country?.currencies.map((currency, idx) => (
                      <span className="font-normal" key={idx}>
                        {currency.name} ({currency.symbol})
                        {idx !== country?.currencies.length - 1 ? ", " : ""}
                      </span>
                    ))}
                </p>
                <p className="font-semibold mb-8">
                  Languages:{" "}
                  {country.languages.length > 0 &&
                    country.languages.map((language, idx) => (
                      <span className="font-normal" key={idx}>
                        {language}
                        {idx !== country.languages.length - 1 ? ", " : ""}
                      </span>
                    ))}
                </p>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <h4 className="text-lg font-semibold mb-2 md:mr-3 md:mb-0 md:shrink-0">
                Border Countries:
              </h4>
              <ul className="flex flex-wrap gap-2">
                {country?.borders.length > 0 &&
                  country?.borders.map((border, idx) => (
                    <li
                      className="bg-white dark:bg-dark-blue-dm shadow-md rounded-sm"
                      key={idx}
                    >
                      <Link
                        to={`/country/${border}`}
                        className="px-6 py-1 inline-block"
                      >
                        {border}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Country;
