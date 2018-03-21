<template>
    <div class="container">
      <div class="clear">
        <img src="http://oyzeutgr0.bkt.clouddn.com/m2_1.jpg">
      </div> 
      <div class="clear">
        <img src="http://oyzeutgr0.bkt.clouddn.com/m2_2.jpg">
      </div> 
      <div class="clear">
        <img src="http://oyzeutgr0.bkt.clouddn.com/m2_3.jpg">
      </div>
      <div class="clear">
        <img src="http://oyzeutgr0.bkt.clouddn.com/m2_4.jpg">
      </div>
      <div class="clear">
        <img src="http://oyzeutgr0.bkt.clouddn.com/m2_5.jpg">
      </div> 
       <vFooter></vFooter> 
    </div>
</template>

<script>
import vFooter from "../components/footer.vue"
export default {
  name: 'step',
  components: {
      vFooter
  }
}
</script>
<style scoped>
.container img{
	float: left;
}
</style>
