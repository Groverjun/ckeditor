<template>

	<div class="template13">
		<div class="template13_banner" >
			<div class="template13_row clearfix">
				<div class="t13Banner_left ">
					<h1  v-if="!delNode" v-text="data.headH1" :style="{color:data.color}"></h1>
					<input type="text" class="h1"  v-if="delNode" v-model="data.headH1" style="display: block;" :style="{color:data.color}"/>
					<h3 v-if="!delNode" v-text="data.headH2"></h3>
					<input type="text" class="h3"  v-if="delNode" v-model="data.headH2" style="display: block;"/>
					<ul class="t13Banner_list1 clearfix">
						<li v-for="(item,index) in data.haedList1">
							<span v-if="!delNode">{{item}}</span>
							<input type="text" v-if="delNode" v-model="data.haedList1[index]" style="display: inherit;width: 150px;"/>
						</li>
					</ul>
					<ul class="t13Banner_list2 clearfix">
						<li v-for="(item,index) in data.headList2">
							<span v-if="!delNode">{{item}}</span>
							<input type="text" v-if="delNode" v-model="data.headList2[index]" style="display: inherit;width: 160px;"/>
						</li>
					</ul>
				</div>
				<div class="t13Banner_right MaskHover">
					<img v-bind:src="data.headImg"/>
					<div class="MaskBox" v-if="delNode">
						<p>上传图片的宽为520px</p>
						<p>
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
								<i class="el-icon-upload"></i><span>上传</span>
								<input type="file" @change="banner($refs.f1,520)" ref="f1" />
							</a>
						</p>
					</div>	
				</div>
			</div>
		</div>
		<!--/banner-->
		
		<div class="template13_fine">
			<div  class="template13_row ">
				<ul class="t13Fine_list clearfix">
					<li v-for="(item,index) in data.recommendList" class="MaskHover">
						<span >
							推荐<br />
							<img src="http://page-bucket.oiaqye7985.com/land-page/images/module13/masonry.png"/>
						</span>
						<i :style="{borderColor:data.color}"></i>
						<p>
							<img v-bind:src="item" width="100%"/>
						</p>
						<div class="MaskBox" v-if="delNode">
							<p>上传图片的宽为280px</p>
							<p>
								<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
									<i class="el-icon-upload"></i><span>上传</span>
									<input type="file" @change="recommend($refs.f2[index],index,280)" ref="f2"  />
								</a>
								<el-button type="danger" icon="el-icon-delete" @click="delRecomend(index)">删除</el-button>
							</p>
						</div>	
					</li>
				</ul>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<el-button type="primary" icon="el-icon-edit" @click="addRecomend">添加一块</el-button>
		</div>
		<div class="template13_buy">
			<h1 class="share_h1">
				<span v-if="!delNode">{{data.buyH1}}</span>
				<input type="text" v-model="data.buyH1" v-if="delNode" style="text-align: center;"/>
				<i :style="{background:data.color}"></i>
			</h1>
			<h3 class="share_h3">
				<span v-if="!delNode">{{data.buyP}}</span>
				<input type="text" v-model="data.buyP" v-if="delNode" style="text-align: center;width: 100%;"/>
			</h3>
			<ul class="clearfix">
				<li v-for="(item,index) in data.buyList">
					<div :style="{borderColor:data.color,color:data.color}">
						<span v-if="!delNode" >{{item.h1}}</span>
						<input type="text" v-model="item.h1" v-if="delNode" style="width: 100%;display: inline-block;text-align: center;" />
					</div>
					<h4>
						<span  v-if="!delNode">{{item.h2}}</span>
						<input type="text" v-model="item.h2" v-if="delNode" style="width: 100%;display: inline-block;text-align: center;" />
					</h4>
					<p>
						<span  v-if="!delNode">{{item.p}}</span>
						<input type="text" v-model="item.p" v-if="delNode" style="width: 100%;display: inline-block;text-align: center;" />
					</p>
					<i></i>
				</li>
			</ul>
		</div>
		
		<div class="template13_than">
			<h1 class="share_h1">
				<span v-if="!delNode">{{data.productH1}}</span>
				<input type="text" v-model="data.productH1" v-if="delNode" style="text-align: center;"/>
				<i :style="{background:data.color}"></i>
			</h1>
			<h3 class="share_h3">
				<span v-if="!delNode">{{data.productp}}</span>
				<input type="text" v-model="data.productp" v-if="delNode" style="text-align: center;width: 100%;"/>
			</h3>
			<div class="template13_row clearfix">
				<ul>
					<li class="clearfix" v-for="(item,index) in data.productList">
						<div class="t13Than_img MaskHover">
							<img v-bind:src="item.img"/>
							<div class="MaskBox" v-if="delNode">
								<p>上传图片的宽为280px</p>
								<p>
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
										<i class="el-icon-upload"></i><span>上传</span>
										<input type="file"  @change="bursting($refs.f3[index],index,280)" ref="f3" />
									</a>
									<el-button type="danger" icon="el-icon-delete" @click="delBursting(index)">删除</el-button>
								</p>
							</div>	
						</div>
						<div class="t13Than_txt">
							<h2>
								<span v-if="!delNode">{{item.h}}</span>
								<input type="text" v-model="item.h" v-if="delNode" style="text-align: center;width: 100%;"/>
							</h2>
							<ol class="t13Than_list">
								<li>
									<span v-if="!delNode">{{item.p}}</span>
									<input type="text" v-model="item.p" v-if="delNode" style="width: 100%;"/>
								</li>
							</ol>
							<button v-if="!delNode" :style="{background:data.color}">{{item.abt}}</button>
							<input type="text" v-model="item.abt" v-if="delNode" class="button"style="text-align: center;" :style="{background:data.color}"/>
							<h3 :style="{color:data.color}">
								<span v-if="!delNode">{{item.h1}}</span>
								<input type="text" v-model="item.h1" v-if="delNode" style="width: 100%;text-align: center;"/>
							</h3>
							<p>
								<a href="javascript:void(0)" v-if="!delNode">{{item.span}}</a>
								<input type="text" v-model="item.span" v-if="delNode" style="width: 100%;text-align: center;"/>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<el-button type="primary" icon="el-icon-edit"  @click="addBursting">添加一块</el-button>
		</div>
		<div class="template13_see">
			<h1 class="share_h1">
				<span v-if="!delNode">{{data.thanH1}}</span>
				<input type="text" v-model="data.thanH1" v-if="delNode" style="text-align: center;"/>
				<i :style="{background:data.color}"></i>
			</h1>
			<h3 class="share_h3">
				<span v-if="!delNode">{{data.thanP}}</span>
				<input type="text" v-model="data.thanP" v-if="delNode" style="text-align: center;width: 100%;"/>
			</h3>
			<div class="template13_seepk ">
				<div class="template13_seepk1 MaskHover">
					<img v-bind:src="data.thanImg1"/>
					<div class="MaskBox" v-if="delNode">
						<p>上传图片的宽为420px</p>
						<p>
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
								<i class="el-icon-upload"></i><span>上传</span>
								<input type="file"   @change="than($refs.f4,420)" ref="f4" />
							</a>
						</p>
					</div>	
				</div>
				<div class="template13_vs"><img src="http://page-bucket.oiaqye7985.com/land-page/images/module13/vs.png"/></div>
				<div class="template13_seepk2 MaskHover">
					<img v-bind:src="data.thanImg2"/>
					<div class="MaskBox" v-if="delNode">
							<p>上传图片的宽为420px</p>
							<p>
								<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
									<i class="el-icon-upload"></i><span>上传</span>
									<input type="file" @change="than2($refs.f5,420)" ref="f5"/>
								</a>
							</p>
					</div>	
				</div>
			</div>
			<div class="template1313_seeTxt">
				<div class="template13_seeTxt1">
					<ul>
						<li v-for="(item,index) in data.thanList" :style="{color:data.color}">
							<span class="iconfont  icon-icon-test"></span>
							<i v-if="!delNode" >{{item.than1}}</i>
							<input type="text"  v-model="item.than1" v-if="delNode"  style="text-align: center;width: 360px;"/>
						</li>
						
					</ul>
				</div>
				<div class="template13_seeTxtCon">
					<p v-for="(item,index) in data.thanList">
						<i :style="{background:data.color}"></i>
						<span v-if="!delNode">
							{{item.title}}
						</span>
						<input type="text"  v-model="item.title" v-if="delNode"  class="span"/>
					</p>
				</div>
				<div class="template13_seeTxt2">
					<ul>
						<li v-for="(item,index) in data.thanList">
							<span v-if="!delNode">{{item.than2}}</span>
							<input type="text"  v-model="item.than2" v-if="delNode"  style="text-align: center;width: 360px;"/>
							<img src="http://page-bucket.oiaqye7985.com/land-page/images/module13/xx.png" @click="delthan(index)"/>
						</li>
					</ul>
				</div>
			</div>
			<div class="template13_seeTable">
				<table border="0" cellspacing="0" cellpadding="0":style="{background:data.color}">
					<thead v-for="(item,index) in data.thanList">
						<tr>
							<th colspan="2" class="template13_seeTableT">{{item.title}}</th>
						</tr>
						<tr>
							<th class="template13_seeTableL">{{item.than1}}</th>
							<th class="template13_seeTableR">{{item.than2}}</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<el-button type="primary" icon="el-icon-edit" @click="addthan">添加一块</el-button>
		</div>
		<div class="template13_story">
			<h1 class="share_h1">
				<span v-if="!delNode">{{data.plantH1}}</span>
				<input type="text" v-model="data.plantH1" v-if="delNode" style="text-align: center;"/>
				<i :style="{background:data.color}"></i>
			</h1>
			<h3 class="share_h3">
				<span v-if="!delNode">{{data.plantp}}</span>
				<input type="text" v-model="data.plantp" v-if="delNode" style="text-align: center;width: 100%;"/>
			</h3>
			<div class="template13_storyBox clearfix">
				<ul class="template13_storyBoxLeft">
					<li v-for="(item,index) in data.plantList1" :style="{borderColor:data.color}" class="MaskHover">
						<img v-bind:src="item.img"/>
						<p>
							<span v-if="!delNode">{{item.p}}</span>
							<input type="text" v-model="item.p" v-if="delNode" style="text-align: center;width: 100%;"/>
						</p>
						<div class="MaskBox" v-if="delNode" style="height: 60%;">
							<p>上传图片的宽为670px</p>
							<p>
								<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
									<i class="el-icon-upload"></i><span>上传</span>
									<input type="file"  @change="plantList1($refs.f6[index],index,670)" ref="f6"/>
								</a>
								<el-button type="danger" icon="el-icon-delete" @click="delPlantList1(index)">删除</el-button>
							</p>
						</div>	
					</li>
				</ul>
				<ul class="template13_storyBoxright">
					<li v-for="(item,index) in data.plantList2" :style="{borderColor:data.color}" class="MaskHover">
						<img v-bind:src="item.img"/>
						<p>
							<span v-if="!delNode">{{item.p}}</span>
							<input type="text" v-model="item.p" v-if="delNode" style="text-align: center;width: 100%;"/>
						</p>
						<div class="MaskBox" v-if="delNode" style="height: 60%;">
							<p>上传图片的宽为490px</p>
							<p>
								<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
									<i class="el-icon-upload"></i><span>上传</span>
									<input type="file"  @change="plantList2($refs.f7[index],index,490)" ref="f7"/>
								</a>
								<el-button type="danger" icon="el-icon-delete"  @click="delPlantList2(index)">删除</el-button>
							</p>
						</div>	
					</li>
				</ul>
			</div>
			<div class="addNode" v-if="delNode">
				<el-button type="primary" icon="el-icon-edit"  @click="addPlantList">添加一块</el-button>
			</div>
			<div class="template13_storyAbt">
				<button :style="{background:data.color}">
					<span v-if="!delNode">{{data.plantabt1}}</span>
					<input type="text" v-model="data.plantabt1" v-if="delNode" style="text-align: center;width: 100%;"/>
				</button>
				<button>
					<span v-if="!delNode">{{data.plantabt2}}</span>
					<input type="text" v-model="data.plantabt2" v-if="delNode" style="text-align: center;width: 100%;"/>
				</button>
			</div>
		</div>
		<div class="template13_foot1">
			<h1 class="share_h1">
				<span v-if="!delNode">{{data.storyH1}}</span>
				<input type="text" v-model="data.storyH1" v-if="delNode" style="text-align: center;"/>
				<i :style="{background:data.color}"></i>
			</h1>
			<h3 class="share_h3">
				<span v-if="!delNode">{{data.storyH2}}</span>
				<input type="text" v-model="data.storyH2" v-if="delNode" style="text-align: center;width: 100%;"/>
			</h3>
			<div class="template13_foot1Box">
				<p>
					<span v-if="!delNode">{{data.storyP}}</span>
					<textarea v-model="data.storyP"  v-if="delNode" style="width: 100%;background: none;height: 120px;border: none;text-align: center;"></textarea>
				</p>
				<div class="swiper-containe swiper1">
					<ul class="template13_foot1List  swiper-wrapper">
						<li class="swiper-slide MaskHover" v-for="(item,index) in data.storyList" >
							<img v-bind:src="item"/>
							<div class="MaskBox" v-if="delNode">
								<p>上传图片的宽为230px</p>
								<p>
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
										<i class="el-icon-upload"></i><span>上传</span>
										<input type="file"   @change="storyList($refs.f8[index],index,230)" ref="f8"/>
									</a>
									<el-button type="danger" icon="el-icon-delete" @click="delstoryList(index)">删除</el-button>
								</p>
							</div>	
						</li>
					</ul>
				</div>
			</div>
			<div class="addNode" v-if="delNode">
				<el-button type="primary" icon="el-icon-edit" @click="addstoryList">添加一块</el-button>
			</div>
			<div class="template13_foot1Abt">
				<button :style="{background:data.color}">
					<span v-if="!delNode">{{data.storyAbt}}</span>
					<input type="text" v-model="data.storyAbt" v-if="delNode" style="text-align: center;width: 100%;"/>
				</button>
			</div>
		</div>
		<div class="template13_foot2">
			<div class="template13_foot2Box">
				<div class="template13_foot2BoxImg"><img src="http://page-bucket.oiaqye7985.com/land-page/images/module13/foot.jpg"/></div>
				<div>
					<h1>选择我们</h1>
					<h1>一旦<i :style="{color:data.color}">成交</i>指定产品</h1>
					<h1>立享 
						<span  v-if="!delNode" :style="{background:data.color}">{{data.footTxt}} </span>
						<input type="text" v-if="delNode" v-model="data.footTxt"style="width: 100px;" class="span" :style="{background:data.color}"/>
						优惠！
					</h1>
					<p v-if="!delNode" ><span>*</span>{{data.honor}}</p>
					<input type="text" v-model="data.honor" v-if="delNode" />
				</div>
			</div>
		</div>
		<!--/foot-->
		<div id="script" ref="script"></div>
	</div>

