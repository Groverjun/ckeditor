<template>
		<div class="template15">
			<div class="template15_banner" :style="{background:'url(' + data.bannerBg + ')'}">
				<div class="row clearfix">
					<div class="template15_bannerLeft">
						<h2 class="title" :style="{background:data.background}">
							<span v-if="!delNode">{{data.title}}</span>
							<input type="text" v-if="delNode" v-model="data.title"style="width: 145px;"/>
						</h2>
						<div class="template15_bannerLeftTxt">
							<h1 :style="{color:data.background}">
								<span v-if="!delNode">{{data.bannerH1}}</span>
								<input type="text" v-if="delNode" v-model="data.bannerH1" style="width: 330px;"/>
							</h1>
							<h3 :style="{background:data.background}">
								<span v-if="!delNode">{{data.bannerP}}</span>    
								<input type="text" v-if="delNode" v-model="data.bannerP" style="width: 238px;"/>
								<i>>>>>></i> 
							</h3>
							<ul>
								<li  :style="{color:data.background,borderColor:data.background}">
									<span v-if="!delNode">{{data.bannerList1}}</span>
									<input type="text" v-if="delNode" v-model="data.bannerList1" style="width: 286px;"/>
								</li>
								<li  :style="{color:data.background,borderColor:data.background}">
									<span v-if="!delNode">{{data.bannerList2}}</span> 
									<input type="text" v-if="delNode" v-model="data.bannerList2" style="width: 286px;"/>
								</li>
							</ul>
							<p><a href="javascript:void(0)" :style="{background:data.background}">
								<span v-if="!delNode">{{data.bannerAbt}}</span>
								<input type="text" v-if="delNode" v-model="data.bannerAbt" style="width:150px;"/>
							</a></p>
						</div>
					</div>
					<div class="template15_bannerRight MaskHover">
						<img v-bind:src="data.banner" />
						<div class="MaskBox" v-if="delNode">
							<p>上传背景图的宽为1920px高为650px <br />上传产品图片的宽为600px</p>
							<p>
								<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
									<i class="el-icon-upload"></i><span>上传产品图</span>
									<input type="file"  ref="f1" @change="banner($refs.f1,644)"/>
								</a>
								<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
									<i class="el-icon-upload"></i><span>上传背景图</span>
									<input type="file"  ref="f2" />
								</a>
							</p>
						</div>	
					</div>
				</div>
			</div>
			<!--/banner-->
			<div class="template15_titleTop" :style="{background:data.background}">
				<div class="row template15_titleTopBorder">
					<div class="clearfix template15_titleTopWidth">
						<div class="template15_titleTopLeft">
							<h1 :style="{color:data.background}">
								<span v-if="!delNode">{{data.productH1}}</span>
								<input type="text" v-if="delNode" v-model="data.productH1" style="width:230px;"/>
							</h1>
							<ol >
								<li :style="{color:data.background}">
									<i class="iconfont icon-duigou"></i>
									<span v-if="!delNode">{{data.productP1}}</span>
									<input type="text" v-if="delNode" v-model="data.productP1" style="width:130px;"/>
								</li>
								<li :style="{color:data.background}">
									<i class="iconfont icon-duigou"></i>
									<span v-if="!delNode">{{data.productP2}}</span>
									<input type="text" v-if="delNode" v-model="data.productP2" style="width:130px;"/>
								</li>				
							</ol>
							<p><a href="javascript:void(0)" :style="{color:data.background}">
								<span v-if="!delNode">{{data.productAbt}}</span>
								<input type="text" v-if="delNode" v-model="data.productAbt" style="width:200px;"/>
							</a></p>
						</div>
						<div class="template15_titleTopRight">
						<ul class="clearfix">
							<li v-for="(item,index) in data.productList" :style="{background:data.background}">
								<h2 >
									<span v-if="!delNode">{{item.h1}}</span>
									<input type="text" v-if="delNode" v-model="item.h1" style="width:100%;text-align: right;"/>
								</h2>
								<p class="content">
									<span v-if="!delNode">{{item.p}}</span>
									<input type="text" v-if="delNode" v-model="item.p" style="width:100%;text-align: right;"/>
								</p>
								<p><a href="javascript:void(0)">
									<span v-if="!delNode">{{item.a}}</span>
									<input type="text" v-if="delNode" v-model="item.a" style="width:100%;text-align: right;"/>
								</a></p>
							</li>
						</ul>
					</div>
					</div>
					<div class="template15_titleTopWidthB" :style="{borderColor:data.background}"></div>
				</div>
			</div>
			<!--/产品介绍文字-->
			<div class="template15_series" v-for="(item,index) in data.series">
				<div class="template15_titleBox" :style="backgroundBox(index,data.background)">
					<!--标题颜色-->
					<div class="row template15_title">
						<h1><span class="iconfont icon-huangguan" :style="colorBox(index,data.background)"></span></h1>
						<p :style="{color:data.background}">
							<span v-if="!delNode" :style="colorBox(index)">{{item.h1}}</span>
							<input type="text" v-if="delNode" v-model="item.h1" :style="colorBox(index)" class="template15_titleh1"/>
						</p>
						<h2>
							<i></i>
							<span v-if="!delNode" :style="colorBox(index)">{{item.p}}</span>
							<input type="text" v-if="delNode" v-model="item.p" :style="colorBox(index)" class="template15_titleh2"/>
							<i></i>
						</h2>
					</div>
					<!--/标题颜色-->
				</div>
				<div class="row clearfix template15_seriesRow">
					<div class="template15_seriesLeft MaskHover">
						<img v-bind:src="item.img"/>
						<div class="MaskBox" v-if="delNode">
							<p>上传图片的宽为410px</p>
							<p>
								<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
									<i class="el-icon-upload"></i><span>上传</span>
									<input type="file"  ref="f3" @change="series($refs.f3[index],index,410)" />
								</a>
								<el-button type="danger" icon="el-icon-delete" @click="delseries(index)">删除</el-button>
							</p>
						</div>	
					</div>
					<div class="template15_seriesRight">
						<h2>
							<span v-if="!delNode">{{item.h2}}</span>
							<input type="text" v-if="delNode" v-model="item.h2" style=""/>
						</h2>
						<h1 :style="{color:data.background}">
							<span v-if="!delNode">{{item.h3}}</span> 
							<input type="text" v-if="delNode" v-model="item.h3" style=""/>
						</h1>
						<p :style="{background:data.background}">
							<span v-if="!delNode">{{item.h4}}</span>
							<input type="text" v-if="delNode" v-model="item.h4" style="width: 500px;"/>
						</p>
						<ul class="clearfix">
							<li v-for="(itemT,indexT) in item.ol " >
								<span class="iconfont icon-qian" v-if="indexT==0" :style="{color:data.background,borderColor:data.background}"></span>
								<span class="iconfont icon-tuandui" v-if="indexT==1" :style="{color:data.background,borderColor:data.background}"></span>
								<span class="iconfont icon-shijian" v-if="indexT==2" :style="{color:data.background,borderColor:data.background}"></span>
								<p :style="{background:data.background}">
									<span v-if="!delNode">{{itemT.p}}</span>
								  <input type="text" v-if="delNode" v-model="itemT.p" style="width: 100px;text-align: center;"/>
								</p>
							</li>
						</ul>
						<h3><a href="javascript:void(0)" :style="{color:data.background,borderColor:data.background}">
							<span v-if="!delNode">{{item.abt}}</span>
						 	<input type="text" v-if="delNode" v-model="item.abt" style="width: 100px;"/>
						</a></h3>
					</div>
				</div>
				<div class="row clearfix template15_seriesListbox">
					<div class="template15_seriesList" v-for="(itemS,indexS) in item.ul" >
						<div class="img MaskHover">
							<img v-bind:src="itemS.img"/>
							<div class="position">
								<span class="iconfont icon-bookmark"  :style="{color:data.background}"></span><i>推荐</i>
							</div>
							<div class="MaskBox" v-if="delNode">
								<p style="height: 50px;line-height: 50px;">上传图片的宽为500px</p>
								<p  style="height: 50px;line-height: 50px;">
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
										<i class="el-icon-upload"></i><span>上传</span>
										<input type="file"  v-bind:id="funtionId(index,indexS)" @change="seriesT(indexS,index,500)"/>
									</a>
									<el-button type="danger" icon="el-icon-delete" @click="delseriesT(indexS,index)">删除</el-button>
								</p>
							</div>
						</div>
						<h1>
							<span v-if="!delNode">{{itemS.h1}}</span>
							<input type="text" v-if="delNode" v-model="itemS.h1" style="width: 100%;text-align: center;"/>
						</h1>
						<p :style="{color:data.background}">
							<span v-if="!delNode">{{itemS.p}}</span>
							<input type="text" v-if="delNode" v-model="itemS.p" style="width: 100%;text-align: center;"/>
						</p>
						<a href="javascript:void(0)">
							<span v-if="!delNode">{{itemS.abt}}</span>
							<input type="text" v-if="delNode" v-model="itemS.abt" style="width: 100px;text-align: center;"/>
						</a>
						
					</div>
				</div>
				<div class="addNode" v-if="delNode">
					<el-button type="primary" icon="el-icon-edit" @click="addseriesT(index)">添加一个推荐模块</el-button>
				</div>
			</div>
			<div class="addNode" v-if="delNode">
				<el-button type="primary" icon="el-icon-edit" @click="addseries">添加一块石雕系列</el-button>
			</div>
			<!--/系列-->
			<div class="template15_list" :style="{background:data.background}">
				<div class="row ">
					<ul class="clearfix">
						<li v-for="(item,index) in data.advantage1">
							<p :style="{borderColor:data.background,color:data.background}">
								<span v-if="!delNode">{{item}}</span>
								<input type="text" v-if="delNode" v-model="data.advantage1[index]" style="text-align: center;width: 100%;" />
							</p>
						</li>
					</ul>
				</div>
			</div>
			<!--产品亮点-->
			<div class="template15_strength">
				<div class="row template15_title">
					<h1><span class="iconfont icon-huangguan" :style="{color:data.background}"></span></h1>
					<p  :style="{color:data.background}">
						<span v-if="!delNode">{{data.manufactorH1}}</span>
						<input type="text" v-if="delNode" v-model="data.manufactorH1" style="text-align: center;width: 100%;" />
					</p>
					<h2>
						<i></i>
						<span v-if="!delNode">{{data.manufactorp}}</span>
						<input type="text" v-if="delNode" v-model="data.manufactorp" style="text-align: center;width: 400px;" />
						<i></i>
					</h2>
				</div>
				<div class="row clearfix">
					<div class="template15_strengthList" v-for="(item,index) in data.manufactorUl">
						<div class="img MaskHover">
							<img v-bind:src="item.img"/>
							<div class="MaskBox" v-if="delNode">
								<p style="height: 50px;line-height: 50px;">上传图片的宽为580px</p>
								<p  style="height: 50px;line-height: 50px;">
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
										<i class="el-icon-upload"></i><span>上传</span>
										<input type="file"  ref="f5" @change="strength($refs.f5[index],index,568)"/>
									</a>
									<el-button type="danger" icon="el-icon-delete" @click="delstrength(index)">删除</el-button>
								</p>     
							</div>
						</div>
						<p  :style="{background:data.background}">
							<span v-if="!delNode">{{item.p}}</span>
						<input type="text" v-if="delNode" v-model="item.p" style="text-align: center;width: 100%;" />
						</p>
					</div>
				</div>
			</div>
			<div class="addNode" v-if="delNode">
				<el-button type="primary" icon="el-icon-edit" @click="addstrength">添加一块</el-button>
			</div>
			<!--厂家实力-->
			<div class="template15_list" :style="{background:data.background}">
				<div class="row ">
					<ul class="clearfix">
						<li v-for="(item,index) in data.advantage2">
							<p :style="{borderColor:data.background,color:data.background}">
								<span v-if="!delNode">{{item}}</span>
								<input type="text" v-if="delNode" v-model="data.advantage2[index]" style="text-align: center;width: 100%;" />
							</p>
						</li>
					</ul>
				</div>
			</div>
			<!--产品亮点-->
			<div id="script" ref="script"></div>
		</div>
