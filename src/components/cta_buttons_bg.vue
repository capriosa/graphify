<template>
  <div class="md-header">
     By {{ author }}
     <p>{{ bio }}</p>
  </div>
</template>

<script>
export default {
  props: ['author','bio']
}
</script>
