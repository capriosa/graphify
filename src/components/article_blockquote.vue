<template>
  <div class="blockquote clearfix mx4 my2 p2">
    <p class="italic">{{ author }}</p>
    <p>{{ bio }}</p>
  </div>
</template>

<script>
export default {
  props: ['author','bio']
}
</script>