</template>

<script>
export default {
	data () {
		return{
			data:{},
			delNode:true,
			ifpromise:true,
			honor:true,
		}
	},
	computed: {
	  
	},
	watch: {  
	},
	created(){
		
	},
	mounted(){
		this.data=this.GLOBAL.template13;
		
		if(this.data.honor==undefined){
			this.data.honor="每日前十优惠更大";
		}
		console.log(this.data)
	},
	updated(){
		
	},
	methods:{
		banner(input_file,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.headImg=str
	    	})
    		input_file.value=''
		},
		//推荐
		recommend(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.recommendList.splice(index,1,str)
	    	})
    		input_file.value=''
		},
		delRecomend(index){
			this.data.recommendList.splice(index,1)
		},
		addRecomend(){
			this.data.recommendList.push("http://page-bucket.oiaqye7985.com/land-page/images/module13/topList1.jpg")
		},
		//爆款
		bursting(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.productList[index].img=str
	    	})
    		input_file.value=''
		},
		delBursting(index){
			this.data.productList.splice(index,1)
		},
		addBursting(){
			this.data.productList.push({
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module13/top1List1.jpg",
				h:"后现代led简约客厅吊灯北欧创意玻璃球",
				p:"餐厅吊灯服装店魔豆灯具",
				abt:"- 咨询产品细节 -",
				h1:"RMB: ￥?",
				span:"点击咨询客服价钱>"
			})
		},
		//比较
		than(input_file,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.thanImg1=str
	    	})
    		input_file.value=''
		},
		than2(input_file,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.thanImg2=str
	    	})
    		input_file.value=''
		},
		addthan(){
			this.data.thanList.push({
				than1:"外观简约高大上，精美细节呈现",
				than2:"外观小家气，重复使用以前的老款式 ",
				title:"外观"
			})
		},
		delthan(index){
			this.data.thanList.splice(index,1)
		},
		//厂家
		plantList1(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.plantList1[index].img=str
	    	})
    		input_file.value=''
		},
		delPlantList1(index){
			this.data.plantList1.splice(index,1)
		},
		plantList2(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.plantList2[index].img=str
	    	})
    		input_file.value=''
		},
		delPlantList2(index){
			this.data.plantList2.splice(index,1)
		},
		addPlantList(){
			this.data.plantList1.push({
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module13/clist1.jpg",
				p:"6000平方的现代化厂房 6S管理制度"
			},
			{
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module13/clist3.jpg",
				p:"6000平方的现代化厂房 6S管理制度"
			});
			this.data.plantList2.push({
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module13/clist2.jpg",
				p:"6000平方的现代化厂房 6S管理制度"
			},
			{
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module13/clist4.jpg",
				p:"6000平方的现代化厂房 6S管理制度"
			})
		},
		//故事
		storyList(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.storyList.splice(index,1,str)
	    	})
    		input_file.value=''
		},
		delstoryList(index){
			this.data.storyList.splice(index,1)
		},
		addstoryList(){
			this.data.storyList.push("http://page-bucket.oiaqye7985.com/land-page/images/module13/chat.jpg")
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
	          duration:10000,
	          message:val,
	          type: type
	        });
	    },
	}
}	

