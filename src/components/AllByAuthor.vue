<template>
  <div class="max-width-4 mx-auto px1">

    <section v-if="allPhotographRelations">
      
        <div class="clearfix">
          <h1 class="h1">Images by {{allPhotographRelations.name}}</h1>

          <div v-for="post in allPhotographRelations.photocollections" :key="post.id" class="lg-col lg-col-4 pr1 my3">
            <router-link :to="`/post/${post.slug}`" class="link">
              <AmpImg w="400" h="280" :alt="post.title" :src="post.photo.handle"/>
              <TeaserText :post="post.title" :location="post.location" :date="post.date"/>

            </router-link>
          </div>
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
      AmpImg,
      TeaserText
    },
    data: () => ({
      loading: 0,
      allPhotographRelations: []
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
