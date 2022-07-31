import { Link } from "react-router-dom";
import BooksCard from "./BooksCard";
import BooksCounter from "./BooksCounter";

const BooksList = ({
  bgColorList,
  bgColorCounter,
  textCounterColor,
  title,
  books,
}) => {
  return (
    <div
      className="rounded-xl p-8"
      style={{
        backgroundColor: bgColorList,
      }}
    >
      <div className="flex flex-row gap-x-3 items-center">
        <div className="uppercase text-secondary font-semibold tracking-widest">
          {title}
        </div>
        <BooksCounter
          bgColor={bgColorCounter}
          booksCount={books.length}
          textCounterColor={textCounterColor}
        />
      </div>
      <div className="mt-6 grid grid-cols-2 grid-flow-row gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-md py-6 px-7 flex flex-col gap-y-1 items-start"
          >
            <BooksCard data={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
