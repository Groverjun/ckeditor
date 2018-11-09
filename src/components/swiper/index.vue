<!-- The ref attr used to find the swiper instance -->
<template>
	<div>
		  <swiper :options="swiperOption" ref="mySwiper">
	    	<swiper-slide v-for="(item,index) in swiperData" :key="index">{{item}}</swiper-slide>
	  	  </swiper>
	  <swiper :options="swiperOption1">
	    <swiper-slide v-for="(item,index) in swiperData" :key="index">{{item}}</swiper-slide>
	  </swiper>
	  <button @click="add">增加一张</button>
	</div>
</template>
 
<script>
  export default {
    name: 'carrousel',
    data() {
      return {
      	swiperData:["111","222","333","444","555"],
      	swiperOption1: {
  			slidesPerView: 3,
  			watchSlidesVisibility: true,//防止不可点击
        },
        swiperOption: {
            thumbs: {
		    swiper: this.swiperOption1,
		    autoplayDisableOnInteraction : false,
            onTouchEnd: function() {
                swiper.startAutoplay();
            }
		    },
        },
      }
    },
    computed: {
    },
    mounted() {
    	this.swiperOption.thumbs.swiper= this.swiperOption1
    },
    methods:{
    	add(){
    		this.swiperData.push("aa")
    	}
    }
    
  }
</script>

<style type="text/css">
	.swiper-container,.swiper-slide {
		height: 300px;
	}
</style>