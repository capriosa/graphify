<template>
  <div class="lg-flex  justify-center pt2 pb3 my3">
    <div class="max-width-1 mr2 center">
        <!--<img class="max-width-1" :src="'https://media.graphcms.com/resize=w:400,h:280,fit:crop/' + avatar" />-->
        <ampimg :src="avatar" :w="480" :h="280"></ampimg>
        <h2>{{ author }}</h2>
        <p class="max-width-1 mx-auto">{{ bio }}</p>
    </div>
    <div class="max-width-1 mr2 center">
        <ampimg :src="avatar" :w="380" :h="230"></ampimg>
        <h2>{{ author }}</h2>
        <p class="max-width-1 mx-auto">{{ bio }}</p></div>
    <div class="max-width-1 mr2 center">
        <ampimg :src="avatar" :w="280" :h="230"></ampimg>
        <h2>{{ author }}</h2>
        <p class="max-width-1 mx-auto">{{ bio }}</p></div>
    <div class="max-width-1 center">
        <img class="max-width-1" src="~/assets/images/mbr-1-1620x1080.jpg" />
        <h2>Titel</h2>
        <p class="max-width-1 mx-auto">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
    </div>


  </div>
</template>

<script>
import ampimg from '../components/AmpImg.vue';
export default {
  props: ['author','bio','avatar'],
  components: {
    ampimg
  },
}
</script>
