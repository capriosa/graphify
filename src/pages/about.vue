<template>
	<f7-page>
		<f7-navbar title="About" back-link="Back" sliding></f7-navbar>
		<f7-block inner>
			<section v-if="allPosts">
      <ul>
        <li v-for="post in allPosts" :key="post.id">
         <!--<router-link :to="`/post/${post.slug}`" class="link">-->
		 <f7-link href="#" :animate-pages="false" :ignore-cache="true">
            <div class="placeholder">
              <img
                :alt="post.title"
                :src="`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${post.coverImage.handle}`"
              />
            </div>
            <h3>{{post.title}}</h3>
		</f7-link>
         <!--</router-link>-->
        </li>
      </ul>
      <button v-if="postCount && postCount > allPosts.length" @click="loadMorePosts">
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

  const POSTS_PER_PAGE = 2

  const allPosts = gql`
    query allPosts($first: Int!, $skip: Int!) {
      allPosts(orderBy: date_DESC, first: $first, skip: $skip) {
        id
        slug
        title
        date
        coverImage {
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
      allPosts: {
        query: allPosts,
        variables: {
          skip: 0,
          first: POSTS_PER_PAGE
        }
      },
      postCount: {
        query: gql`{ _allPostsMeta { count } }`,
        update: ({ _allPostsMeta }) => _allPostsMeta.count
      }
    },
    methods: {
      loadMorePosts () {
        this.$apollo.queries.allPosts.fetchMore({
          variables: {
            skip: this.allPosts.length
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult
            }
            return Object.assign({}, previousResult, {
              allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
            })
          }
        })
      }
    }
  }
</script>
