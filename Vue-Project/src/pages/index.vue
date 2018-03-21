<template>
    <div class="container">
    	<div class="video-mask">
	    	<div id="video-box">
	    		<span class="off"><img src="../assets/close.png"></span>
				<video  src="" id="media" controls autoplay="false">
				</video>
			</div>
		</div>	
        <!-- 淘宝前景 -->
        <div class="box">
            <div class="clear banner video">
                <img src="http://p07v5r5xm.bkt.clouddn.com/banner02-wap.jpg">
                <span data-src="http://cloud.video.taobao.com//play/u/872673381/p/1/e/6/t/1/50055894909.mp4" class="video-btn"></span>
            </div>
            <div class="clear">
                 <img src="../assets/m1_2.jpg">
            </div>
            <div class="clear shuangshier">
                 <a href="http://z1-pcok6.kuaishangkf.com/bs/im.htm?cas=117004___209222&fi=119438&ism=1" target="_blank"><img src="../assets/3_1.png"></a>
            </div>
            <div class="clear">
                <img src="../assets/m1_3.jpg">
            </div>
        </div>
        <!-- 开店步骤 -->
        <div class="box step-box">
            <div class="clear">
                <img src="../assets/m2_1.jpg">
            </div> 
            <div class="clear">
                <a href="http://z1-pcok6.kuaishangkf.com/bs/im.htm?cas=117004___209222&fi=119438&ism=1" target="_blank">
                    <img src="../assets/m2_2.jpg">
                </a>
            </div> 
            <div class="clear">
                <a href="http://z1-pcok6.kuaishangkf.com/bs/im.htm?cas=117004___209222&fi=119438&ism=1" target="_blank">
                    <img src="../assets/m2_3.jpg">
                </a>
            </div>
            <div class="clear">
                <a href="http://z1-pcok6.kuaishangkf.com/bs/im.htm?cas=117004___209222&fi=119438&ism=1" target="_blank">
                    <img src="../assets/m2_4.jpg">
                </a>
            </div>
            <div class="clear">
                <a href="http://z1-pcok6.kuaishangkf.com/bs/im.htm?cas=117004___209222&fi=119438&ism=1" target="_blank">
                    <img src="../assets/m2_5.jpg">
                </a>
            </div> 
            <div class="clear fast-shop">
            	<a href="http://z1-pcok6.kuaishangkf.com/bs/im.htm?cas=117004___209222&fi=119438&ism=1" target="_blank">
            		<img src="../assets/wapbtn_2.png">
            	</a>
            </div>
        </div>
        <!-- 快速开店 -->
        <div class="box">
            <div class="clear">
                <img src="../assets/m3_1.jpg">
            </div>
            <div class="clear">
                 <img src="../assets/m3_2.jpg">
            </div>
            <div class="clear">
                <img src="../assets/m3_3.jpg">
            </div>
            <div class="clear">
                <img src="../assets/m3_4.jpg">
            </div>
            <div class="clear">
                <img src="../assets/m3_5.jpg">
            </div>
            <div class="clear">
              <img src="../assets/m3_6.jpg">
            </div>
            <div class="clear">
                <a href="http://z1-pcok6.kuaishangkf.com/bs/im.htm?cas=117004___209222&fi=119438&ism=1" target="_blank"><img src="../assets/m3_7.jpg"></a>
            </div> 
        </div>
        <!-- 成功案例 --> 
        <div class="box">
            <div class="clear">
              <img src="../assets/mm4_1.jpg">
            </div>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img src="../assets/4_2_2.png">
                    </div>
                    <div class="swiper-slide">
                      <img src="../assets/wap4_2_1.png">
                    </div>
                    <div class="swiper-slide">
                      <img src="../assets/wap4_2_3.png">
                    </div>
                </div>
            </div>
            <div class="clear fast-shop">
            	<a href="http://z1-pcok6.kuaishangkf.com/bs/im.htm?cas=117004___209222&fi=119438&ism=1" target="_blank">
            		<img src="../assets/wapbtn_4.png">
            	</a>
            </div>
            <div class="clear">
                <img src="../assets/m4_3.jpg">
            </div> 
        </div>
        <!-- 实力保障 -->
        <div class="box">
            <div class="clear">
                <img src="../assets/m5_1.jpg">
            </div>
            <div class="clear team">
                <img src="../assets/wap5_2_1.png">
            </div>
            <div class="clear team">
                <img src="../assets/wap5_2_2.png">
            </div>
            <div class="clear team">
                <img src="../assets/wap5_2_3.png">
            </div>
            <div class="clear team">
                <img src="../assets/wap5_2_4.png">
            </div>
        </div>
        <div class="to-top">
            <img src="../assets/mtop.png">
        </div>
        <vFooter></vFooter>
    </div>
</template>
 
<script>
import vFooter from "../components/footer.vue"
export default{
    components: {
        vFooter
    },
    mounted(){
        this.swiper();
        this.video();
    },
    methods:{
        swiper(){
          var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerView: 'auto',
            autoplay:1000
          });
        },
        video(){
        	var Media = document.getElementById("media"); 
			//打开视频
			$('.video-btn').click(function() {
				var src = $(this).data('src');
				$('.video-mask video').attr('src',src);
				$('.video-mask').fadeIn('fast');
				Media.play();
			});
			//关闭视频
			$('.video-mask').click(function() {
				Media.currentTime = 0;
				Media.pause();
				$(this).fadeOut('fast');
			});
			//视频点击
			$('.video-mask video').click(function(e) {
				e.stopPropagation();
				if (!Media.paused) {
					Media.pause();
				} else {
					Media.play();
				
				}
			});
        }
    }
}
</script>
 
<style scoped="scoped">
.container{
    margin-top:59px;
}
.container .box{
    position:relative;
    text-align:center;
}
.container .box img{
    float: left;
}
.banner{
	position:relative;
}
.video-mask{
	position:fixed;
	right:0;
	top:59px;
	width:100%;
	height:100%;
	z-index:99;
	background:rgba(0,0,0,.5);
	display:none;
}
#video-box{
	position:absolute;
	top:50%;
	left:50%;
    margin-top: -7rem;
    margin-left: -7.5rem;
    width: 15rem;
    height: 10rem;
}
video{
	margin:0 auto;
	width: 15rem;
    height: 10rem;
}
.video-btn{
	position:absolute;
	right: 1.5rem;
    top: 1rem;
    width: 7rem;
    height: 4rem;
}
.off {
    position: absolute;
    right: -2px;
    top: 8px;
    display: block;
    width: 40px;
    height: 40px;
    opacity: 1;
    cursor: pointer;
    z-index: 999;
}
.off img{
	width:40px;
	height:40px;
}
.shuangshier{
    padding-top:.5rem;
    background:#97051b;
    text-align:center;
}
.container .shuangshier img{
    float:none;
    width:8rem;
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
.team{
  padding:.8rem;
  background:#252525; 
}
.to-top{
    position:fixed;
    right:20px;
    bottom:100px;
    z-index:999;
}
.fast-shop{
	padding-bottom:.6rem;
	text-align:center;
	background:#252525;
}
.fast-shop img{
	float:none !important;
	width:50%;
}
.step-box a{
    display:block;
}
</style>