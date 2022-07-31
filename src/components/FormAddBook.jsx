import { Link } from "react-router-dom";

const FormAddBook = () => {
  return (
    <>
      <div className="w-full h-full bg-black/50">asdjkasdjl</div>
      <form className="container fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border p-10 rounded-xl">
        <div className="border-b border-slate-200 flex flex-row justify-between items-center pb-5">
          <h1 className="text-xl text-primary font-bold">Add New Book</h1>
          <Link to="/">
            <button className="bg-btRed px-3 py-2 text-white rounded-[10px] hover:opacity-90 duration-300">
              ✖
            </button>
          </Link>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <label htmlFor="inputTitle" className="flex flex-col">
            <span className="pb-2 font-medium w-fit">Title</span>
            <input
              type="text"
              id="inputTitle"
              placeholder="Insert book title"
              className="placeholder:text-sm placeholder:italic placeholder:text-slate-300 border border-slate-300 rounded-md py-[10px] px-3 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 duration-300"
            />
          </label>
          <label htmlFor="inputAuthor" className="flex flex-col">
            <span className="pb-2 font-medium w-fit">Author</span>
            <input
              type="text"
              id="inputAuthor"
              placeholder="Insert book author"
              className="placeholder:text-sm placeholder:italic placeholder:text-slate-300 border border-slate-300 rounded-md py-[10px] px-3 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 duration-300"
            />
          </label>
          <label htmlFor="inputYear" className="flex flex-col">
            <span className="pb-2 font-medium w-fit">Year</span>
            <input
              type="text"
              id="inputYear"
              placeholder="Insert book year"
              className="placeholder:text-sm placeholder:italic placeholder:text-slate-300 border border-slate-300 rounded-md py-[10px] px-3 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 duration-300"
            />
          </label>
          <label htmlFor="isRead" className="w-fit">
            <input type="checkbox" id="isRead" />
            <span className="font-medium pl-3">I have read this book</span>
          </label>
          <input
            type="submit"
            value="Add Book"
            className="py-4 bg-primary rounded-lg text-white font-medium text-sm cursor-pointer hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30 duration-300"
            disabled
          />
        </div>
      </form>
    </>
  );
};

export default FormAddBook;
