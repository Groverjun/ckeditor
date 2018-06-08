<template>
	<div id="html-content">
		<div class="head_box clearfix">
			<div class="head_left floatLeft MaskHover">
				<img v-bind:src="data.head"/>
				<div class="MaskBox" v-if="delNode">
					<p>上传文件的宽为500px</p>
					<p>
						<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
							<i class="el-icon-upload"></i><span>上传</span>
							<input type="file"v-on:change="head($refs.module3Head,500)" ref="module3Head"/>
						</a>
					</p>
				</div>
			</div>
			<div class="head_right floatRight">
				<h1>
					<span v-if="!delNode">{{data.h1}}</span>
					<input class="INputAll" type="text" v-if="delNode" v-model="data.h1"/>
				</h1>
				<p class="money" v-for="(item,index) in data.moneyall">
					<mark>促销价：</mark>￥
					<span v-if="!delNode">{{item.min}}</span>
					<input class="INputAll" type="text" v-if="delNode" v-model="item.min"/>
					- 
					<span v-if="!delNode">{{item.max}}</span>
					<input class="INputAll" type="text" v-if="delNode" v-model="item.max"/>
				</p>
				<p class="spec">规格：</p>
				<div class="dht clearfix">
					<ul class="dht_left floatLeft">
						<li v-for="(item,index) in data.txtName">
							<span v-if="!delNode">{{item.name}}</span>
							<input class="INputAll" type="text" v-if="delNode" v-model="item.name"/>
						</li>
					</ul>
					<ul class="floatRight">
						<li v-for="(item,index) in  data.money">
							<span v-if="!delNode">{{item.mon}}</span>
							<input class="INputAll" type="text" v-if="delNode" v-model="item.mon"/>
						</li>
					</ul>
				</div>
				<div class="addNode" v-if="delNode" style="text-align: left;">
						<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addtxt">
							<i class="el-icon-edit"></i><span>添加一行</span>
						</a>
						<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="deltxt">
							<i class="el-icon-edit"></i><span>删除一行</span>
						</a>
					</div>
				<div class="abt">
					<a href="javascript:void(0)"  onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
						最新报价
					</a>
					<a href="javascript:void(0)"  onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
						立即抢购
					</a>
				</div>
			</div>
		</div>
		<!---->
		<div class="introduce">
				<span>产品介绍</span>
		</div>
		<!---->
		<div class="contentBox">
			<div v-for="(item,index) in data.parameter">
				<h2>
					<i></i>
					<span v-if="!delNode">{{item.h1}}</span>
					<input class="INputAll" type="text" v-if="delNode" v-model="item.h1"/>
					<i></i>
				</h2>
				<div class="img_min MaskHover">
					<img v-bind:src="item.img" width="100%"/>
					<div class="MaskBox" v-if="delNode">
						<p>上传文件的宽为1080px</p>
						<p>
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
								<i class="el-icon-upload"></i><span>上传</span>
								<input type="file" v-on:change="parameter($refs.module3parameter[index],index,1080)" ref="module3parameter"/>
							</a>
							<a href="javascript:void(0)" type="button" class="el-button el-button--danger"  @click="delparameter(index)">
								<i class="el-icon-delete"></i><span>删除</span>
							</a>
						</p>
					</div>
				</div>
			</div>
			<div class="addNode" v-if="delNode">
				<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addparameter">
					<i class="el-icon-edit"></i><span>添加一块产品推荐</span>
				</a>
			</div>
		</div>
		<!---->
		<div class="img_max MaskHover" v-for="(item,index) in data.abt1">
			<a href="javascript:void(0)"  onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A"><img v-bind:src="item" width="100%"/></a>
			<div class="MaskBox" v-if="delNode">
				<p>上传文件的宽为1080px</p>
				<p>
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
						<i class="el-icon-upload"></i><span>上传</span>
						<input type="file"v-on:change="abt1($refs.module3abt1[index],index,1920)" ref="module3abt1" />
					</a>
					<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="delabt1(index)">
						<i class="el-icon-delete"></i><span>删除</span>
					</a>
				</p>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addabt1">
				<i class="el-icon-edit"></i><span>添加一块横屏banner</span>
			</a>
		</div>
		<!---->
		<div class="contentBox">
			<div v-for="(item,index) in data.beat">
				<h2>
					<i></i>
					<span v-if="!delNode">{{item.h1}}</span>
					<input class="INputAll" type="text" v-if="delNode" v-model="item.h1"/>
					<i></i>
				</h2>
				<div class="img_min MaskHover">
					<img v-bind:src="item.img" width="100%"/>
					<div class="MaskBox" v-if="delNode">
						<p>上传文件的宽为1080px</p>
						<p>
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
								<i class="el-icon-upload"></i><span>上传</span>
								<input type="file" v-on:change="beat($refs.module3beat[index],index,1080)" ref="module3beat" />
							</a>
							<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="delbeat(index)">
								<i class="el-icon-delete"></i><span>删除</span>
							</a>
						</p>
					</div>
				</div>
			</div>
			<div class="addNode" v-if="delNode">
				<a href="javascript:void(0)" type="button" class="el-button el-button--primary"@click="addbeat">
					<i class="el-icon-edit"></i><span>添加一行产品照片</span>
				</a>
			</div>
		</div>
		<!---->
		<div class="img_max MaskHover" v-for="(item,index) in data.abt2">
			<a href="javascript:void(0)"  onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A"><img v-bind:src="item" width="100%"/></a>
			<div class="MaskBox" v-if="delNode">
				<p>上传文件的宽为1080px</p>
				<p>
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
						<i class="el-icon-upload"></i><span>上传</span>
						<input type="file" v-on:change="abt2($refs.module3abt2[index],index,1920)" ref="module3abt2" />
					</a>
					<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="delabt2(index)">
						<i class="el-icon-delete"></i><span>删除</span>
					</a>
				</p>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addabt2">
				<i class="el-icon-edit"></i><span>添加一行横屏banner</span>
			</a>
		</div>
	</div>
