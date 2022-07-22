import {createApp, createBlock, openBlock, resolveComponent} from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import {createStore} from 'vuex';

import App from './App.vue';
import Main from './Main.vue';
import User from './User.vue';

export const worker = new Worker(new URL('worker.js', import.meta.url), {type: 'module'});

export const app = createApp(App)
    .use(createRouter({
        history: createWebHashHistory(),
        routes: [{
            path: '/',
            component: Main,
            children: [{
                path: '/user/:id(\\d+)?',
                component: User
            }]
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

app.mount('main#app');