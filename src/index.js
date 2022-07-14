import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import {createStore} from 'vuex';
import App from "./App.vue";

const app = createApp(App)
    .use(createRouter({
        history: createWebHashHistory(),
        routes: [{
            path: '/user/:id(\\d+)?',
            component: {}
        }, {
            path: '/(.*)',
            component: {}
        }]
    }))
    .use(createStore({
        modules: {
            root: {
                namespaced: true,
                state() {
                    return {
                        hello: 'world'
                    }                    
                }       
            }
        }
    }));
app.mount("main#app");



console.log('createRouter', createRouter);
console.log('createWebHashHistory', createWebHashHistory);
console.log('createStore', createStore);