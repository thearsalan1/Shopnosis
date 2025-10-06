import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  };
  return (
    <div className="mb-4 flex items-center justify-end">
      <select
        onChange={handleSortChange}
        value={searchParams.get("sortBy") || "Default"}
        name=""
        id="sort"
        className="border p-2 rounded-md focus:outline-none"
      >
        <option value="Default">Default</option>
        <option value="priceAsc">Price:Low To High</option>
        <option value="priceDesc">Priec:High To Low</option>
        <option value="popularity">Popular</option>
      </select>
    </div>
  );
};

export default SortOptions;
