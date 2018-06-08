<template>
  <f7-page>
    <f7-navbar title="GraphCMS" back-link="Back"></f7-navbar>
    <f7-block inner>
    <h1>{{this.$route.params.slug.toUpperCase() }}</h1>
    </f7-block>
    <section v-if="allCategoryRelations">
      <f7-block>
      <f7-grid>
      
      <f7-col width="100" tablet-width="33" v-for="post in allCategoryRelations.photocollections" :key="post.id">
        <f7-block style="display:flex;justify-content:center">
        <f7-link :href="`/post/${post.slug}`" class="link">
        

          
            <div class="placeholder">

              <img :alt="post.title" :src="`https://media.graphcms.com/resize=w:320,h:240,fit:crop/${post.photo.handle}`" />
            </div>
              
             <TeaserText :author="post.photographRelation.name" :location="post.location" :title="post.title" :date="post.date"/>
          

      </f7-link>
      </f7-block>
        </f7-col>
        </f7-grid>
        </f7-block>
      <f7-block>
        <f7-button v-if="postCount && postCount > allCategoryRelations.photocollections.length" @click="loadMorePhotocollections">
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
  const Photocollections_PER_PAGE = 9

  const allCategoryRelations = gql `
    query allCategoryRelations($slug: String!) {
      allCategoryRelations: CategoryRelation(slug: $slug) {
        id
        slug
        photocollections {
        id
        slug
        title
        location
        photographRelation {
          name
        }
        date
        photo {
          handle
        }
        }
    }
    }
  `

  export default {
    name: 'CategoryRelations',
    components: {
      TeaserText
    },
    data: () => ({
      loading: 0,
      allCategoryRelations: [],
      postCount: null
    }),
    apollo: {
      $loadingKey: 'loading',
      allCategoryRelations: {
        query: allCategoryRelations,
        variables() {
          return {
            slug: this.$route.params.slug

        }}}},
    methods: {
      loadMorePhotocollections() {
        this.$apollo.queries.allPhotocollections.fetchMore({
          variables: {
            skip: this.allPhotocollections.length
          },
          updateQuery: (previousResult, {
            fetchMoreResult
          }) => {
            if (!fetchMoreResult) {
              return previousResult
            }
            return Object.assign({}, previousResult, {
              allPhotocollections: [...previousResult.allPhotocollections, ...fetchMoreResult.allPhotocollections]
            })
          }
        })
      }
    }

  }
</script>
