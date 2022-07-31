const DeleteBook = ({ data }) => {
  function handleClick() {
    fetch(`http://localhost:8000/books/${data.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok === true) console.log("Delete success \n", data);
      })
      .catch((err) => {
        console.log("Error delete \n", err.message);
      });
  }

  return (
    <button
      className="w-fit px-4 py-2 text-btRed flex flex-row items-center rounded-lg hover:brightness-90 duration-300"
      onClick={handleClick}
    >
      <div>🗑</div>
      <span className="pl-3 text-xs text-left">Delete Book</span>
    </button>
  );
};

export default DeleteBook;
