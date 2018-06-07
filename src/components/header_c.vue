<template>
  <div class="md-header flex flex-column items-end px2 justify-center">
    <div class=""><h1 class="sm-h1 md-h1">By {{ author }}</h1></div>
    <div class=""><p class="h3 sm-h3 md-h3">{{ bio }}</p></div>
    <a class="ampstart-btn rounded px4 mt4 py1" href="/">Kontakt</a>
  </div>
</template>

<script>
export default {
  props: ['author','bio','cta']
}
</script>
