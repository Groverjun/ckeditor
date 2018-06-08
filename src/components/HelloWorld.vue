<template>
 <div>
	 <div  v-for="(item,index) in length" class="box">
	 	啊
	 	<div class="editor">
		 	0000
		 </div>啊
	 </div>
	 <button @click="addNode">添加一个</button>
	 <button @click="delNode">删除一个</button>
	 <button @click="destroyNode">销毁</button>
 </div>
</template>
<script>
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
export default {
	data () {
		return{
			data:null,
			length:[],
			a:true,
		}
	},
	computed: {
	  
	},
	watch: {  
	   length(val){
	   	if(this.a!=true){return false}
	   	var index=this.length.length
	   	this.$nextTick(function () {
    		var txt=document.getElementsByClassName("editor")
    		for(var i=0;i<=index-1;i++){
    			InlineEditor.create(txt[i],{
    				language: 'zh-cn',
    				toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
    			}).catch( error => {});
    		}
      	})
	   }
	},
	created(){
		
	},
	mounted(){
			for(var i=0;i<=5;i++){
				this.length.push({length:0})
			}
			
	},
	updated(){
	},
	methods:{
		addNode(){
			this.a=false
			this.length.push({length:0})
			var index=this.length.length-1
			this.$nextTick(function () {
        		var txt=document.getElementsByClassName("editor")
				InlineEditor.create(txt[index],{
    				language: 'zh-cn',
    				toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
    			}).catch( error => {});
      		})
		},
		destroyNode(){
			editor.destroy()
		    .catch( error => {
		        console.log( error );
		    } );
		},
		delNode(){
			this.a=false
			var index=this.length.length-1
//			if(index==0){
//				var delN=document.getElementsByClassName("ck-reset_all")
//				for(var i=delN.length-1;i>=0;i--){
//					console.log(i)
//					delN[i].parentNode.removeChild(delN[index]);
//				}
//			}
//			var delN=document.getElementsByClassName("ck-reset_all")
//			delN[index].parentNode.removeChild(delN[index]);
			this.length.splice(index,1)
		}
	},
}
</script>

<style>
	*{margin: 0;padding: 0;}
.editor{
	/*width: 400px;*/
	
}
.box>.editor{
	display: inline-block;
}
.box{display: flex;align-items: center;}
.box>.editor p{
	margin: 0;padding: 0;
	 margin-bottom: var(0); 
	 margin-top: var(0);
}
</style>
