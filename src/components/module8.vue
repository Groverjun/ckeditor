<template>
	<div class="module8">
		
	</div>
</template>

<script>
export default {
	data () {
		return{
			data:{},
			delNode:true,
		}
	},
	computed: {
	  
	},
	watch: {  
	},
	created(){
		
	},
	mounted(){
		var param=$.param({
			id:1,
			authorName:"b",
			rank:1
		})
		let Url = 'http'
		　　console.log("https://github.com/vuejs/vue-devtools");
		
		　　console.debug("这是debug");
		
		　　console.warn("这是warn");
		
//		　　console.error("这是error");
		  console.table({'name':"1",'age':"20"},{'name':"1",'age':"20"})
		  console.clear()
		  console.time()
		  console.timeEnd()
	},
	updated(){
		
	},
	methods:{
		
	}
}
</script>

<style>
</style>