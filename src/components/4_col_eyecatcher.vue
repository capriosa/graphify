<template>
  <div>
  <div class="lg-flex items-center mx-auto max-width-4 pt2 pb3 pl2 pr2">
    <div class="px1">
        <h2 >{{ author }}</h2>
        <p>{{ bio }}</p>
    </div>
    <div class="px1">
        <h2>Titel</h2>
        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
    </div>
    <div class="px1">
        <h2>Titel</h2>
        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
    </div>
    <div class="px1">
        <h2>Titel</h2>
        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['author','bio']
}
</script>
