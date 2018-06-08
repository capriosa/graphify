<template>
<div>
    
    <h2>{{location}}</h2>
    <b>{{title}}</b>
    <br>
    Published by {{author}} on {{date.substring(0,10)}}
        
    
</div>
</template>

<script>
export default {
  props: ['author','location','title','date']
}
</script>
