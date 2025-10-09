import { useState } from "react";
import useCards from "../hooks/useCards";
import CountedApps from "./CountedApps";

const AllAppsList = () => {
    const { cards } = useCards();
  const [search, setSearch] = useState('');
 
  const term = search.trim().toLocaleLowerCase()
  const searchItems = term ? cards.filter(card => card.title.toLocaleLowerCase().includes(term)) : cards 




  return (
    <div>
      <div className="my-20 text-center flex-col">
        <h1 className="text-5xl mb-5 font-bold text-black">
          Our All Applications
        </h1>
        <p className="text-xl">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between m-5">
        <h1 className="text-2xl md:text-4xl font-semibold">
          ({searchItems.length}) Apps Found{" "}
        </h1>
        <label className="input">
          <input value={search}
            onChange={e => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-11 p-3 md:p-4 container mx-auto">
        {searchItems.map((app, ind) => (
          <CountedApps app={app} key={ind}></CountedApps>
        ))}
      </div>
    </div>
  );
};

export default AllAppsList;
