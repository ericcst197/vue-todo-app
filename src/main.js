import { createApp } from "vue";

import App from "./App.vue";
import NewTodo from "./components/NewTodo.vue";
import TodoItem from "./components/TodoItem.vue";
import TodoList from "./components/TodoList.vue";
import TodoSort from "./components/TodoSort.vue";
import TodoNav from "./components/TodoNav.vue";
import BaseAlert from "./components/BaseAlert.vue";

import "./assets/main.scss";

const app = createApp(App);

app.component("base-alert", BaseAlert);
app.component("new-todo", NewTodo);
app.component("todo-nav", TodoNav);
app.component("todo-sort", TodoSort);
app.component("todo-item", TodoItem);
app.component("todo-list", TodoList);

app.mount("#app");
