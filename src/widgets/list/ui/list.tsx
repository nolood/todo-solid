import { todosAtom } from "../model/todo.store.ts";
import { useAtom } from "solid-jotai";

const List = () => {
  const [todos, setTodos] = useAtom(todosAtom);

  const handleDelete = (item: Partial<{ id: number }>) => {
    setTodos(todos().filter((todo) => todo.id !== item.id));
  };

  return (
    <div class="flex flex-col gap-2">
      {todos().map((item) => (
        <div
          accessKey={item.id.toString()}
          class={"p-2 flex flex-col gap-1 border border-teal-500"}
        >
          <p class="text-teal-500">Title: {item.title}</p>
          <p class="text-teal-500">Description: {item.description}</p>
          <button
            onClick={() => handleDelete(item)}
            class="bg-red-500 text-white"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
