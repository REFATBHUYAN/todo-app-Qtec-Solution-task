import AddTodo from "./components/AddTodo";
import TableofTodos from "./components/TableofTodos";

function App() {
  return (
    <main className="max-w-full">
      <div className="container mx-auto py-5 px-4">
        <h1 className="text-4xl font-bold text-green-800 hover:text-green-900">
          TodoList
        </h1>
        <AddTodo />
        <TableofTodos />
      </div>
    </main>
  );
}

export default App;
