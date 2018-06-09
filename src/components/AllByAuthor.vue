<template>
  <f7-page>
    <f7-navbar title="GraphCMS" back-link="Back"></f7-navbar>
    <f7-block inner>
    <h1 class="h1">Images by {{allPhotographRelations.name}}</h1>
    </f7-block>
    <section v-if="allPhotographRelations">
      <f7-block>
      <f7-grid>
      
      <f7-col width="100" tablet-width="33" v-for="post in allPhotographRelations.photocollections" :key="post.id">
        <f7-block style="display:flex;justify-content:center">
        <f7-link :href="`/post/${post.slug}`" class="link">
        

          
            <div class="placeholder">

              <img :alt="post.title" :src="`https://media.graphcms.com/resize=w:320,h:240,fit:crop/${post.photo.handle}`" />
            </div>
              
             <TeaserText :author="post.name" :location="post.location" :title="post.title" :date="post.date"/>
          

      </f7-link>
      </f7-block>
        </f7-col>
        </f7-grid>
        </f7-block>
      <f7-block>
        <f7-button v-if="postCount && postCount > allPhotocollections.length" @click="loadMorePhotocollections">
          {{loading ? 'Loading...' : 'Show more'}}
        
      </f7-button>
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
  import TeaserText from '../components/TeaserText';

  const allPhotographRelations = gql `
    query allPhotographRelations($slug: String!) {
      allPhotographRelations: PhotographRelation(slug: $slug) {
        id
        name
        photocollections {
        id
        slug
        title
        location
        date
        photo {
          handle
        }
        }
    }
    }
  `

  export default {
    name: 'allFromAuthor',
    components: {
      TeaserText
    },
    data: () => ({
      loading: 0,
      allPhotographRelations: [],
      postCount: null
    }),
    apollo: {

      allPhotographRelations: {
        query: allPhotographRelations,
        variables() {
          return {
            slug: this.$route.params.slug

          }
        }
      }
    }


  }

</script>
