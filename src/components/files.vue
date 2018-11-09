<template>
	<div>
		<button @click="downloadFileGet">点击下载</button>
		
	</div>
</template>

<script>
import {baseURL} from '@/assets/js/config'
export default {
	data () {
		return{
			id:2981,
			authorName:"aa",
			monthly:7,
			rank:1,
		}
	},
	computed: {
	  
	},
	watch: {  
	},
	created(){
		
	},
	mounted(){
		var a=`${baseURL.dev}/tbMonthlyRank/downloadImg?id=${this.id}&authorName=${this.authorName}&monthly=${this.monthly}&rank=${this.rank}`
		console.log(a)
	},
	updated(){
	},
	methods:{
		downloadFileGet(actoinURL){
		  let b=`${baseURL.dev}/tbMonthlyRank/downloadImg?id=${this.id}&authorName=${this.authorName}&monthly=${this.monthly}&rank=${this.rank}`
		  let a = document.createElement('a');
		  let body = document.getElementsByTagName('body')[0]
		  body.appendChild(a);
		  a.setAttribute('style','display:none');
		  a.setAttribute('href',b); //下载文件的请求路径
		  a.click();
		  body.removeChild(a)
		}
	},
}
</script>

<style>
	
</style>