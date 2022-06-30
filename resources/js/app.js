require('./bootstrap');

import { createApp } from 'vue';
import task from './components/Task.vue';

let app=createApp({})
app.component('task' , task);

app.mount("#app")