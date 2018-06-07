<template>
  <f7-page>
    <f7-navbar title="GraphCMS" back-link="Back"></f7-navbar>
    <f7-block v-if="loading > 0">
      <h2>
        Loading...
      </h2>
      <f7-preloader color="blue" size="44px"></f7-preloader>
    </f7-block>
    <div v-else>
      <f7-fab color="pink" @click="addLike">
        <f7-badge color="pink">{{ photocollection.likes }}</f7-badge>
      </f7-fab>
      <f7-block-title>Demo content from my GraphCMS photocollection content model</f7-block-title>
      <f7-block inner>Copyright:
        <br> Text - Wikipedia
        <br> Photo: {{photocollection.photographRelation.name}} on Unsplash.com
        <br> Published on {{photocollection.date.substring(0,10)}}
        <br> Geolocation {{ photocollection.geolocation }}
        
      </f7-block>
        <section>
          <f7-block-title>
          <h1>{{ photocollection.title }}</h1>
          {{ photocollection.read }} reads
          </f7-block-title>
          <f7-block inner>
            <div class="placeholder">
              <img :alt="photocollection.title" :src="`https://media.graphcms.com/resize=w:800,h:480,fit:crop/${photocollection.photo.handle}`"/>
            </div>
            <b>{{photocollection.location}}</b>
            <vue-markdown>{{photocollection.content}}</vue-markdown>
          </f7-block>
        </section>
    </div>
  </f7-page>
</template>

<script>
  import gql from 'graphql-tag'
  import VueMarkdown from 'vue-markdown'

  const photocollection = gql `
    query photocollections($slug: String!) {
      photocollection: Photocollection(slug: $slug) {
        id
        slug
        title
        continent
        country
        categoryRelations {
          id
          slug
        }
        read
        likes
        photographRelation {
          name
          linktoUnsplash
          slug
        }
        location
        date
        photo {
          handle
        }
        content
      }
    }
  `

  export default {
    name: 'PostPage',
    data: function () {
      return {
        loading: 0,
        vote: false
        }
    },
    methods: {
      addLike: function () {
        
        if(this.vote === false) {
        this.$apollo.mutate({
        mutation: gql`mutation{updatePhotocollection(
        id: "${this.photocollection.id}",
        likes: ${this.photocollection.likes + 1},
        ) {
        id,
        likes
  
        }}
        `
        
      } )

      }
      this.vote = true
    },
    addRead: function () {
        
       
        this.$apollo.mutate({
        mutation: gql`mutation{updatePhotocollection(
        id: "${this.photocollection.id}",
        read: ${this.photocollection.read + 1},
        ) {
        id,
        read
  
        }}
        `
        
      } )

      
      
    }
    },
    
    mounted: function(){
        this.addRead()
    },
    apollo: {
      $loadingKey: 'loading',
      photocollection: {
        query: photocollection,
        variables() {
          return {
            slug: this.$route.params.slug
          }
        }
      }
    },
    components: {
      VueMarkdown
    }
  }
</script>