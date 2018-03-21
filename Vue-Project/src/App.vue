<template>
    <div id="app">
       <vHeader></vHeader>  
       <!-- <transition name="slide-fade">
            <router-view class="child-view"></router-view>
            <router-view></router-view>
       </transition> -->
       <vIndex></vIndex>
    </div>
</template>
<script>
import vHeader from "./components/header.vue"
import vIndex from "./pages/index.vue"
export default {
    name: 'app',
    components: {
        vHeader,vIndex
    }
}
</script>
<style>
@import 'style/common';
@import 'style/swiper.min';
/*.child-view {
    position: absolute;
    top:2.1rem;
    bottom: 0;
    width: 100%;
    margin: 0 auto;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    width:100%;
    transition: all .4s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
}

.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}*/
.child-view {
    position: absolute;
    left:0;
   /* top:2.1rem;*/
    top:56px;
    height: 100%;
    width: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    background-color: #f2f2f2;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

/*滑动*/
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

</style>
