import {createApp, createBlock, openBlock, resolveComponent} from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import {createStore} from 'vuex';

import Main from "./Main.vue";

const Root = {
    render() {
        return (openBlock(), createBlock(resolveComponent('router-view')));
    }
};

export const app = createApp(Root)
    .use(createRouter({
        history: createWebHashHistory(),
        routes: [{
            path: '/',
            component: Main,
            children: [{
                path: '/user/:id(\\d+)?',
                component: {
                    template: '<span>{{ $route.params.id }}</span>'
                }
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

app.mount("main#app");