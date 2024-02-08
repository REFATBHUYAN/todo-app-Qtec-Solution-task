const todos = [
  {
    task: "react course",
    status: "Pending",
  },
  {
    task: "next course",
    status: "Pending",
  },
  {
    task: "node course",
    status: "Pending",
  },
];

const TableofTodos = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl text-center mx-auto w-full font-bold my-10 text-green-800 hover:text-green-900">
        Your Todo List
      </h1>
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-slate-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600 sm:pl-3"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    Task
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    Status
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {todos?.map((todo, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? undefined : "bg-slate-200"}
                  >
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-400 sm:pl-3">
                      {i + 1}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-400 sm:pl-3">
                      <span className="truncate">{todo?.task}</span>
                    </td>

                    <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-500">
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset  ${
                          todo?.status === "Pending"
                            ? "text-amber-500 bg-amber-50 ring-amber-600/20"
                            : todo?.status === "Completed"
                            ? "text-green-500 bg-green-50 ring-green-600/20"
                            : "text-slate-500 bg-slate-50 ring-slate-600/20"
                        }`}
                      >
                        {todo?.status}
                      </span>
                    </td>

                    <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 h-10">
                      <div className="flex gap-2">
                        <button className="py-1.5 px-1.5 rounded-md bg-slate-400 hover:bg-slate-500 active:bg-slate-600 ease-in duration-75 font-semibold text-white hover:text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-circle-check"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M9 12l2 2l4 -4" />
                          </svg>
                        </button>
                        <button className="py-1.5 px-1.5 rounded-md bg-red-400 hover:bg-red-500 active:bg-red-600 ease-in duration-75 font-semibold text-white hover:text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-trash"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 7l16 0" />
                            <path d="M10 11l0 6" />
                            <path d="M14 11l0 6" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {todos.length === 0 && (
              <div className="font-light text-slate-400 text-sm italic text-center w-full mx-auto">
                <div className="px-3 py-4 border-t border-slate-200">
                  No todo list for you!
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableofTodos;
