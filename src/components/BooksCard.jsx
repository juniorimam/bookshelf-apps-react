import { Link } from "react-router-dom";
import DeleteBook from "./buttons/DeleteBook";
import DoneRead from "./buttons/DoneRead";

const BooksCard = ({ data }) => {
  return (
    <>
      <Link to={`/blog/${data.id}`}>
        <h3 className="font-semibold">{data.title}</h3>
        <h4 className="text-secondary text-sm">{data.author}</h4>
        <p className="text-secondary text-sm">{data.year}</p>
      </Link>
      <div className="w-full mt-5 flex flex-row items-center gap-x-3">
        <DoneRead data={data} />
        <DeleteBook data={data} />
      </div>
    </>
  );
};

export default BooksCard;
