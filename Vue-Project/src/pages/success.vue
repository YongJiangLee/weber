<template>
   <div class="container">
      <div class="clear">
          <img src="http://oyzeutgr0.bkt.clouddn.com/m4_1.jpg">
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="http://oyzeutgr0.bkt.clouddn.com/4_2_1.png">
            </div>
            <div class="swiper-slide">
              <img src="http://oyzeutgr0.bkt.clouddn.com/4_2_2.png">
            </div>
            <div class="swiper-slide">
              <img src="http://oyzeutgr0.bkt.clouddn.com/4_2_3.png">
            </div>
        </div>
      </div>
      <div class="clear">
          <img src="http://oyzeutgr0.bkt.clouddn.com/m4_3.jpg">
      </div>
      <vFooter></vFooter>
   </div>
</template>

<script>
import vFooter from "../components/footer.vue"
export default {
  name: 'success',
  components: {
      vFooter
  },
  mounted(){
    this.headerSwiper();
  },
  methods:{
    headerSwiper(){
      var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay:1000
      });
    }
  }
}
</script>
<style scoped>
.container>div img{
    float: left;
}
.swiper-container {
  width: 100%;
  padding-top:1rem;
  padding-bottom:1rem;
  background:#252525; 
}
.swiper-slide {
  width:10rem;
  background:#252525; 
}

</style>
