<template>
<div class="main">
  <index-search></index-search>
  <div class="BarTop">
    <index-option></index-option>
  </div>
</div>
</template>

<script>
import IndexSearch from '@/components/index/indexSearch.vue'
import IndexOption from '@/components/index/indexOption.vue'
export default {
  name: "index",
  components: {
    IndexSearch,
    IndexOption
  }
};
</script>
<style lang="scss">
.main{
  overflow: hidden;
  .BarTop{
    position: relative;
    top: -10px;
  }
}
  
</style>