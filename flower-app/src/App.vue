<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script>
export default {
 
}
</script>
<style lang="scss">
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
pre, /* text formatting elements 文本格式元素 */
form, fieldset, legend, button, input, textarea, /* form elements 表单元素 */
th, td /* table elements 表格元素 */ {
    margin: 0;
    padding: 0;
}
body, ul, li, h1, h2, h3, h4, h5, h6, p, form, dl, dt, dd { 
    margin: 0px; 
    padding: 0px; 
     
    font-weight: normal; }
ul { list-style: none; }
.app{
  background-color:#ffff ;
  height:100vh; 
}
</style>
