<template>
	<div class="module8">
		<div class="module8_head">
			<h1>
				最新
					<span v-if="!delNode" :style="{color:data.backgroundColor}">{{data.headTxt1}}</span>
					<input type="text" v-if="delNode" v-model="data.headTxt1"  :style="{color:data.backgroundColor}" width="160px"/>
				报价
			</h1>
			<h1 class="module8_head2">
				<i :style="{color:data.Color}">源头厂家直销</i>平均节省
				<span v-if="!delNode" :style="{color:data.backgroundColor}">{{data.headTxt2}}</span>
				<input type="text" v-if="delNode" v-model="data.headTxt2" :style="{color:data.backgroundColor}"/>
				采购成本
			</h1>
			<div class="module8Head_img container">
				<div class="MaskHover">
					<img v-bind:src="data.headImg" />
					<div class="MaskBox" v-if="delNode">
						<p>上传图片的宽为650px</p>
						<p>
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
								<i class="el-icon-upload"></i><span>上传</span>
								<input type="file" @change="head($refs.headImg,650)" ref="headImg"/>
							</a>
						</p>
					</div>					
				</div>
				<div class="module8Head_imgAbt">
					<a href="javascript:void(0)" :style="{background:data.backgroundColor}">
						<span v-if="!delNode">{{data.headAbt1}}</span>
						<input type="text" v-if="delNode" v-model="data.headAbt1" style="width: 160px;"/>
					</a>
					<a href="javascript:void(0)" style="background: #2d2d2d;">
						<span  v-if="!delNode">{{data.headAbt2}}</span>
						<input type="text" v-if="delNode" v-model="data.headAbt2" style="width: 130px;"/>
					</a>
				</div>
			</div>
			<div class="module8Head_b">
				<div class="container swiper-containe swiper1">
					<div class="row swiper-wrapper" >
						<div class="col-md-4 swiper-slide" v-for="(item,index) in data.headList">
							<p class="">
								<img v-if="data.choice" src="http://page-bucket.oiaqye7985.com/land-page/images/module9/module7_11.jpg"/>
								<img v-if="!data.choice" src="http://page-bucket.oiaqye7985.com/land-page/images/module9/red_right.jpg"/>
								<span v-if="!delNode">{{item.p}}</span>
								<input type="text" v-if="delNode" v-model="item.p" style="width: 160px;"/>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="addNode" v-if="delNode">
				<el-button type="primary" icon="el-icon-edit" @click="headBaddEvent">添加一块</el-button>
				<el-button type="danger" icon="el-icon-delete" @click="headBdelEvent">删除一块</el-button>
			</div>
		</div>
		<!---->
		<div class="module8_middle">
			<div class="container swiper-containe swiper2">
				<div class="row swiper-wrapper">
					<div class="col-md-6 swiper-slide" v-for="(item,index) in data.middleList">
						<div class="module8Middle_list ">
							<h1 :style="{color:data.backgroundColor}">
								<span v-if="!delNode">{{item.h1}}</span>
								<input type="text" v-if="delNode" v-model="item.h1" style="width: 100%;text-align: center;"/>
							</h1>
							<p>
								<span v-if="!delNode">{{item.p}}</span>
								<input type="text" v-if="delNode" v-model="item.p" style="width: 100%;text-align: center;"/>
							</p>
							<div class="MaskHover">
								<img v-bind:src="item.img" class=""/>
								<div class="MaskBox" v-if="delNode">
									<p>上传图片的宽为420px</p>
									<p>
										<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
											<i class="el-icon-upload"></i><span>上传</span>
											<input type="file"  @change="listAEvent($refs.listA[index],index,420)" ref="listA" />
										</a>
										<el-button type="danger" icon="el-icon-delete" @click="listADelEvent(index)" >删除</el-button>
									</p>
								</div>			
							</div>
							<div class="module8Middle_listAbt">
								<a href="javascript:void(0)" :style="{background:data.backgroundColor}">
									<span v-if="!delNode">{{item.abt1}}</span>
									<input type="text" v-if="delNode" v-model="item.abt1" style="width: 100px;text-align: center;"/>
								</a>
								<span>
									<span v-if="!delNode">{{item.abt2}}</span>
									<input type="text" v-if="delNode" v-model="item.abt2" style="width: 120px;text-align: center;"/>
								</span>
							</div>
						</div>
					</div>
					<div class="col-md-6  mediaMin" v-show="data.odd">
						<div class="module8Middle_a">
							<img src="http://page-bucket.oiaqye7985.com/land-page/images/module9/module7_6.jpg"/>
							<p>更多产品或定制 ></p>
						</div>
					</div>
				</div>
				<div  v-show="!data.odd">
					<div class="row">
						<div class="col-md-12">
							<div class="module8Middle_aT">
								<img src="http://page-bucket.oiaqye7985.com/land-page/images/module9/module7_10.jpg"/>
								<span>更多产品或定制</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="addNode" v-if="delNode">
				<el-button type="primary" icon="el-icon-edit" @click="listAaddEvent">添加一块</el-button>
			</div>
		</div>
		<!---->
		<div class="module8_listT">
			<div class="container swiper-containe swiper3">
				<div class="row swiper-wrapper">
					<div class="col-md-4 swiper-slide" v-for="(item,index) in data.Mlist">
						<p class="">
							<img v-if="data.choice" src="http://page-bucket.oiaqye7985.com/land-page/images/module9/module7_11.jpg"/>
							<img v-if="!data.choice" src="http://page-bucket.oiaqye7985.com/land-page/images/module9/red_right.jpg"/>
							<span v-if="!delNode">{{item.p}}</span>
							<input type="text" v-if="delNode" v-model="item.p" style="width: 180px;text-align: center;"/>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
				<el-button type="primary" icon="el-icon-edit" @click="listTaddEvent">添加一块</el-button>
				<el-button type="danger" icon="el-icon-delete" @click="listTaddEvent">删除一块</el-button>
		</div>
		<!---->
		<div class="module8Bg_list swiper-containe swiper4">
			<div class="container swiper-wrapper">
				<div class="module8Bg_listU  swiper-slide" v-for="(item,index) in data.MlistImg">
					<div class="module8Bg_listUImg MaskHover">
						<img v-bind:src="item.img" width="100%"/>
						<div class="MaskBox" v-if="delNode" style="top: 200px;height: 200px;">
							<p>上传图片的宽为1200px</p>
							<p>
								<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
									<i class="el-icon-upload"></i><span>上传</span>
									<input type="file"  @change="listBEvent($refs.listB[index],index,1200)" ref="listB" />
								</a>
								<el-button type="danger" icon="el-icon-delete" @click="listBDelEvent(index)">删除</el-button>
								<el-color-picker v-model="item.color" style="position: relative;top: 15px;"></el-color-picker>
							</p>
							<!---->
						</div>
					</div>
					<div class="module8Bg_listUH1" >
						<h1 :style="{color:item.color}">
							<span v-if="!delNode">{{item.h1}}</span>
							<input type="text" v-if="delNode" v-model="item.h1" style="width: 100%;text-align: center;"/>
						</h1>
						<h1 :style="{color:item.color}">
							<span v-if="!delNode">{{item.h2}}</span>
							<input type="text" v-if="delNode" v-model="item.h2" style="width: 100%;text-align: center;"/>
						</h1>
					</div>
					<div class="module8Bg_listAbt">
						<a href="javascript:void(0)">
							<span v-if="!delNode">{{item.abt1}}</span>
							<input type="text" v-if="delNode" v-model="item.abt1" style="width: 160px;text-align: center;"/>
						</a>
						<a href="javascript:void(0)">
							<span v-if="!delNode">{{item.abt2}}</span>
							<input type="text" v-if="delNode" v-model="item.abt2" style="width: 160px;text-align: center;"/>
						</a>
					</div>
				</div>				
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<el-button type="primary" icon="el-icon-edit" @click="listBaddEvent">添加一块</el-button>
		</div>
		<!---->
		<div class="module8_head module8_bottom">
			<h1>
				现在咨询
					<span v-if="!delNode" :style="{color:data.backgroundColor}">{{data.bottomTxt1}}</span>
					<input type="text" v-if="delNode" v-model="data.headTxt1" :style="{color:data.backgroundColor}"/>
				报价
			</h1>
			<h1>
				获取<i :style="{color:data.Color}">最新优惠</i>
			</h1>
			<div class="module8Head_img container">
				<div class="MaskHover">
					<img v-bind:src="data.bottomImg" />
					<div class="MaskBox" v-if="delNode" >
						<p>上传图片的宽为650px</p>
						<p>
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
								<i class="el-icon-upload"></i><span>上传</span>
								<input type="file" @change="bottom($refs.bottomImg,650)" ref="bottomImg"/>
							</a>
						</p>
						<!---->
					</div>
				</div>
				<div class="module8Head_imgAbt">
					<a href="javascript:void(0)"  :style="{background:data.backgroundColor}">
						<span v-if="!delNode">{{data.bottomAbt1}}</span>
						<input type="text" v-if="delNode" v-model="data.bottomAbt1" style="width: 160px;"/>
					</a>
					<a href="javascript:void(0)"  style="background: #2d2d2d;">
						<span v-if="!delNode">{{data.bottomAbt2}}</span>
						<input type="text" v-if="delNode" v-model="data.bottomAbt2" style="width: 160px;"/>
					</a>
				</div>
			</div>
		</div>			
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
		this.data=this.GLOBAL.module8
		console.log(this.data)
		console.warn("警告")
		console.warn("警告")
		if(this.data.middleList.length%2){this.data.odd=true}else{this.data.odd=false}
		
		this.data.choice=true
		//#b9181d #2a5ea4
		this.data.backgroundColor="#2a5ea4"
		this.data.Color="#b9181d"
	},
	updated(){
		
	},
	methods:{
		/*图片编辑区*/
		head(input_file,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.headImg=str
	    	})
    		input_file.value=''
		},
		
		listAEvent(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.middleList[index].img=str
	    	})
    		input_file.value=''
		},
		listADelEvent(index){
			this.data.middleList.splice(index,1)
			if(this.data.middleList.length%2){this.data.odd=true}else{this.data.odd=false}
		},
		listAaddEvent(index){
			this.data.middleList.push({
				h1:"扭力扳手系列",
				p:"库存：1800件 规格：25cm",
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module9/module7_1.jpg",
				abt1:"立即询价",
				abt2:"咨询产品参数 >"
			})
			if(this.data.middleList.length%2){this.data.odd=true}else{this.data.odd=false}
		},
		
		listBEvent(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.MlistImg[index].img=str
	    	})
    		input_file.value=''
		},
		listBDelEvent(index){
			this.data.MlistImg.splice(index,1)
		},
		listBaddEvent(){
			this.data.MlistImg.push({
			    h1:"我们扭力扳手",
			    h2:"精准拧好每个螺丝",
			    img:"http://page-bucket.oiaqye7985.com/land-page/images/module9/module7_7.jpg",
			    abt1:"咨询产品参数>",
			    abt2:"询最新优惠价>",
			    color:"#000"
			})
		},
		bottom(input_file,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.bottomImg=str
	    	})
    		input_file.value=''
		},
		headBaddEvent(){
			this.data.headList.push({p:"16年建厂历史"})
		},
		headBdelEvent(){
			let index=this.data.headList.length-1
			this.data.headList.splice(index,1)
		},
		listTaddEvent(){
			this.data.Mlist.push({p:"16年建厂历史"})
		},
		listTaddEvent(){
			let index=this.data.headList.length-1
			this.data.Mlist.splice(index,1)
		},
		/*图片编辑结束*/
		
      	/*上传图片**/
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
		open(val,type) {
	        this.$message({
	          duration:1000,
	          message:val,
	          type: type
	        });
	    },		
	}
}
</script>

