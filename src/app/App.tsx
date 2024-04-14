import "./styles/globals.css";
import Form from "../widgets/form/ui/form.tsx";
import List from "../widgets/list/ui/list.tsx";
import { Provider, createStore } from "solid-jotai";

const defaultStore = createStore();

function App() {
  return (
    <Provider store={defaultStore}>
      <div class="p-4 flex flex-col gap-6">
        <Form />
        <List />
      </div>
    </Provider>
  );
}

export default App;