</template>

<script>
var data='{"status":200,"msg":"OK","data":{"paramMob":{"head":"http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img1.jpg","moneyall":[{"min":"7560.00","max":"11780.00"}],"abt2":["http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img8.jpg"],"abt1":["http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img5.jpg"],"txtName":[{"name":"螺杆式空压机 DHF-10A"},{"name":"螺杆式空压机 DHF-10A"},{"name":"螺杆式空压机 DHF-10A"}],"money":[{"mon":"7560.00元"},{"mon":"7560.00元"},{"mon":"7560.00元"}],"parameter":[{"img":"http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img2.jpg","h1":"产品特点"},{"img":"http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img3.jpg","h1":"产品技术参数"},{"img":"http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/module3_img4.jpg","h1":"产品技术参数"}],"beat":[{"img":"http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img6.jpg","h1":"客户实拍展示"},{"img":"http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img7.jpg","h1":"工厂实拍展示"}],"h1":"螺杆式空压机静音7.5KW螺杆空压机厂家1.2立方螺杆空气压缩机批发"},"paramPC":{"head":"http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img1.jpg","moneyall":[{"min":"7560.00","max":"11780.00"}],"abt2":["http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img8.jpg"],"abt1":["http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img5.jpg"],"txtName":[{"name":"螺杆式空压机 DHF-10A"},{"name":"螺杆式空压机 DHF-10A"},{"name":"螺杆式空压机 DHF-10A"}],"money":[{"mon":"7560.00元"},{"mon":"7560.00元"},{"mon":"7560.00元"}],"parameter":[{"img":"http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img2.jpg","h1":"产品特点"},{"img":"http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img3.jpg","h1":"产品技术参数"},{"img":"http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/module3_img4.jpg","h1":"产品技术参数"}],"beat":[{"img":"http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img6.jpg","h1":"客户实拍展示"},{"img":"http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img7.jpg","h1":"工厂实拍展示"}],"h1":"螺杆式空压机静音7.5KW螺杆空压机厂家1.2立方螺杆空气压缩机批发"},"modelType":0}}'
export default {
	data () {
		return{
			data:data,
			delNode:true,
			syb_productType:null,//类型流量宝
			ALLfoot:true,
		}
	},
	computed: {
	  
	},
	watch: {  
	   
	},
	created(){
		this.data=JSON.parse(this.data).data.paramPC
		console.log(this.data)
	},
	mounted(){
			
	},
	updated(){
	},
	methods:{
		minTxtLen(len){
			if(len.lenght<2){
				alert("内容不能为空")
			}
		},
		calcStyle(index) {
	        var style = {}
	        if (index % 2 !== 0) {
	            style = {float: 'right'}
	        }
	        return style
		 },
		//内容编辑区
		head(input_file,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.head=str
	    	})
    		input_file.value=''
		},
		addtxt(){
			this.data.txtName.push({name:"螺杆式空压机 DHF-10A"})
			this.data.money.push({mon:"7560.00元"})
		},
		deltxt(){
			this.data.txtName.pop()
			this.data.money.pop()
		},
		parameter(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.parameter[index].img=str
	    	})
    		input_file.value=''
		},
		delparameter(index){
			this.data.parameter.splice(index,1)
		},
		addparameter(){
			this.data.parameter.push({img:"http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img2.jpg",h1:"产品特点"})
		},
		addbeat(){
			this.data.beat.push({img:"http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img6.jpg",h1:"客户实拍展示"})
		},
		beat(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.beat[index].img=str
	    	})
    		input_file.value=''
		},
		delbeat(index){
			this.data.beat.splice(index,1)
		},
		abt1(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.abt1.splice(index,1,str)
	    	})
    		input_file.value=''
		},
		delabt1(index){
			this.data.abt1.splice(index,1)
		},
		addabt1(){
			this.data.abt1.push("http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img5.jpg")
		},
		abt2(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.abt2.splice(index,1,str)
	    	})
    		input_file.value=''
		},
		delabt2(index){
			this.data.abt2.splice(index,1)
		},
		addabt2(){
			this.data.abt2.push("http://page-bucket.oss-cn-beijing.aliyuncs.com/land-page/images/img5.jpg")
		},
		//内容编辑区结束
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
            if(parseInt(file.size/1024)>300){
            	_this.open("图片不能大于300kb",'warning')
            	input_file.value=''
            	return false;  
            }
            var reader = new FileReader();  
            reader.onload = function () {
                var image = new Image();
                image.onload=function(){
                    if(maxWidth<=(image.width+5)&&maxWidth>=(image.width-5)&&parseInt(file.size/1024)<300){
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
	          duration:1000,
	          message:val,
	          type: type
	        });
	    },
	},
}
</script>