<style>
.module8 *{
	font-style: normal;
	list-style: none;
	box-sizing: border-box;
	
}
.module8{
	width: 100%;
}
h1,h3,p,ul,li{margin: 0;
	padding: 0;}
..module8 .module8_head{
	padding-bottom: 80px;
	background: #fff;
}
.module8 .module8_head h1{
	font-size: 48px;
	text-align: center;
	font-weight: 600;
	line-height: 60px;
}
.module8 .module8_head h1 span{
	color: #2a5ea4;
}
.module8 .module8_head h1 i{
	color: #b4191c;
}
.module8 .module8_head .module8Head_img{
	text-align: center;
	padding-top: 60px;
}
.module8 .module8_head .module8Head_imgAbt{
	padding: 60px 0;
}
.module8 .module8_head .module8Head_imgAbt a{
	font-size: 22px;
	color: #fff;
	background: #295ea3;
	padding: 16px 22px;
	margin: 0 15px;
	border-radius: 10px;
	text-decoration: none;
	font-weight: normal;
}
.module8 .module8Head_b p{
	width: 320px;
	height: 120px;
	line-height: 120px;
	text-align: center;
	box-shadow: 0 0 15px 2px #ccc;
	color: #222222;
	font-size: 22px;
	    margin-bottom: 30px;
	
}
.module8 .module8Head_b p img{
	margin-right: 10px;
	position: relative;
	top: -5px;
}
.module8 .module8_middle {
	background: #e9ecee;
	padding: 60px 0;
}
.module8 .module8_middle .module8Middle_list{
	background: #fff;
	padding: 45px 0;
	text-align: center;
	margin-bottom: 30px;
}
.module8 .module8_middle .module8Middle_list h1{
	font-size: 30px;
	color: #2a5ea4;
}
.module8 .module8_middle .module8Middle_list p{
	font-size: 20px;
	color: #444444;
	padding-bottom: 40px;
}
.module8 .module8Head_b{
	padding-bottom: 30px;
}
.module8 .module8_middle .module8Middle_list div{
	min-height: 300px;
}
.module8 .module8_middle .module8Middle_list div img{
	width: auto;
}
.module8 .module8_middle .module8Middle_list .module8Middle_listAbt{
	/*padding-top: 40px;*/
	min-height: 50px;
}
.module8 .module8_middle .module8Middle_list .module8Middle_listAbt a{
	font-size: 17px;
	color: #ffffff;
	padding: 12px 35px;
	border-radius:2000px;
	background: #295EA3;
	text-decoration: none;
}
.module8 .module8_middle .module8Middle_list .module8Middle_listAbt>span{
	font-size: 17px;
	padding: 12px 35px;
	text-decoration: none;
	cursor: pointer;
}
.module8 .module8_middle  .module8Middle_a{
	min-height: 544px;
	background: #fff;
	text-align: center;
	display: flex;
	
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
.module8 .module8_middle  .module8Middle_a p{
	color:#333333;
	font-size: 22px;
	font-weight: bold;
  padding: 15px 0 0;
}
.module8 .module8_middle  .module8Middle_aT{
	color:#333333;
	font-size: 22px;
	font-weight: bold;
  padding: 15px  0;
  text-align: center;
  background: #fff;
  cursor: pointer;
  
}

.module8_head input{
	width: 200px;
}
.module8_head2 input{width: 93px;}
.module8 .module8_listT{
	padding:60px 0 30px;
}
.module8 .module8_listT  p{
	width: 320px;
	height: 120px;
	line-height: 120px;
	text-align: center;
	box-shadow: 0 0 15px 2px #ccc;
	color: #222222;
	font-size: 22px;
	margin-bottom: 30px;
	
}
.module8 .module8Bg_list{
	padding:70px 0 ;
	background: #e9ecee;
}
.module8 .module8_middle  .module8Middle_aT img{
	margin-right: 15px;
}
.module8 .module8Bg_list .module8Bg_listU{
	position: relative;
}

.module8 .module8Bg_list .module8Bg_listU .module8Bg_listUH1{
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	padding: 40px;
	text-align: center;
}
.module8 .module8Bg_list .module8Bg_listU .module8Bg_listUH1 h1{
	font-size: 34px;
	color: #000;
	line-height: 40px;
}
.module8 .module8Bg_list .module8Bg_listU .module8Bg_listAbt{
	text-align: center;
	padding: 20px 0;
}
.module8 .module8Bg_list .module8Bg_listU .module8Bg_listAbt a{
	font-size: 18px;
	color: #222222;
	text-decoration: none;
	margin: 0 15px;
}
.module8 .module8Bg_list .module8Bg_listU .module8Bg_listAbt a:nth-child(2){
	color: #2a5ea4;
}
.module8 .module8_bottom{
	padding-top: 60px;
	padding-bottom: 20px;
}
.module8 input{
	border:none;
	outline: none;
	background: none;
}
.module8 input:focus,textarea:focus{
	border: 1px dotted #1994FF;
}
@media (max-width:750px ) {
	.module8 .module8_head{
		padding-top: 20px;
		padding-bottom: 30px;
	}
	.module8 .mediaMin{display: none;}
	.module8 .module8_head h1{
		font-size: 20px;
		line-height: 25px;
	}
	.module8 .module8Head_b .row{margin: 0;}
	.module8 .module8_middle .row{margin: 0;}
	.module8 .module8_listT .row{margin: 0;}
	.module8 .module8_head .module8Head_img{
		padding-top: 30px;
	}
	.module8 .module8_head .module8Head_imgAbt{
		padding: 15px 0;
	}
	.module8 .module8Head_img p img{
		width: 100%;
	}
	.module8 .module8_head .module8Head_imgAbt a{
		display: block;
		margin:10px auto ;
		font-size: 16px;
		padding: 10px;
	}
	.module8 .module8Head_b p{
		margin:20px auto;
	}
	.module8 .module8_middle .module8Middle_list div{
		min-height: 200px;
	}
	.module8 .module8_middle .module8Middle_list div img{
		width: 90%;
	}
	.module8 .module8_listT p{
		margin:20px auto;
	}
	.module8 .module8Bg_list .module8Bg_listU .module8Bg_listUH1 h1{
		font-size: 18px;
		line-height: 25px;
		font-weight: 600;
	}
	
}
</style>