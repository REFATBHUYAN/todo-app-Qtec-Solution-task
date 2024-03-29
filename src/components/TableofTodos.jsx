// const todos = [
//   {
//     task: "react course",
//     status: "Pending",
//   },
//   {
//     task: "next course",
//     status: "Pending",
//   },
//   {
//     task: "node course",
//     status: "Pending",
//   },
// ];

import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo, selectTodos, updateTodo } from "../Redux/todoSlice";
import { useState } from "react";

const TableofTodos = () => {
  const { todos } = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [i , setI] = useState() ;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(editTodo({index: i, task: text}));
      setText("");
      alert("Edit task Success!");
    }
  };
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
                        <button
                          onClick={() => dispatch(updateTodo(todo?.task))}
                          className="py-1.5 px-1.5 rounded-md bg-slate-400 hover:bg-slate-500 active:bg-slate-600 ease-in duration-75 font-semibold text-white hover:text-white"
                        >
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
                        <button
                          onClick={() =>
                            document.getElementById(todo?.task).showModal()
                          }
                          className="py-1.5 px-1.5 rounded-md bg-rose-400 hover:bg-rose-500 active:bg-rose-600 ease-in duration-75 font-semibold text-white hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-edit"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                            <path d="M16 5l3 3" />
                          </svg>
                        </button>
                        <button
                          onClick={() => dispatch(deleteTodo(todo?.task))}
                          className="py-1.5 px-1.5 rounded-md bg-red-400 hover:bg-red-500 active:bg-red-600 ease-in duration-75 font-semibold text-white hover:text-white"
                        >
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
                      <dialog id={todo?.task} className="modal">
                        <div className="modal-box text-left bg-white">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <h3 className="font-bold text-lg">Edit Your Task</h3>
                          <form
                            onSubmit={handleSubmit}
                            className="flex container mx-auto gap-1 my-10"
                          >
                            <input
                              onChange={(e) => {setText(e.target.value); setI(i)}}
                              defaultValue={todo.task}
                              
                              type="text"
                              className="block p-2.5 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                            />
                            <button
                              type="submit"
                              className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition"
                            >
                              Edit Task
                            </button>
                          </form>
                        </div>
                      </dialog>
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
      <div className="my-5">
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
          <div className="overflow-hidden p-3 rounded-lg ring-inset ring-pink-200 ring-1 bg-pink-50/50 w-60">
            <div className="absolute rounded-md bg-pink-100 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-tools stroke-pink-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                <path d="M14.5 5.5l4 4" />
                <path d="M12 8l-5 -5l-4 4l5 5" />
                <path d="M7 8l-1.5 1.5" />
                <path d="M16 12l5 5l-4 4l-5 -5" />
                <path d="M16 17l-1.5 1.5" />
              </svg>
            </div>
            <dt className="ml-14 truncate text-sm font-medium text-slate-400">
              Total Tasks
            </dt>
            <dd className="ml-14 flex items-baseline -mt-1">
              <p className="text-2xl truncate font-semibold text-slate-600">
                {todos.length}
              </p>
            </dd>
          </div>

          <div className="overflow-hidden p-3 rounded-lg ring-inset ring-indigo-200 ring-1 bg-indigo-50/50 w-60">
            <div className="absolute rounded-md bg-indigo-100 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-currency-dollar stroke-indigo-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                <path d="M12 3v3m0 12v3" />
              </svg>
            </div>
            <dt className="ml-14 truncate text-sm font-medium text-slate-400">
              Completed Task
            </dt>
            <dd className="ml-14 flex items-baseline -mt-1">
              <p className="text-2xl truncate font-semibold text-slate-600">
                {todos.filter(todo => todo.status === "Completed").length}
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default TableofTodos;
