import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import {createStore} from 'vuex';
import App from "./App.vue";

const app = createApp(App)
    .use(createRouter({
        history: createWebHashHistory(),
        routes: [{
            path: '/user/:id(\\d+)?',
            component: {
                template: '<span>{{ $route.params.id }}</span>'
            }
        }, {
            path: '/(.*)',
            component: {
                template: '<span>default catch all route</span>'
            }
        }]
    }))
    .use(createStore({
        strict: process.env.NODE_ENV !== 'production',
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
const main = app.mount("main#app");



console.log('app', app);
console.log('main', main);