const SearchBar = () => {
  return (
    <form>
      <input
        type="text"
        className="placeholder:text-sm placeholder:italic placeholder:text-slate-400 border border-slate-300 rounded-md py-[10px] px-3 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 duration-300"
        placeholder="Search book by title"
      />
    </form>
  );
};

export default SearchBar;