</template>

<script>
  export default {
    data() {
      return {
      	data:{bannerBg:"http://page-bucket.oiaqye7985.com/land-page/images/module15/bannerBg.jpg",},
		delNode:true,
      };
    },
    computed: {
	  
	},
	watch: {  
		
	},
	created(){
		
	},
	mounted(){
		this.data=this.data=this.GLOBAL.module15
		console.log(this.data=this.GLOBAL.module15)
	},
  methods:{
  	//内容编辑
		banner(input_file,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.banner=str
	    	})
    		input_file.value=''
		},  	
  	
 		series(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.series[index].img=str
	    	})
    		input_file.value=''
		},
		seriesT(index,indexT,maxWidth){
			let input_file=document.getElementById("f"+indexT+index)
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.series[indexT].ul[index].img=str
	    			
	    	})
    		input_file.value=''
		},
		delseriesT(indexS,index){
			console.log(index)
			console.log(indexS)
			console.log(this.data.series[index].ul)
			this.data.series[index].ul.splice(indexS,1)
		},
		addseriesT(index){
			console.log(index)
			this.data.series[index].ul.push({
					img:"http://page-bucket.oiaqye7985.com/land-page/images/module15/Elephant.jpg",
					h1:"石雕大象",
					p:"2年质保 / 不易破碎 / 耐腐蚀 / 厂家定制",
					abt:"咨询优惠"
				})
		},
		delseries(index){
			this.data.series.splice(index,1)
		},
		addseries(){
			this.data.series.push({
			h1:"石雕系列",
			p:"10年源头厂家直供，量大优惠",
			img:"http://page-bucket.oiaqye7985.com/land-page/images/module15/person.jpg",
			h2:"古代人物石雕",
			h3:"原地天然取材 工艺精细",
			h4:"纯手工打造  表面光滑   品质保证",
			ol:[
				{
					p:"低于同行",
					cla:"iconfont icon-qian"
				},
				{
					p:"专业团队",
					cla:"iconfont icon-tuandui"
				},
				{
					p:"周期短",
					cla:"iconfont icon-shijian"
				}
			],
			abt:"马上咨询",
			ul:[
				{
					img:"http://page-bucket.oiaqye7985.com/land-page/images/module15/Elephant.jpg",
					h1:"石雕大象",
					p:"2年质保 / 不易破碎 / 耐腐蚀 / 厂家定制",
					abt:"咨询优惠"
				},
				{
					img:"http://page-bucket.oiaqye7985.com/land-page/images/module15/Elephant.jpg",
					h1:"石雕大象",
					p:"2年质保 / 不易破碎 / 耐腐蚀 / 厂家定制",
					abt:"咨询优惠"
				}
			]
		})
		},
		strength(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.manufactorUl[index].img=str
	    	})
    		input_file.value=''			
		},
		delstrength(index){
			this.data.manufactorUl.splice(index,1)
		},
		addstrength(){
			this.data.manufactorUl.push({
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module15/flist1.jpg",
				p:"专业雕刻师在给客户雕刻石栏板"
			})
		},
  	//标题颜色
		backgroundBox(index,val){
			let sty={}
			if(index%2){
				sty = {background: val}
			}else{
				sty = {background: '#fff'}
				
			}
			return sty
		},
	  	colorBox(index,val){
				let sty={}
				if(index%2){
					sty = {color: '#fff'}
				}else{
					
					sty = {color: val}
				}
				return sty  		
	  	},
	  	//设置id
	 	funtionId(index,indexS){
	 		return "f"+index+indexS
	 	},
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
                    if(maxWidth<=(image.width+5)&&maxWidth>=(image.width-5)&&parseInt(file.size/1024)<700){
                    	/**发送Ajax请求*/
                    	get_data(image.src);
                    }else{
                  		/**宽不正确*/
						_this.open("请确保图片的宽为"+maxWidth+"px",'warning')
						input_file.value=''
                    }
                }
                image.src= this.result;
            }  
            reader.readAsDataURL(file);  
		},
  			open(val,type) {
	        this.$message({
	          duration:300,
	          message:val,
	          type: type
	        });
	    },
  }
  };	
