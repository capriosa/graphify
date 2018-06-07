<template>
<div class="placeholder">
  <amp-img
      :alt="alt"
      :src="`https://media.graphcms.com/resize=w:${w},h:${h},fit:crop/${src}`"
      :width="w"
      :height="h"
      layout="responsive"
  />
  
</div>
</template>

<script>
export default {
  props: ['src','w','h','alt']
}
</script>
