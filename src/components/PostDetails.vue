<template>
  <div class="max-width-4 mx-auto px1">



    <section v-if="photocollection">
      <div class="clearfix">
        <h1 class="h1">{{photocollection.title}}</h1>
        <div class="lg-col lg-col-6">
          <h3 class="cat px1">{{photocollection.location}}</h3>
          Published by
          <span>
            <a :href="`https://unsplash.com/${photocollection.photographRelation.linktoUnsplash}`" class="link">{{photocollection.photographRelation.name}}</a>
          </span> on {{photocollection.date.substring(0,10)}}
          <br> More photos from
          <span>
            <router-link class="link" :to="`/photographPosts/${photocollection.photographRelation.slug}`">{{photocollection.photographRelation.name}}</router-link>
          </span>
          <div>{{ photocollection.read }} reads</div>
        </div>
        <div class="lg-col lg-col-6">


          <div>
            <h3>Categories:</h3>
            <router-link :to="`/continents/${photocollection.continent}`" class="link">
              {{ photocollection.continent.toUpperCase() }}
            </router-link>
            <span>&nbsp;</span>
            <router-link :to="`/countries/${photocollection.country}`" class="link">
              {{ photocollection.country.toUpperCase() }}
            </router-link>
          </div>
          <div>

            <span v-for="cat in photocollection.categoryRelations" :key="cat.id">
              <router-link :to="`/categories/${cat.slug}`" class="link">
                {{ cat.slug.toUpperCase() }}
              </router-link>
              &nbsp;</span>
          </div>
        </div>
      </div>
      <div class="my3">
      <f7-block inner>
            <div class="placeholder">

              <img :alt="post.title" :src="`https://media.graphcms.com/resize=w:400,h:280,fit:crop/${post.photo.handle}`" />
            </div>
          </f7-block>
      </div>

      <vue-markdown>{{photocollection.content}}</vue-markdown>



    </section>
    <div class="max-width-4 mx-auto px1" v-else>
      <h2>
        Loading...
      </h2>

    </div>

  </div>
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
      AmpImg,
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
