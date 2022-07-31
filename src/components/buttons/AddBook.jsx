import "../../index.css";

const AddBook = () => {
  return (
    <>
      <button className="addBook flex flex-row items-center text-white bg-primary px-3 py-[7px] m-0 rounded-lg duration-500">
        <div className="flex justify-center items-center w-9 h-9 text-lg bg-[#2a7cf6] rounded-md">
          +
        </div>
        <span className="font-medium text-sm pl-[10px]">Add New Book</span>
      </button>
    </>
  );
};

export default AddBook;
