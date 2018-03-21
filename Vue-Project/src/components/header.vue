<template>
    <div class="clear header">
      <div class="logo-box left">
        <img src="http://oyzeutgr0.bkt.clouddn.com/mlogo.png">
      </div>
     <!--  <div id="topNav" class="header-swiper-container left">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                <router-link to="/">淘宝前景</router-link>
              </div>
              <div class="swiper-slide">
                <router-link to="/step/">开店步骤</router-link>  
              </div>
              <div class="swiper-slide">
                <router-link to="/fastShop/">快速开店</router-link>
              </div>
              <div class="swiper-slide">
                <router-link to="/success/">成功案例</router-link>
              </div>
              <div class="swiper-slide">
                <router-link to="/strength/">实力保障</router-link>
              </div>
          </div>
      </div>  -->
      <div class="header-nav left">
          <div v-for="(item,$index) in navData" @click="activeFn($index)" v-bind:class='{active:$index == navIndex}'>
              <p>{{item.top}}</p>
              <p>{{item.bottom}}</p>
          </div>
       </div>
    </div>
</template>
<script>
export default {
  name: 'vheader',
  data(){
    return {
      navIndex:0,
      navData:[
        {top:'淘宝',bottom:'前景'},
        {top:'开店',bottom:'步骤'},
        {top:'快速',bottom:'开店'},
        {top:'成功',bottom:'案例'},
        {top:'实力',bottom:'保障'}
      ]   
    }
  },
  mounted(){
    //this.headerSwiper();
    this.actions();
  },
  methods:{
    headerSwiper(){
      /*var swiper = new Swiper('.header-swiper-container', {
        slidesPerView:3.4,
        freeMode: true
      });*/
      var mySwiper = new Swiper('#topNav', {
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: 'auto',
        maxTranslate:241
      });
      var swiperWidth = mySwiper.container[0].clientWidth;
      var maxTranslate = mySwiper.maxTranslate();
      var maxWidth = -maxTranslate + swiperWidth / 2;
      mySwiper.on('tap', function(swiper, e) {
      //  e.preventDefault()
        var slide = swiper.slides[swiper.clickedIndex];
        var slideLeft = slide.offsetLeft;
        var slideWidth = slide.clientWidth;
        var slideCenter = slideLeft + slideWidth / 2;
        // 被点击slide的中心点
        mySwiper.setWrapperTransition(300);
        if (slideCenter < swiperWidth / 2) {
          mySwiper.setWrapperTranslate(0);
        } else if (slideCenter > maxWidth) {
          mySwiper.setWrapperTranslate(maxTranslate);
        } else {
         var  nowTlanslate = slideCenter - swiperWidth / 2;
          mySwiper.setWrapperTranslate(-nowTlanslate);
        }
        $("#topNav  .active").removeClass('active');
        $("#topNav .swiper-slide").eq(swiper.clickedIndex).addClass('active');
      })
    },
    //切换class
    activeFn(index){
        this.navIndex = index;  
    },
    actions(){
      //楼层点击导航
      $('.header-nav').on('click', '>div', function(event) {
        var index = $(this).index();
        var top = $('.box').eq(index).offset().top;
        $('html,body').animate({scrollTop:top - 59}, 500);
      });
      $(window).scroll(function() {
        //火箭
        if ($(window).scrollTop() >= 300) {
           $('.to-top').addClass('top-show').show('600');
        } else {
           $('.to-top').removeClass('top-show').hide('600');
        }
      });
      //回到顶部
      $('.to-top').click(function(event) {
         $('html,body').animate({scrollTop:0},400);
      });
    }
  }
}
</script>
<style scoped>
.header{
  position:fixed;
  width:100%;
  left:0;
  top:0;
  z-index:999;
}
.logo-box{
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: center;
  padding-left:.8rem;
  padding-right:.4rem;
  width:30%;
  height:60px;
  /*height:2.2rem;*/
  background:#1a1e26;
}
.logo-box img{
  vertical-align: middle;
  align-items: center;
}
.header-nav{
  width:70%;
  background:#1a1e26;
}
.header-nav>div{
  float:left;
  width:20%;;
  height:60px;
  padding:10px 0;
  background:#1a1e26;
}
.header-nav p{
  height:20px;
  line-height:20px;
  color:#fff;
  text-align:center;
  font-size:16px;
  transition:all .3s ease;
}
.active p{
  color:#d55e19;
}


/*.header-swiper-container{
  width:70%;
  height:2.2rem;
  line-height:2.2rem;
  background:#1a1e26;
  overflow:hidden;
}
.swiper-slide{
  width:3rem;
}
.swiper-slide a{
  display:block;
  text-align:center;
  font-size:.6rem;
  color:#fff;
}

.router-link-exact-active{
  color:#d55e19 !important;
}


#topNav {
  width: 70%;
  overflow: hidden;
  font: 16px/32px hiragino sans gb, microsoft yahei, simsun;
}
#topNav .swiper-slide {
  padding: 0 5px;
  letter-spacing:2px;
  height:2.2rem;
  line-height:2.2rem;
  width:110px;
  text-align:center;
}
#topNav .swiper-slide a{
  transition:all .3s ease;
  display:block;
  font-size:18px;
  background:#1a1e26;
}
#topNav .active a{
  transform:scale(1.1);
}*/
</style>
