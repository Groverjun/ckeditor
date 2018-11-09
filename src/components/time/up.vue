<template>
	<el-upload class="upload-demo" 
		:action="fileUrl"
		:on-success="aa" 
		:before-upload="beforeFile" 
		:show-file-list="false"
	>
  		<el-button size="small" type="primary">点击上传</el-button>
	</el-upload>
</template>
<script>
  export default {
    data() {
      return {
      	fileUrl:this.baseURL.dev+"/file/saveVideo"
      };
    },
    methods: {
      aa(val){
      	console.log(val)
      },
      beforeFile(files){
       
      },
      compareImg(files,maxWidth,maxHeight){
  	    let _URL = window.URL || window.webkitURL;
  	    let image = new Image();
  	    let start='a'
        image.onload=function(){
           if(maxWidth==image.width){
           	 console.log(image.width)
           	  start=true
           }else{
              start=false
           }
           return start
        }
        image.src= _URL.createObjectURL(files);
      },
    }
  }
</script>
<style type="text/css">
	.upload-demo {display: inline-block;}
	.upload-demo input[type=file]{display: none !important; }
</style>