<template>
  <div class="max-width-3 pl2 mx-auto">
    <h1 class="lg-h1 sm-h3 md-h2">{{ author }}</h1>
    <p class="h3 sm-h3 md-h3">{{ bio }}</p>
  </div>
</template>

<script>
export default {
  props: ['author','bio']
}
</script>