</script>

<style>
.template15 input{
	background: none;
	border: none;
}
.template15 h1,.template15 h2,.template15 p,.template15 ul,.template15 i,.template15 li,.template15 h3,.template15 input{
	margin: 0;
	padding: 0;
	font-family: "微软雅黑";
	text-decoration: none;
	list-style: none;
	font-weight: normal;
	box-sizing: border-boxs;
	font-style: normal;
}	
.template15 .row{
	width: 1200px;
	margin: auto;
}
.template15 .template15_banner{
	height: 650px;
	background-image: url(http://page-bucket.oiaqye7985.com/land-page/images/module15/bannerBg.jpg);
	background-size: 100% 100%;
}
.template15 .template15_banner .template15_bannerLeft{
	float: left;
}
.template15 .template15_banner .template15_bannerLeft .title{
	padding: 16px;
	font-size: 35px;
	color: #fff;
	background: #02266b;
	display: inline-block;
}
.template15 .template15_banner .template15_bannerLeft .template15_bannerLeftTxt{
	margin: 118px 0 0 156px;
}
.template15 .template15_banner .template15_bannerLeft .template15_bannerLeftTxt h1{
	font-size: 80px;
	font-family: "苹方";
	color: #03256c;
}
.template15 .template15_banner .template15_bannerLeft .template15_bannerLeftTxt h3{
	font-size: 28px;
	color: #ffffff;
	background: #03256c;
	padding: 10px;
	position: relative;
	z-index: 10;
}
.template15 .template15_banner .template15_bannerLeft .template15_bannerLeftTxt h3 i{
	margin-left: 60px;
}
.template15 .template15_banner .template15_bannerLeft .template15_bannerLeftTxt  ul{
	padding-top: 18px;
}
.template15 .template15_banner .template15_bannerLeft .template15_bannerLeftTxt  ul li{
	list-style:disc inside;
	border-bottom: 2px solid #03256c;
	padding-bottom:10px ;
	font-size: 24px;
	color: #03256c;
	padding-top: 15px;
	width: 320px;
}
.template15 .template15_banner .template15_bannerLeft .template15_bannerLeftTxt p{
	margin-top: 50px;
}
.template15 .template15_banner .template15_bannerLeft .template15_bannerLeftTxt p a{
	font-size: 20px;
	color: #ffffff;
	padding: 15px;
	background: #03256c;
	text-decoration: none;
}
.template15 .template15_banner .template15_bannerRight{
	float: left;
	width: 600px;
	height: 600px;
	overflow: hidden;
	border-radius: 50%;
	margin-top: 18px;
	position: relative;
	left: -50px;
}
.template15_titleTop{
	background: #0d2b70;
	padding-bottom: 50px;
}
.template15_titleTop .template15_titleTopBorder{
	background: #fff;
	padding: 44px 50px 36px;
	position: relative;
}
.template15_titleTop .template15_titleTopBorder .template15_titleTopLeft{
	float: left;
}
.template15_titleTop .template15_titleTopBorder .template15_titleTopLeft h1{
	font-size: 32px;
	color: #03256c;
	padding-bottom: 44px;
	margin-top: 20px;
}
.template15_titleTop .template15_titleTopBorder .template15_titleTopLeft ol li{
	font-size: 32px;
	color: #03256c;
	padding-bottom: 15px;
}
.template15_titleTop .template15_titleTopBorder .template15_titleTopLeft ol li i{
	font-size: 32px;
	margin-right: 20px;
}
.template15_titleTop .template15_titleTopBorder .template15_titleTopLeft p{
	font-size: 22px;
	color: #03256c;
}
.template15_titleTop .template15_titleTopBorder .template15_titleTopLeft p a{
	color: #03256c;
}
.template15_titleTop .template15_titleTopBorder .template15_titleTopRight{
	float: right;
	width: 630px;
	padding-top: 20px;
}
.template15_titleTop .template15_titleTopBorder .template15_titleTopRight ul li{
	padding: 10px 10px 23px;
	background:#03256c ;
	text-align: right;
	float: left;
	width: 180px;
	box-sizing: content-box;
	margin: 0 10px 10px 0;
}
.template15_titleTop .template15_titleTopBorder .template15_titleTopRight ul li:nth-child(3n-3){
	margin-right: 0;
}
.template15_titleTop .template15_titleTopBorder .template15_titleTopRight ul li h2{
	font-size: 44px;
	color: #ffffff;
}
.template15_titleTop .template15_titleTopBorder .template15_titleTopRight ul li p{
	font-size: 18px;
	color: #e2e2e2;
}
.template15_titleTop .template15_titleTopBorder .template15_titleTopRight ul li .content{
	padding: 10px 0  ;
}
.template15_titleTop .template15_titleTopBorder .template15_titleTopRight ul li a{
	font-size: 18px;
	color: #e2e2e2;
	text-decoration: none;
}
.template15_titleTopWidth{
	width: 960px;
	margin: auto;
	margin-top: 60px;
	position: relative;
	z-index: 100;
}
.template15_titleTopWidthB{
	width: 1100px;
	height: 370px;
	border: 13px solid #03256c;
	position: absolute;
	top: 50px;
}
.template15 .template15_titleBox{
	background: #fff;
}
.template15 .template15_title{
	padding: 30px 0 30px;
	text-align: center;
}
.template15 .template15_title h1{
}
.template15 .template15_title h1 span{
	font-size: 50px;
	color: #03256c;
}
.template15 .template15_title p{
	font-size: 34px;
	color: #03256c;
	padding: 10px 0;
}
.template15 .template15_title h2{
	font-size: 20px;
	color: #222222;
	display: flex;
	justify-content: center;
	align-items: center;
	white-space: nowrap;
}
.template15 .template15_title h2 i{
	width: 40%;
	height: 1px;
	background: #cdcdcd;
}
.template15 .template15_title h2 span{margin: 0 10px;}
.template15_series .template15_seriesLeft{
	float: left;
	margin-left: 100px;
}
.template15_series .template15_seriesRight{
	float: left;
	height: 426px;
	padding-left: 70px;
	/*padding-top: 114px;*/
}
.template15_series .template15_seriesRow{
	display: flex;
align-items: center;
	justify-content: space-between;
}
.template15_series .template15_seriesRight h2{
	font-size: 40px;
	color: #666666;
	padding-bottom: 9px;
}
.template15_series .template15_seriesRight h1{
	font-size: 50px;
	color: #03256c;
	font-weight: bold;
	padding-bottom: 17px;
}
.template15_series .template15_seriesRight>p{
	display: inline-block;
	background:#03256c ;
	color: #fff;
	padding: 10px 15px;
	letter-spacing: 3px;
	font-size: 32px;
}
.template15_series .template15_seriesRight ul{
	padding-top: 22px;
}
.template15_series .template15_seriesRight ul li{
	float: left;
	margin-left: 30px;
}
.template15_series .template15_seriesRight ul li:first-child{margin: 0;}
.template15_series .template15_seriesRight ul li>span{
	display: inline-block;
	width: 100px;
	height: 100px;
	border-radius: 5px;
	border: 1px solid #03256c;
	text-align: center;
	line-height: 100px;
	font-size: 60px;
	font-weight: bold;
	color: #03256c;
}
.template15_series .template15_seriesRight ul li p{
	width: 100px;
	border-radius: 2000px;
	background: #03256c;
	color: #fff;
	font-size: 18px;
	text-align: center;
	margin-top: 10px;
	padding: 3px 0;
}
.template15_series .template15_seriesRight h3{
	padding-top: 27px;
}
.template15_series .template15_seriesRight h3 a{
	font-size: 22px;
	color: #03256c;
	border-radius: 2000px;
	border: 1px solid #03256c;
	text-decoration: none;
	display: inline-block;
	padding: 0 20px;
}
.template15_series .template15_seriesList{
	width: 585px;
	float: left;
	text-align: center;
}
.template15_series .template15_seriesList .img{
	width: 585px;
	height: 365px;
	border: 10px solid #eaeaea;
	text-align: center;
	line-height: 345px;
	position: relative;
}
.template15_series .template15_seriesList .img .position{
	position: absolute;
	top:24px;
	left: 20px;
	line-height: 0;
}
.template15_series .template15_seriesList .img .position span{
	color: #02266b;
	font-size: 80px;
}
.template15_series .template15_seriesList .img .position  i{
	position: absolute;
	top: 0;
	left: 15px;
	color: #fff;
	font-size: 20px;
}
.template15_series  .template15_seriesListbox{
	padding-top: 45px;
}
.template15_series .template15_seriesList:nth-child(2n-2){
	margin-left: 30px;
}
.template15_series .template15_seriesList .img img{
	display: inline-block; vertical-align: middle;
}
.template15_series .template15_seriesList h1{
	text-align: center;
	font-size: 26px;
	color: #222222;
}
.template15_series .template15_seriesList>p{
	font-size: 22px;
	color: #03256c;
	padding: 8px 0 14px;
}
.template15_series .template15_seriesList>a{
	padding:0 20px ;
	color: #5d5d5d;
	font-size: 22px;
	text-decoration: none;
	border-radius: 2000px;
	border: 1px solid #5d5d5d;
}
.template15_list{
		background: #0b2d70;
		padding: 40px 0;
		margin-top: 50px;
}
.template15_list ul li{
	float: left;
	width: 204px;
	height: 125px;
	margin-left: 20px;
	text-align: center;
	border:2px solid #fff;
}
.template15_list ul li p{
	width: 100%;
	height: 100%;
	line-height: 125px;
	border: 3px solid #0b2d70;
	background: #fff;
	font-size: 26px;
	color: #03256c;
	font-weight: bold;
}
.template15_strengthList{
	width: 583px;
	min-height: 410px;
	float: left;
}
.template15_strengthList .img{
	border: 5px solid #eaeaea;
	text-align: center;
}
.template15_strengthList>p{
	font-size: 18px;
	color: #ffffff;
	background: #02266b;
	text-align: center;
	padding: 5px 0;
	margin-top: 10px;
}
.template15_strengthList:nth-child(2n-2){
	margin-left: 30px;
}
.template15_titleh2{
	text-align: center;
	width: 400px;
}
.template15_titleh1{
	text-align: center;
}
</style>