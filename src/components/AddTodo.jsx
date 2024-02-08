const AddTodo = () => {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-xl text-center mx-auto w-full font-bold my-10 text-green-800 hover:text-green-900">
        Add Task
      </h1>

      <form className="flex container mx-auto gap-1 my-10">
        <input
          type="text"
          className="block p-2.5 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
        />
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