</script>

<style>
/*==========================================================*/
.clearfix:after{
  content: "."; 
  display: block; 
  height: 0; 
  clear: both; 
  visibility: hidden;  
}
.template13{
	background: #f7f6f6;
	min-width: 1280px;
}
.template13 h1,.template13 h2,.template13 p,.template13 ul,.template13 i,.template13 li,.template13 h3,.template13 input{
	margin: 0;
	padding: 0;
	font-family: "微软雅黑";
	text-decoration: none;
	list-style: none;
	font-weight: normal;
	box-sizing: border-boxs;
	font-style: normal;
}


.template13 input,.template13 textarea{
	width: auto;
	height: auto;
	background: none;
	border: none;
	display: inline-block;
}
.template13 input:focus,.template13 textarea:focus {
    border: 1px dotted #1994FF;
    -webkit-box-shadow: none;
    box-shadow: none;
    outline-offset: 0px;
    outline: none;
}
.template13 .template13_row{
	width: 1200px;
	margin: auto;
}
.template13 .template13_banner{
	background: url(http://page-bucket.oiaqye7985.com/land-page/images/module13/banner.jpg) no-repeat;
	padding: 150px 0 180px;
	background-size: 100% 100%;
}
.template13 .template13_banner .t13Banner_left{
	float: left;
}
.template13 .template13_banner .t13Banner_right{
	float: left;
}
.template13 .t13Banner_left h1,.t13Banner_left .h1{
	font-size: 50px;
	color: #fda403;
	font-weight: bold;
	letter-spacing: 5px;
}
.template13 .t13Banner_left h3,.t13Banner_left .h3{
	font-size: 28px;
	color: #333333;
  letter-spacing: 20px;
  padding: 20px 0;
  width: 623px;
}
.template13 .t13Banner_left .t13Banner_list1{
	
}
.template13 .t13Banner_left .t13Banner_list1 li{
	float: left;
	padding: 15px 20px;
	background: #222;
	font-size: 36px;
	color: #ffffff;
	font-weight: bold;
	margin-right: 20px;
}
.template13 .t13Banner_left .t13Banner_list2 li{
	float: left;
	color: #333333;
	font-size: 23px;
	padding-top:45px ;
	margin-right: 46px;
	text-decoration: underline;
	
}
.template13 .template13_fine{
	background: #fff;
	padding: 45px 0;
}
.template13 .template13_fine .t13Fine_list li{
	float: left;
	border: 3px #edecec solid;
	position: relative;
	overflow: hidden;
	margin-right: 15px;
}
.template13 .template13_fine .t13Fine_list li:nth-child(4n+4){margin-right: 0;}

.template13 .template13_fine .t13Fine_list li p{
	width: 280px;
	overflow: hidden;
}
.template13 .template13_fine .t13Fine_list li>span{
	position: absolute;
	font-size: 14px;
	color: #ffffff;
	z-index: 10;
	padding-left: 5px;
	padding-top: 5px;
	
}
.template13 .template13_fine .t13Fine_list li>i{
	position: absolute;
	width: 0;
	height: 0;
	border: 45px solid transparent;
	border-left-color: #ffa400;
	transform: rotate(-135deg);
	top: -48px;
	left: -48px;
}
.template13 .template13_buy{
	width: 1200px;
	padding: 41px 65px;
	background: #fff;
	margin: 30px auto;
}
.template13 .share_h1{
	font-size: 34px;
	color: #222222;
	font-weight: bold;
	text-align: center;
	position: relative;
}
.template13 .share_h1 i{
	position: absolute;
	margin: auto;
	left: 0;
	right: 0;
	bottom: -20px;
	width: 33px;
	height: 2px;
	background: #f9a600;
}
.template13 .share_h3{
	font-size: 18px;
	color: #555555;
	text-align: center;
	margin-top: 30px;
}
.template13 .template13_buy ul{
	text-align: center;
	display: flex;
	padding-top: 45px;
	justify-content: space-between;
	
}
.template13 .template13_buy ul li{
	float: left;
	margin-right: 80px;
}
.template13 .template13_buy ul li:last-child{
	margin-right: 0;
}
.template13 .template13_buy ul li>div{
	width: 120px;
	height: 120px;
	border: 2px solid #f9a600;
	border-radius: 5px;
	font-family: 'Adobe 黑体 Std';
	font-size: 64px;
	color: #f9a600;
	line-height: 120px;
	margin: auto;
}
.template13 .template13_buy ul li>h4{
	padding: 15px 0;
	color: #333333;
	font-size: 22px;
}
.template13 .template13_buy ul li>p{
	font-size: 16px;
	color: #444444;
}
.template13 .template13_buy ul li>i{
	width: 60px;
	height: 2px;
	background: #ddd;
	display: block;
	margin:20px auto;
}
.template13 .template13_than{
	background: #fff;
	padding: 45px 0;
}
.template13 .template13_than ul{
	padding-top: 15px;
}
.template13 .template13_than ul>li {
	width: 590px;
	height: 300px;
	border: 1px solid #cecece;
	display: flex;
	align-items: center;
	padding: 9px;
	float: left;
	margin-bottom: 15px;
}
.template13 .template13_than ul>li:nth-child(odd){
	margin-right: 15px;
}
.template13 .template13_than ul>li .t13Than_txt {
	height: 100%;
	padding-left: 20px;
}
.template13 .template13_than ul li .t13Than_txt h2{
	color: #333333;
	font-size: 16px;
	margin-top: 47px;
}
.template13 .template13_than ul li .t13Than_txt .t13Than_list{
	font-size: 16px;
	color: #333333;
}
.template13 .template13_than ul li .t13Than_txt button,.template13_than ul li .t13Than_txt .button{
	width: 270px;
	height: 47px;
	background: #fda501;
	border: none;
	outline: none;
	cursor: pointer;
	font-size: 20px;
	color: #fff;
	margin:34px 0 10px ;
}
.template13 .template13_than ul li .t13Than_txt h3{
	text-align: center;
	font-size: 28px;
	color:#fda501;
	font-weight: bold;
}
.template13 .template13_than ul li .t13Than_txt p{
	text-align: center;
	padding-top: 10px;
}
.template13 .template13_than ul li .t13Than_txt p a{
	font-size: 16px;
	color:#555555 ;
}
.template13 .template13_see{
	padding: 40px 0 70px ;
}
.template13 .template13_seepk{
	width: 1200px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin:50px auto;
}
.template13 .template13_vs{
	margin: 0 75px;
}
.template13 .template1313_seeTxt{
	width: 1200px;
	display: flex;
	justify-content: space-between;
	margin: auto;
}
.template13 .template13_seeTxt1 li{
	font-size: 22px;
	color: #FDA501;
	font-weight: bold;
	margin-bottom: 64px;
		margin-top: 15px;
}
.template13 .template13_seeTxt1 li span{
	font-size: 22px;
	font-weight: normal;
}
.template13 .template13_seeTxt2 li{
	font-size: 22px;
	color: #333333;
	margin-bottom: 64px;
	margin-top: 15px;
}
.template13 .template13_seeTxtCon p{
	width: 177px;
	height: 52px;
	border-radius: 5px;
	background: #333;
	color: #fff;
	text-align: center;
	line-height: 52px;
	position: relative;
	margin-bottom: 40px;
	overflow: hidden;
}
.template13 .template13_seeTxtCon p span,.template13_seeTxtCon p .span{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	font-size: 24px;
	z-index: 10;
	text-align: center;
}
.template13 .template13_seeTxtCon p i{
	width: 50%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: #FDA501;
}
.template13 .template13_story{
	background: #fff;
	padding: 50px 0;
}
.template13 .template13_storyBox{
	width: 1200px;
	margin: auto;
	padding: 40px 0;
}
.template13 .template13_storyBoxLeft{
	float: left;
	width: 680px;
}
.template13 .template13_storyBoxright{
	float: right;
	width: 500px;
}
.template13 .template13_storyBox ul li{
	border: 5px solid #FDA501;
	margin-bottom: 20px;
	overflow: hidden;
	position: relative;
}
.template13 .template13_storyBox ul li>p{
	width: 100%;
	position: absolute;
	bottom: 0;
	padding: 5px 0;
	text-align: center;
	background: rgba(0,0,0,0.5);
	color: #fff;
	font-size: 18px;
}
.template13 .template13_storyBox ul li img{
	width: 100%;
	display: block;
}
.template13 .template13_storyAbt{
	text-align: center;
}
.template13 .template13_storyAbt button,.template13_storyAbt .button{
	width: 220px;
	height: 70px;
	border-radius: 5px;
	background: #FDA501;
	color: #fff;
	border: none;
	cursor: pointer;
	outline: none;
	font-size: 22px;
}
.template13 .template13_storyAbt button:last-child{
	background: #333;
	margin-left: 30px;
}
.template13 .template13_foot1{
	padding: 50px 0 60px;
	
}
.template13 .template13_foot1Box{
	width: 1200px;
	margin: auto;
	text-align: center;
	padding: 44px;
	overflow: hidden;
}
.template13 .template13_foot1Box>p{
	padding-bottom: 50px;
	font-size: 17px;
	color: #333333;
	line-height: 37px;
}
.template13 .template13_foot1List{
	
}
.template13 .template13_foot1List li{
	width: 253px ;
	height: 514px;
	overflow: hidden;
	float: left;
	background: url(http://page-bucket.oiaqye7985.com/land-page/images/module13/ipone.png);
	padding: 60px 10px 0;
	margin-right: 24px;
	margin-bottom: 20px;
}
.template13 .template13_foot1List li:nth-child(4){margin-right: 0;}
.template13 .template13_foot1List li:nth-child(8){margin-right: 0;}
.template13 .template13_foot1List li:nth-child(12){margin-right: 0;}
.template13 .template13_foot1Abt {
	width: 1200px;
	margin: auto;
	text-align: center;
}
.template13 .template13_foot1Abt button{
	width: 220px;
	height: 70px;
	border-radius: 5px;
	background: #FDA501;
	color: #fff;
	border: none;
	cursor: pointer;
	outline: none;
	font-size: 22px;
}
.template13 .template13_foot2{
	background: #fff;
	text-align: center;
	padding: 90px 0 70px;
}
.template13 .template13_foot2Box{
	width: 744px;
	margin: auto;
	text-align: left;
	display: flex;
	justify-content: space-between;
	align-content: center;
	
}
.template13 .template13_foot2Box h1{
	font-size: 42px;
	color: #333333;
	font-weight: bold;
	line-height: 60px;
}
.template13 .template13_foot2Box h1 span,.template13_foot2Box h1 .span{
	background: #fda403;
	color: #fff;
	font-weight: bold;
	padding: 0 0px 0 10px;
}
.template13 .template13_foot2Box h1 i{
	color: #fda403;
	font-weight: bold;
	font-style: normal;
}
.template13 .template13_foot2Box p{
	font-size: 22px;
	color: #555555;
	padding-top: 15px;
}
.template13 .template13_foot2Box p span{
	color: #ca1204;
}
.template13_seeTable{display: none;}
</style>