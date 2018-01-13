<template>
  <f7-page>
    
    
    <f7-block-title>Demo content from GraphCMS</f7-block-title>
 
    <f7-block v-if="photocollection">Copyright:<br> <em>Text - Wikipedia<br>Image: {{photocollection.photograph}} @Unsplash.com</em></f7-block>

    <section v-if="photocollection">
      
      
        
        <f7-block-title><h1>{{photocollection.title}}</h1></f7-block-title>

          <f7-block inner>
            <b>{{photocollection.location}}</b>
            <vue-markdown>{{photocollection.content}}</vue-markdown>
            <div class="placeholder">

              <img :alt="photocollection.title" :src="`https://media.graphcms.com/resize=w:800,h:480,fit:crop/${photocollection.photo.handle}`" />
            </div>
            <f7-block footer>Published by {{photocollection.photograph}} on {{photocollection.date.substring(0,10)}}</f7-block>
            
            
          </f7-block>
          
      
        
        
        
      

    </section>
    <f7-block v-else>
    <h2>
      Loading...
    </h2>
    <f7-preloader color="blue" size="44px"></f7-preloader>
    </f7-block>

  </f7-page>
</template>




<script>
  import gql from 'graphql-tag'
  import VueMarkdown from 'vue-markdown'

  const photocollection = gql`
    query photocollection($slug: String!) {
      photocollection: Photocollection(slug: $slug) {
        id
        slug
        title
        photograph
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
    data: () => ({
      loading: 0
    }),
    apollo: {
      $loadingKey: 'loading',
      photocollection: {
        query: photocollection,
        variables () {
          return {
            slug: this.$route.params.slug
          }
        }
      }
    },
    components: { VueMarkdown }
  }
</script>