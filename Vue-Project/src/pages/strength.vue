<template>
   <div class="container">
      <div class="clear">
          <img src="http://oyzeutgr0.bkt.clouddn.com/m5_1.jpg">
      </div>
      <div class="clear team">
          <img src="http://oyzeutgr0.bkt.clouddn.com/tm5_2_1.png">
      </div>
      <div class="clear team">
          <img src="http://oyzeutgr0.bkt.clouddn.com/tm5_2_2.png">
      </div>
      <div class="clear team">
          <img src="http://oyzeutgr0.bkt.clouddn.com/tm5_2_3.png">
      </div>
      <div class="clear">
          <img src="http://oyzeutgr0.bkt.clouddn.com/m5_3.jpg">
      </div>
      <vFooter></vFooter>
   </div>
</template>

<script>
import vFooter from "../components/footer.vue"
export default {
  name: 'strength',
  components: {
      vFooter
  }
}
</script>
<style scoped>
.container{
  background:#252525;
}
.container>div img{
    float: left;
}
.team{
  padding:0 .8rem;
  margin-bottom:.8rem;
}
</style>
