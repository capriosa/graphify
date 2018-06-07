<template>
  <div class="max-width-4 mx-auto px1">

    <section v-if="allCategoryRelations">
      
      <div class="clearfix">
      <h1 class="h1">{{ this.$route.params.slug.toUpperCase() }}</h1>

      
      <div   v-for="post in allCategoryRelations.photocollections" :key="post.id" class="lg-col lg-col-4 pr1 my3">
        <router-link :to="`/post/${post.slug}`">
          <AmpImg w="400" h="280" :alt="post.title" :src="post.photo.handle"/>
          <TeaserText :author="post.photographRelation.name" :post="post.title" :location="post.location" :date="post.date"/>

        </router-link>
        </div>
        </div>
        
    <div class="flex items-center my2">
        <button class="btn btn-primary" v-if="postCount && postCount > allCategoryRelations.length" @click="loadMorePhotocollections">
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
  import AmpImg from '~/components/AmpImg';
  import TeaserText from '~/components/TeaserText';
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
      AmpImg,
      TeaserImg
    },
    data: () => ({
      loading: 0,
      allCategoryRelations: []
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
