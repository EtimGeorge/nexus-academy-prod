// /src/main.js

import "./assets/main.css"; // This imports our global stylesheet

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // <-- This imports our new router configuration

const app = createApp(App);

app.use(router); // <-- This tells the Vue app to use the router

app.mount("#app"); // This mounts our application to the DOM
