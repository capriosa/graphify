<template>
  <f7-page>
    <f7-navbar title="Demo content from GraphCMS" back-link="Back" sliding></f7-navbar>
    

 


    <section v-if="allPhotocollections">
      <f7-block>
      <f7-grid>
      
      <f7-col width="100" tablet-width="25" v-for="post in allPhotocollections" :key="post.id">
        <!--<router-link :to="`/post/${post.slug}`" class="link">-->
        <f7-block-title>{{post.title}}</f7-block-title>

          <f7-block-inner>
            <div class="placeholder">

              <img :alt="post.title" :src="`https://media.graphcms.com/resize=w:400,h:280,fit:crop/${post.photo.handle}`" />
            </div>
          </f7-block-inner>
          <f7-block-inset>
            Published by {{post.photograph}} on {{post.date.substring(0,10)}}
            <br/>
            <b>{{post.location}}</b>
          </f7-block-inset>

      <!--</router-link>-->
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
    </f7-block>

  </f7-page>
</template>

<script>
  import gql from 'graphql-tag'
  const Photocollections_PER_PAGE = 4

  const allPhotocollections = gql `
    query allPhotocollections($first: Int!, $skip: Int!) {
      allPhotocollections(orderBy: date_DESC, first: $first, skip: $skip) {
        id
        slug
        title
        photograph
        location
        date
        photo {
          handle
        }
      }
    }
  `

  export default {
    name: 'HomePage',
    data: () => ({
      loading: 0
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

<style>
  img {
    max-width:100%;
  }
</style>