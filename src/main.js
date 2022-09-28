import { createApp } from "vue";
import App from "./App.vue";
import HeaderTitle from "./components/HeaderTitle.vue";
import NewTodo from "./components/NewTodo.vue";
import TodoItem from "./components/TodoItem.vue";

import "./assets/main.scss";

const app = createApp(App);

app.component("header-title", HeaderTitle);
app.component("new-todo", NewTodo);
app.component("todo-item", TodoItem);

app.mount("#app");
