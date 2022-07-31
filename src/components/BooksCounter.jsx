const BooksCounter = ({ bgColor, booksCount, textCounterColor }) => {
  return (
    <div
      className="rounded-full py-2 px-4 text-sm font-semibold"
      style={{
        backgroundColor: bgColor,
        color: textCounterColor,
      }}
    >
      {booksCount}
    </div>
  );
};

export default BooksCounter;
