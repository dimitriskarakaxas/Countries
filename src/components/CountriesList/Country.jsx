import { Skeleton } from "@mantine/core";

const Country = ({ name, population, region, capital, flagUrl, loading }) => {
  if (loading) {
    return (
      <li className="bg-white dark:bg-dark-blue-dm shadow-lg rounded-lg overflow-hidden mb-8">
        <Skeleton width="100%" className="aspect-[5/3]" />
        <div className="p-6 pb-12">
          <Skeleton height={20} width="70%" className="mb-6" />
          <Skeleton height={14} width="70%" className="mb-3" />
          <Skeleton height={14} width="70%" className="mb-3" />
          <Skeleton height={14} width="70%" />
        </div>
      </li>
    );
  }

  return (
    <li className="bg-white dark:bg-dark-blue-dm shadow-lg rounded-lg overflow-hidden mb-8">
      <div>
        <img
          src={flagUrl}
          alt=""
          className="w-full object-cover aspect-[5/3]"
        />
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
