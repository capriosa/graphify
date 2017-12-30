<template>
	<f7-page>
		<f7-navbar title="About" back-link="Back" sliding></f7-navbar>
		<f7-block inner>
			<section v-if="allPhotocollections">
      <ul>
        <li v-for="post in allPhotocollections" :key="post.id">
         <!--<router-link :to="`/post/${post.slug}`" class="link">-->
		 <f7-link href="#" :animate-pages="false" :ignore-cache="true">
            <div class="placeholder">
              <img
                :alt="post.title"
                :src="`https://media.graphcms.com/resize=w:400,h:400,fit:crop/${post.photo.handle}`"
              />
            </div>
            <h3>{{post.title}}</h3>
		</f7-link>
         <!--</router-link>-->
        </li>
      </ul>
      <button v-if="postCount && postCount > allPhotocollections.length" @click="loadMorePhotocollections">
        {{loading ? 'Loading...' : 'Show more'}}
      </button>
    </section>
    <h2 v-else>
      Loading...
    </h2>
		</f7-block>
	</f7-page>
</template>

<script>
  import gql from 'graphql-tag'

  const Photocollections_PER_PAGE = 2

  const allPhotocollections = gql`
    query allPhotocollections($first: Int!, $skip: Int!) {
      allPhotocollections(orderBy: date_DESC, first: $first, skip: $skip) {
        id
        slug
        title
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
        query: gql`{ _allPhotocollectionsMeta { count } }`,
        update: ({ _allPhotocollectionsMeta }) => _allPhotocollectionsMeta.count
      }
    },
    methods: {
      loadMorePhotocollections () {
        this.$apollo.queries.allPhotocollections.fetchMore({
          variables: {
            skip: this.allPhotocollections.length
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
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
