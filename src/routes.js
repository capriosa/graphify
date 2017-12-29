import Vue from 'vue'

import Post from './pages/post.vue'
import About from './pages/about.vue'
import Form from './pages/form.vue'




export default [

    {
        path: '/form/',
        name: 'form',
        component: Form
    },
    {
        path: '/about/',
        name: 'about',
        component: About
    },
    {
        path: '/post/:slug',
        name: 'post',
        component: Post
    }
]