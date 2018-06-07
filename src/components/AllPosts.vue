<template>
  <div class="max-width-4 mx-auto px1">

    <section v-if="allPhotocollections">
      
      <div class="clearfix">
      <h1 class="h1">Demo Nuxt PWA/AMP site with GraphCMS as Decoupled CMS</h1>


      <div   v-for="post in allPhotocollections" :key="post.id" class="lg-col lg-col-4 pr1 my3">
        <router-link :to="`/post/${post.slug}`">
          <f7-block inner>
            <div class="placeholder">

              <img :alt="post.title" :src="`https://media.graphcms.com/resize=w:400,h:280,fit:crop/${post.photo.handle}`" />
            </div>
          </f7-block>

          <div>
            <h2>{{post.location.toUpperCase()}}</h2>
            <b>{{post.title}}</b>
            <p>
            Published by <span> {{post.photographRelation.name}}</span> on {{post.date.substring(0,10)}}<br>
            </p>

          </div>

        </router-link>
        </div>
        </div>
        
      <div class="flex items-center my2">
        <button class="btn btn-primary" v-if="postCount && postCount > allPhotocollections.length" @click="loadMorePhotocollections">
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
  const Photocollections_PER_PAGE = 12

  const allPhotocollections = gql `
    query allPhotocollections($first: Int!, $skip: Int!) {
      allPhotocollections(orderBy: date_DESC, first: $first, skip: $skip) {
        id
        slug
        title
        location
        date
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
    name: 'HomePage',
    components: {
      AmpImg,
      TeaserText
    },
    data: () => ({
      loading: 0,
      allPosts: []
    }),
    apollo: {
      $loadingKey: 'loading',
      allPhotocollections: {
        query: allPhotocollections,
        variables: {
          skip: 0,
          first: Photocollections_PER_PAGE
        }
      },
      postCount: {
        query: gql `{ _allPhotocollectionsMeta { count } }`,
        update: ({
          _allPhotocollectionsMeta
        }) => _allPhotocollectionsMeta.count
      }
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