<style>

mark {
  background: none; }

#html-content  .clearfix:after {
  content: "\0020";
  display: block;
  height: 0;
  clear: both; }
#html-content div,ul,li{margin: 0;padding: 0;list-style: none;}
#html-content  .clearfix {
  zoom: 1; }

#html-content  .floatLeft {
  float: left; }

#html-content  .floatRight {
  float: right; }
#html-content  input,
select,
textarea {
  outline: none;
  background: none; }
#html-content {
  margin:0px auto;
  font-family: "微软雅黑"; }

#html-content .head_box {
  width: 1080px;
  margin: auto; }

#html-content .head_right {
  width: 556px;
  padding-top: 20px; }
#html-content .head_right h1 {
    font-size: 18px;
    padding-bottom: 15px;
    border-bottom: 1px dashed #eee; }
#html-content  .head_right .money {
    padding: 30px 0;
    border-bottom: 1px dashed #eee;
    font-size: 26px;
    color: #f37732;
    font-weight: bold;
    display: flex;
    align-items: center; }
#html-content  .head_right .money input{
	width: 130px;
}
 #html-content   .head_right .money mark {
      font-size: 14px;
      font-weight: normal; }
 #html-content .head_right .spec {
    padding-top: 20px;
    padding-left: 10px; }
    
  #html-content .head_right .dht {
    width: 320px;
    padding-left: 45px;
    padding-bottom: 20px;
    padding-top: 10px; }
    .head_right .dht ul li {
      margin-bottom: 12px; }
      .head_right .dht .dht_left li input{
      	width: 150px;
      }
      .head_right .dht ul li input{
      	width: 80px;
      }
 #html-content .head_right .abt {
    padding-top: 30px;
    border-top: 1px dashed #eee;
    }
  #html-content  .head_right .abt a {
      width: 200px;
      height: 45px;
      background: none;
      border: none;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      line-height: 45px;
      text-align: center; }
   #html-content .head_right .abt a:nth-child(1) {
      background: #f18938; }
    #html-content .head_right .abt a:nth-child(2) {
      background: #99c53f; }

#html-content .introduce {
  width: 1080px;
  margin: 20px auto;
  border-bottom: 1px solid #eee; }
  #html-content .introduce span {
    display: inline-block;
    padding: 10px 30px;
    border-bottom: 2px solid #99C53F; }

#html-content .contentBox {
  width: 1080px;
  margin: auto; }
  #html-content .contentBox h2 {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px 0 30px; }
    #html-content .contentBox h2 input{text-align: center;}
   #html-content  .contentBox h2 i {
      display: inline-block;
      width: 50px;
      height: 1px;
      background: #000; }
    #html-content .contentBox h2 span {
      display: inline-block;
      margin: 0 20px;
      font-size: 20px; }

#html-content .img_max {
  margin-top: 30px; }

</style>