import Vue from 'vue'

import Post from './pages/post.vue'
import Graphcms from './pages/graphcms.vue'
import Form from './pages/form.vue'




export default [

    {
        path: '/form/',
        name: 'form',
        component: Form
    },
    {
        path: '/graphcms/',
        name: 'graphcms',
        component: Graphcms
    },
    {
        path: '/post/:slug',
        name: 'post',
        component: Post
    }
]