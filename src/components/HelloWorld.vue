<template>
 <div>
	 	<div class="editor">
		 	0000
		</div>
 </div>
</template>
<script>
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
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
	},
	created(){
		
	},
	mounted(){
		var txt=document.getElementsByClassName("editor")[0]
		InlineEditor.create(txt,{
    				language: 'zh-cn',
    				plugins: [ 'Bold', 'Italic','Highlight' ],
    				toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote','highlight' ],
    			}).catch( error => {});
	},
	updated(){
	},
	methods:{

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
