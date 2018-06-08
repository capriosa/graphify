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
      <f7-block inner>
          <h1>{{ photocollection.title }}</h1>
          <f7-badge class="badge color-blue">{{ photocollection.read }} reads</f7-badge>
          </f7-block>
      <f7-block><b>Copyright</b>
        <br> Text: Wikipedia
        <br> 
        <span>
            Photo: <a :href="`https://unsplash.com/${photocollection.photographRelation.linktoUnsplash}`" class="link">{{photocollection.photographRelation.name}}</a>
           on Unsplash</span>
          <br> More photos from
          <span>
            <a class="link" :href="`/photographPosts/${photocollection.photographRelation.slug}`">{{photocollection.photographRelation.name}}</a>
          </span>
        <br> Published on {{photocollection.date.substring(0,10)}}
        <br> Geolocation {{ photocollection.geolocation }}
        
      </f7-block>
        <section>
          
          <f7-block inner>
            <div class="placeholder">
              <img :alt="photocollection.title" :src="`https://media.graphcms.com/resize=w:800,h:480,fit:crop/${photocollection.photo.handle}`"/>
            </div>
            <b>{{photocollection.location}}</b>
            <div>
            <h4>Categories:</h4>
            <a :href="`/continents/${photocollection.continent}`" class="link">
              <f7-badge>{{ photocollection.continent.toUpperCase() }}</f7-badge>
            </a>
            <span>&nbsp;</span>
            <a :href="`/countries/${photocollection.country}`" class="link">
              <f7-badge>{{ photocollection.country.toUpperCase() }}</f7-badge>
            </a>
          </div>
          <div>

            <span v-for="cat in photocollection.categoryRelations" :key="cat.id">
              <f7-link :href="`/categories/${cat.slug}`" class="link">
                <f7-badge>{{ cat.slug.toUpperCase() }}</f7-badge>
              </f7-link>
              &nbsp;</span>
          </div>
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
        likes
        geolocation
        categoryRelations {
          id
          slug
        }
        read
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
    name: 'PostDetails',
    components: {
      VueMarkdown
    },
    data: () => ({
      loading: 0,
      photocollection: '',
      postCount: null,
      vote: false
    }),
    methods: {
      addLike: function () {

        if (this.vote === false) {
          this.$apollo.mutate({
            mutation: gql `mutation{updatePhotocollection(
              id: "${this.photocollection.id}",
              likes: ${this.photocollection.likes + 1},
            ) {
              id,
              likes
            }}`
          })

        }
        this.vote = true
      },
      addRead: function () {
        this.$apollo.mutate({
          mutation: gql `
          mutation{
            updatePhotocollection(
            id: "${this.photocollection.id}",
            read: ${this.photocollection.read + 1},
          ) {
            id,
            read
          }}
        `
        })
      },


      addComment: function () {
        this.$apollo.mutate({
          mutation: gql `
          mutation {
          createComments(
          photocollectionId: "${this.photocollection.id}",
          commentbody: "${this.cmt}",
          )

          {
            id
            commentbody

          }
        }
         `
        })

      },

    },

    /*watch: {
            cmt: function(value) {
                this.cmt = value
            }
    },*/
    mounted: function () {
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

  }

</script>
