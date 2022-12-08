const Search = () => {
    return (
        <div className="bg-white flex items-center justify-start p-1.5 rounded-lg gap-2">
            <img
                src="/src/assets/images/icons/search.svg"
                alt="search"
                className="w-7 cursor-pointer hover:bg-slate-100 transition rounded p-1"
            />
            <input
                type="text"
                className="outline-none text-xs p-1 w-56"
                placeholder="Search NFTs"
            />
            <img
                src="/src/assets/images/icons/filter.svg"
                alt="filter"
                className="w-7 cursor-pointer hover:bg-slate-100 transition rounded p-1"
            />
        </div>
    );
};

export default Search;
