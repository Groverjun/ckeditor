<template>
	<div>
		<div class="block MaskHover" style="width: 800px;height: 450px;" v-for="(item,index) in alldata">
			<img v-bind:src="item.img" v-if="item.imgIFvideo" width="100%"/>
			<video width="800" height="" controls v-else="item.imgIFvideo">
				<source v-bind:src="item.video" type="video/mp4"></source>
				当前浏览器不支持 video直接播放，点击这里下载视频： <a href="myvideo.webm">下载视频</a>
			</video>
				<div class="MaskBox">
					<p>
						上传文件的宽为500px
					</p>
					<p>
						<el-button type="danger" icon="el-icon-delete">删除</el-button>
						<el-button type="primary" icon="el-icon-edit">上传</el-button>
						<el-button type="primary" icon="el-icon-edit" @click="ifVideo(index,item.imgIFvideo)">{{item.imgHtml}}</el-button>
					</p>
				</div>
	  	</div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
		
		alldata:[
			{
				img:"http://page-bucket.oiaqye7985.com/img/1538180845191.jpg",
				video:"http://page-bucket.oiaqye7985.com/video/1539916439140.mp4",
				p:"文字文字文字",
				imgIFvideo:true,
				imgHtml:"切换为视频",
			}
		]
      };
    },
    methods:{
    	ifVideo(index,val){
    		if(val){
    			this.alldata[index].imgHtml="切换为图片";
    			//上传图片
    		}else{
    			this.alldata[index].imgHtml="切换为视频"
    			//上传视频
    		}
    		this.alldata[index].imgIFvideo=!this.alldata[index].imgIFvideo
    	},
    	dataVideo(_this,input_file,maxWidth, get_data){
    		var formData = new FormData();
			var file = input_file.files[0];
			formData.append("file",file);
    	},
    	dataImg(_this,input_file,maxWidth, get_data){
		 	var formData = new FormData();
			var file = input_file.files[0];
		    formData.append("file",file);
            if (!/image\/\w+/.test(file.type)) {  
                _this.open("请确保文件为图像类型",'warning')
                input_file.value=''
                return false;  
            }  
            if(parseInt(file.size/1024)>700){
            	_this.open("图片不能大于700kb",'warning')
            	input_file.value=''
            	return false;  
            }
            var reader = new FileReader();  
            reader.onload = function () {
                var image = new Image();
                image.onload=function(){
                    if(maxWidth>=(image.width-5)&&parseInt(file.size/1024)<700){
                    	/**发送Ajax请求*/
                    	get_data(image.src);
                    }else{
                  		/**宽不正确*/
						_this.open("请确保图片的宽不大于"+maxWidth+"px",'warning')
						input_file.value=''
                    }
                }
                image.src= this.result;
            }  
            reader.readAsDataURL(file);  
		},
    }
  };
</script>