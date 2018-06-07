<template>
  <div class="p2 m0">
    <div class="max-width-4 mx-auto">
    <h1 class="lg-h1 sm-h3 md-h2">{{ author }}</h1>
    <h4 class="lg-h6 sm-h6 md-h6">{{ bio }}</h4>
  </div>
  </div>
</template>

<script>
export default {
  props: ['author','bio']
}
</script>
