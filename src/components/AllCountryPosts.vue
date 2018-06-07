<template>
  <div class="max-width-4 mx-auto px1">

    <section v-if="allPhotocollections">
      
      <div class="clearfix">
      <h1 class="h1">{{ this.$route.params.slug }}</h1>

      <div   v-for="post in allPhotocollections" :key="post.id" class="lg-col lg-col-4 pr1 my3">
        <router-link :to="`/post/${post.slug}`">
            <f7-block inner>
            <div class="placeholder">

              <img :alt="post.title" :src="`https://media.graphcms.com/resize=w:400,h:280,fit:crop/${post.photo.handle}`" />
            </div>
          </f7-block>
            <TeaserText :author="post.photographRelation.name" :post="post.title" :location="post.location" :date="post.date"/>
        </router-link>
        
        </div>
        </div>
      <div class="flex items-center my2">
        <button  class="btn btn-primary" v-if="postCount && postCount > allPhotocollections.length" @click="loadMorePhotocollections">
          {{loading ? 'Loading...' : 'Show more'}} </button>


      </div>

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
  import TeaserText from '~/components/TeaserText';
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
      AmpImg,
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
