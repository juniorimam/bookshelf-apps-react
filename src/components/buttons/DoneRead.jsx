const DoneRead = ({ data }) => {
  function handleClick() {
    fetch(`http://localhost:8000/books/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, isCompleted: !data.isCompleted }),
    }).then((res) => {
      res.ok === true
        ? console.log("Update success \n", data)
        : console.log("Error update");
    });
  }

  return (
    <button
      className="px-4 py-2 bg-btGreen text-white flex flex-row justify-center items-center lg:basis-2/5 md:basis-1/2 rounded-lg hover:shadow-lg duration-300"
      onClick={handleClick}
    >
      <div>✔</div>
      <span className="pl-3 text-xs text-left">Done Reading</span>
    </button>
  );
};

export default DoneRead;
