<template>
  <div class="p2 bg m0">
    <div class="max-width-4 mx-auto">
    <h1 class="lg-h1 sm-h3 md-h2">{{ author }}</h1>
    <p class="h3 sm-h3 md-h3 pb2">{{ bio }}</p>
  </div>
  </div>
</template>

<script>
export default {
  props: ['author','bio']
}
</script>
