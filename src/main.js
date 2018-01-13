import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import routes from './routes.js'

// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
//import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
//import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
import Framework7Icons from 'framework7-icons/css/framework7-icons.css'


// OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
//

// Import App Custom Styles
import AppStyles from './assets/sass/main.scss'

// Import App Component
import App from './main.vue'

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/cjbtedls12mr40167fbvm517w'

const apolloClient = new ApolloClient({
    link: new HttpLink({ uri: GRAPHCMS_API }),
    cache: new InMemoryCache()
})
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})

// Init App
new Vue({
    el: '#app',
    template: '<app/>',
    apolloProvider,

    // Init Framework7 by passing parameters here
    framework7: {
        root: '#app',
        /* Uncomment to enable Material theme: */
        material: true,
        routes: routes

    },
    // Register App Component
    components: {
        app: App
    }
})