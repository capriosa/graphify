<template>
<div>
    <h2>{{location}}</h2>
    <b>{{title}}</b>
    <p>
        Published by {{author}}on {{date.substring(0,10)}}
        <br>
    </p>

</div>
</template>

<script>
export default {
  props: ['author','location','title','date']
}
</script>
