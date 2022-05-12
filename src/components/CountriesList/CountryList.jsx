import CountryItem from "./CountryItem";

const CountryList = ({ countries, isLoading }) => {
  return (
    <ul className="w-10/12 max-w-xl mx-auto sm:max-w-full sm:w-full sm:grid sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {isLoading && (
        <>
          <CountryItem loading={true} />
          <CountryItem loading={true} />
          <CountryItem loading={true} />
          <CountryItem loading={true} />
          <CountryItem loading={true} />
          <CountryItem loading={true} />
          <CountryItem loading={true} />
          <CountryItem loading={true} />
          <CountryItem loading={true} />
          <CountryItem loading={true} />
          <CountryItem loading={true} />
          <CountryItem loading={true} />
        </>
      )}
      {countries.length > 0 &&
        !isLoading &&
        countries.map((country) => (
          <CountryItem
            key={country.cca3}
            flagUrl={country.flags.svg}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            countryId={country.cca3}
          />
        ))}
    </ul>
  );
};

export default CountryList;
