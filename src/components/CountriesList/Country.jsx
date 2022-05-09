const Country = ({ name, population, region, capital, flagUrl }) => {
  return (
    <li className="bg-white dark:bg-dark-blue-dm shadow-lg rounded-lg overflow-hidden mb-8">
      <div>
        <img src={flagUrl} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 pb-12">
        <h3 className="text-lg font-extrabold mb-4">{name}</h3>
        <p className="font-semibold mb-1">
          Population:{" "}
          <span className="font-normal">
            {population.toLocaleString("en-US")}
          </span>
        </p>
        <p className="font-semibold mb-1">
          Region: <span className="font-normal">{region}</span>
        </p>
        <p className="font-semibold">
          Capital: <span className="font-normal">{capital}</span>
        </p>
      </div>
    </li>
  );
};

export default Country;
