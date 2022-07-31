import book from "../assets/book.svg";
import AddBookButton from "./buttons/AddBook";
import SearchBar from "./SearchBar";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="container mx-auto py-5 sticky top-0">
      <div className="bg-navbar py-4 px-6 bg-white/50 rounded-xl flex flex-row items-center justify-between group">
        <div className="flex flex-row items-center gap-x-3">
          <img
            src={book}
            alt="Book Image"
            className="w-10 group-hover:rotate-12 duration-300"
          />
          <h2 className="font-bold text-primary text-xl">Bookshelf Apps.</h2>
        </div>
        <div className="flex flex-row items-center gap-x-4">
          <SearchBar />
          <AddBookButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
