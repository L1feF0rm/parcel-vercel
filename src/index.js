import {createApp} from "vue";
import App from "./App.vue";

const app = createApp(App);
const app2 = app.mount("#app");


console.log('app', app);
console.log('app2', app2);
console.log('app === app2', app === app2);