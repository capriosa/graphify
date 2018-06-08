<template>
  <f7-page>
    <f7-navbar title="GraphCMS" back-link="Back"></f7-navbar>
    <f7-block inner>
    <h1>{{this.$route.params.slug.toUpperCase() }}</h1>
    </f7-block>
    <section v-if="allPhotocollections">
      <f7-block>
      <f7-grid>
      
      <f7-col width="100" tablet-width="33" v-for="post in allPhotocollections" :key="post.id">
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
  const Photocollections_PER_PAGE = 9

  const allPhotocollections = gql `
      query allPhotocollections($slug: Country!) {
      allPhotocollections(filter: {country:$slug}) {
        id
        slug
        title
        location
        continent
        country
        date
        read
        photographRelation {
          name
        }
        photo {
          handle
        }
      }
    }
  `

  export default {
    name: 'Countries',
    components: {
      TeaserText
    },
    data: () => ({
      loading: 0,
      allPhotocollections: [],
      postCount: null
    }),
    apollo: {
      $loadingKey: 'loading',
      allPhotocollections: {
        query: allPhotocollections,
        variables() {
          return {
            slug: this.$route.params.slug,
            skip: 0,
            first: Photocollections_PER_PAGE
          }
        }
        
      },
      
    },
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
