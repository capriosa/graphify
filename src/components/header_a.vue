<template>
  <div class="md-header px2 flex flex-column items-center justify-center">
    <h1 class="lg-h1 sm-h3 md-h2">{{ author }}</h1>
    <p class="h3 sm-h3 md-h3">{{ bio }}</p>
    <a class="ampstart-btn rounded px4 mt4 py4" href="/graphCms">Start</a>
  </div>
</template>

<script>
export default {
  props: ['author','bio','cta']
}
</script>
