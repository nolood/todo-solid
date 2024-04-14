import { useAtom } from "solid-jotai";
import { todosAtom } from "../../list/model/todo.store.ts";
import { createSignal } from "solid-js";

const Form = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  const [title, setTitle] = createSignal<string>("");
  const [description, setDescription] = createSignal<string>("");

  const handleAdd = (event: Event) => {
    event.preventDefault();

    const todo = {
      id: Date.now(),
      title: title(),
      description: description(),
    };

    setTodos([...todos(), todo]);
  };

  return (
    <form class="flex flex-col gap-2" onSubmit={handleAdd}>
      <input
        value={title()}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        class={"p-2 border border-teal-500 focus:outline-none"}
        placeholder="Enter title"
      />
      <input
        value={description()}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        class={"p-2 border border-teal-500 focus:outline-none"}
        placeholder="Enter description"
      />
      <button
        type="submit"
        class="bg-teal-400 hover:bg-teal-600 text-white p-4"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
