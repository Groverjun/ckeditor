<template>
	<div class="template11">
		<div class="modulePC">
			<div class="modulePC_content">
				<!---->
				<div class="head">
					<div class="head_logo">
						<span v-if="!delNode">{{data.headlogo}}</span>
						<input type="text" v-if="delNode" v-model="data.headlogo" style="width: 122px;height: 40px;text-align: center;"/>
					</div>
					<h3 v-if="!delNode">{{data.headH2}}</h3>
					<input type="text" v-if="delNode" v-model="data.headH2" class="h3" style="width: 100%;text-align: center;"/>
					
					<h1 id="h1"  v-if="!delNode">{{data.headH1}}</h1>
					<input type="text" v-if="delNode" v-model="data.headH1" class="h1" style="width: 100%;text-align: center;" />
					
					<h2>
						<span v-if="!delNode" v-for="(item,index) in data.headlist">{{item}}</span>
						<input type="text" v-if="delNode" v-model="data.headlist[index]" v-for="(item,index) in data.headlist" class="h2" style="display: inline;width: 260px;text-align: center;"/>
					</h2>
					<div class="head_abt">
						<span v-if="!delNode" v-for="(item,index) in data.headAbt">{{item}}</span>
						<input type="text" v-if="delNode" v-model="data.headAbt[index]" v-for="(item,index) in data.headAbt" style="width: 300px;padding:15px 0;" />
					</div>
				</div>
				<!--头部结束-->
				<div class="problem">
					<div class="problem_h1">
						<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/head_left.png"/>
						<span v-if="!delNode">{{data.considerH1}}</span>
						<input type="text" v-if="delNode" v-model="data.considerH1" style="width: 230px;text-align: center;"/>
						<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/head_right.png"/>
					</div>
					<div class="problem_txt">
						<span v-if="!delNode" v-for="(item,index) in data.consider">{{item}}</span>
						<input type="text" v-if="delNode" v-model="data.consider[index]" v-for="(item,index) in data.consider" style="width: 200px;text-align: center;"/>
					</div>
					<div class="addNode" v-if="delNode">
						<el-button type="primary" icon="el-icon-edit" @click="considerAdd">添加一行</el-button>
						<el-button type="danger" icon="el-icon-delete"  @click="considerDel">删除一行</el-button>
					</div>
					<div class="proble_click">
						<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/jian.png"/>
					</div>
				</div>
				<!--你需要考虑结束-->
				<div class="tableRecommend">
					<div class="tableRecommendTopImg">
						<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/mfan_top.jpg" width="100%"/>
					</div>
					<div class="tableRecommend_h1">
						<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/tableRecommend_left.png"/>
						<span v-if="!delNode">{{data.tableH1}}</span>
						<input type="text" v-if="delNode" v-model="data.tableH1" style="width: 460px;text-align: center;"/>
						<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/tableRecommend_right.png"/>
					</div>
					<div class="tableRecommend_table">
						<table border="0" cellspacing="0" cellpadding="0">
							<thead>
								<tr v-for="(item,index) in data.thead">
									<th class="tableRecommend_tableLeft">
										<input type="text"v-model="item.left"v-if="delNode" class="text-center"/>
										<i v-if="!delNode">{{item.left}}</i><span class="triangle"></span>
									</th>
									<th>
										<input type="text"v-model="item.right"v-if="delNode"class="text-center" />
										<i v-if="!delNode">{{item.right}}</i><span class="triangle"></span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr  v-for="(item,index) in data.tbody">
									<th class="tableRecommend_tableLeft">
										<input type="text"v-model="item.left"v-if="delNode" class="text-center" style="width: 100%;"/>
										<i v-if="!delNode">{{item.left}}</i>
									</th>
									<th>
										<input type="text"v-model="item.right"v-if="delNode" class="text-center" style="width: 100%;"/>
										<i v-if="!delNode">{{item.right}}</i>
									</th>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="addNode" v-if="delNode">
						<el-button type="primary" icon="el-icon-edit" @click="tbodyAdd">添加一行</el-button>
						<el-button type="danger" icon="el-icon-delete"  @click="tbodyDel">删除一行</el-button>
					</div>
					<div class="tableRecommend_h1 tableRecommend_h2">
						<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/tableRecommend_left.png"/>
						<span v-if="!delNode">{{data.burstingH1}}</span>
						<input type="text" v-if="delNode" v-model="data.burstingH1" style="width: 460px;text-align: center;"/>
						<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/tableRecommend_right.png"/>
					</div>
					<div class="productTable">
						<div class="row">
							<div class="col-md-6 col-xs-12" v-for="(item,index) in data.burstingList">
								<div class="productTable_box">
									<input type="text"v-model="item.h1"v-if="delNode" class="text-center" style="width: 100%;"/>
									<h1 v-if="!delNode">{{item.h1}}</h1>
									<div class="img MaskHover">
										<img v-bind:src="item.img"/>
										<div class="MaskBox" v-if="delNode">
											<p>上传图片的宽为430px</p>
											<p>
												<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
													<i class="el-icon-upload"></i><span>上传</span>
													<input type="file" @change="burstingListEvent($refs.f1[index],index,430)" ref="f1"/>
												</a>
												<el-button type="danger" icon="el-icon-delete"  @click="burstingListDel(index)">删除</el-button>
											</p>
										</div>													
									</div>
									<div class="abt">
										<input type="text"v-model="item.abt"v-if="delNode" class="a" style="width: 200px;text-align: center;"/>
										<a v-if="!delNode" href="javascript:void(0)"> {{item.abt}} </a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="addNode" v-if="delNode">
						<el-button type="primary" icon="el-icon-edit" @click="burstingListAdd">添加一块</el-button>
					</div>
					<div class="tableRecommendTopImg" style="margin-bottom: 0;">
						<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/mfan_bottom.jpg" width="100%"/>
					</div>
				</div>
				<!--一站式解决您的装修烦恼结束-->
				<div class="productMonth">
					<div class="problem_h1">
						<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/head_left.png"/>
						<span v-if="!delNode">{{data.producth1}}</span>
						<input type="text" v-if="delNode" v-model="data.producth1" style="width: 460px;text-align: center;"/>
						<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/head_right.png"/>
					</div>
					<p v-if="!delNode" class="productMonthP">{{data.producth2}}</p>
					<input type="text" class="productMonthP" v-if="delNode" v-model="data.producth2" style="width: 100%;text-align: center;"/>
					<div class="row">
						<div class="col-md-4 col-xs-6" v-for="(item,index) in data.producthList">
							<div class="productMonthList">
								<div class="productMonthList_img MaskHover">
									<img v-bind:src="item.img" width="100%"/>
									<div class="MaskBox" v-if="delNode">
										<p>上传图片的宽为300px</p>
										<p>
											<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
												<i class="el-icon-upload"></i><span>上传</span>
												<input type="file" @change="producthListEvent($refs.f2[index],index,300)" ref="f2"/>
											</a>
											<el-button type="danger" icon="el-icon-delete"  @click="producthListDel(index)">删除</el-button>
										</p>
									</div>		
								</div>
								<p  v-if="!delNode"class="productMonthList_p">{{item.h1}}</p>
								<input type="text" class="productMonthList_p" v-if="delNode" v-model="item.h1" style="width: 100%;text-align: center;"/>
							</div>
							<div class="productMonthListTxt">
								<h3 class="productMonthListTxt_h1" v-if="!delNode">
									{{item.p}}
								</h3>
								<input type="text" class="productMonthListTxt_h1" v-if="delNode" v-model="item.h1" style="width: 330px;text-align: center;border: none;"/>
								<div class="productMonthListTxt_abt">
									<a  v-if="!delNode" href="javascript:void(0)">{{item.abt1}}</a>
									<input type="text" class="a" v-if="delNode" v-model="item.abt1" style="width: 130px;padding: 8px 0;text-align: center;border: none;"/>
									<span  v-if="!delNode">{{item.abt2}}</span>
									<input type="text" class="span" v-if="delNode" v-model="item.abt2" style="border: none;width: 130px;"/>
								</div>
							</div>
						</div>
					</div>
					<div class="addNode" v-if="delNode">
						<el-button type="primary" icon="el-icon-edit" @click="producthListAdd">添加一块</el-button>
					</div>
					<!--/row-->
					<div class="honor" v-if="honor">
						<div class="problem_h1 honor_h1">
							<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/head_left.png"/>
							<span v-if="!delNode">{{data.certificateH1}}</span>
							<input type="text" v-if="delNode" v-model="data.certificateH1" style="width: 460px;text-align: center;"/>
							<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/head_right.png"/>
						</div>
						<div class="row">
							<div class="col-md-3 col-xs-6" v-for="(item,index) in data.certificateList">
								<div class="honor_list">
									<div class="honor_listImg MaskHover">
										<img v-bind:src="item.img" width="100%"/>
										<div class="MaskBox" v-if="delNode">
											<p>上传图片的宽为270px</p>
											<p>
												<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
													<i class="el-icon-upload"></i><span>上传</span>
													<input type="file" @change="certificateListEvent($refs.f3[index],index,270)" ref="f3"/>
												</a>
												<el-button type="danger" icon="el-icon-delete" @click="certificateListDel(index)">删除</el-button>
											</p>
										</div>	
									</div>
									<div class="honor_listTxt" v-if="!delNode">
										{{item.p}}
									</div>
									<input type="text" v-if="delNode" class="honor_listTxt" v-model="item.p" style="width: 100%;text-align: center;"/>
								</div>
							</div>
						</div>
					</div>
					<div class="addNode" v-if="delNode">
						<el-button type="primary" icon="el-icon-edit" @click="certificateListAdd">添加一块</el-button>
						<el-button type="danger" icon="el-icon-delete" @click="certificateListDelT">删除荣誉资质模块</el-button>
					</div>
					<!--/hoor-->
					<div class="promise clearfix" v-if="ifpromise">
						<div class="promise_h1 pull-left">
							<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/head_left.png"/>
							<h1 v-if="!delNode">{{data.shapeH1}}</h1>
							<input type="text" v-if="delNode" class="h1" v-model="data.shapeH1" style="width: 206px;text-align: center;display: block;"/>
						</div>
						<ul class="pull-left promiseList" v-for="(item,index) in data.shapeList">
							<li class="promiseListT" style="background: url(http://page-bucket.oiaqye7985.com/land-page/images/module11/baing.png);color: #fff; background-size: 100% 100%;">
								<p  v-if="!delNode">{{item.p1}}</p>
								<p  v-if="!delNode">{{item.p2}}</p>
								<input type="text" v-if="delNode" class="honor_listTxt" v-model="item.p1" style="width: 100%;text-align: center;"/>
								<input type="text" v-if="delNode" class="honor_listTxt" v-model="item.p2" style="width: 100%;text-align: center;"/>
							</li>
							<li class="promiseListTjia">
								+
							</li>
						</ul>
						<ul class="pull-left promiseList" v-for="(item,index) in data.shapeListT">
							<li class="promiseListT">
								<p  v-if="!delNode">{{item.p1}}</p>
								<p  v-if="!delNode">{{item.p2}}</p>
								<input type="text" v-if="delNode" class="honor_listTxt" v-model="item.p1" style="width: 100%;text-align: center;"/>
								<input type="text" v-if="delNode" class="honor_listTxt" v-model="item.p2" style="width: 100%;text-align: center;"/>
							</li>
							<li class="promiseListTjia">
								+
							</li>
						</ul>
					</div>
					<div class="addNode" v-if="delNode">
						<el-button type="primary" icon="el-icon-edit" @click="shapeListTAdd">添加一行</el-button>
						<el-button type="danger" icon="el-icon-delete"  @click="shapeListTDel">删除一行</el-button>
						<el-button type="danger" icon="el-icon-delete"  @click="shapeListTDelT">删除我们的承诺 模块</el-button>
					</div>
				</div>
				<!--本月精选推荐产品结束-->
				<div class="productMonth productMonthT">
					<div class="productMonthT_content">
						<div class="problem_h1">
							<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/tableRecommend_left.png"/>
							<span v-if="!delNode">{{data.productTh1}}</span>
							<input type="text" v-if="delNode" v-model="data.productTh1" style="width: 460px;text-align: center;"/>
							<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/tableRecommend_right.png"/>
						</div>
						<p v-if="!delNode" class="productMonthP">{{data.productTh2}}</p>
						<input type="text" class="productMonthP" v-if="delNode" v-model="data.productTh2" style="width: 100%;text-align: center;"/>
						<div class="row">
							<div class="col-md-4 col-xs-6" v-for="(item,index) in data.productTList">
								<div class="productMonthList ">
									<div class="productMonthList_img MaskHover">
										<img v-bind:src="item.img" width="100%"/>
										<div class="MaskBox" v-if="delNode">
											<p>上传图片的宽为300px</p>
											<p>
												<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
													<i class="el-icon-upload"></i><span>上传</span>
													<input type="file" @change="productTListEvent($refs.f4[index],index,300)" ref="f4"/>
												</a>
												<el-button type="danger" icon="el-icon-delete"  @click="productTListDel(index)">删除</el-button>
											</p>
										</div>	
									</div>
									<p  v-if="!delNode"class="productMonthList_p">{{item.h1}}</p>
									<input type="text" class="productMonthList_p" v-if="delNode" v-model="item.h1" style="width: 100%;text-align: center;"/>
								</div>
								<div class="productMonthListTxt">
									<h3 class="productMonthListTxt_h1" v-if="!delNode">
										{{item.p}}
									</h3>
									<input type="text" class="productMonthListTxt_h1" v-if="delNode" v-model="item.h1" style="width: 330px;text-align: center;border: none;"/>
									<div class="productMonthListTxt_abt">
										<a  v-if="!delNode" href="javascript:void(0)">{{item.abt1}}</a>
										<input type="text" class="a" v-if="delNode" v-model="item.abt1" style="width: 130px;padding: 8px 0;text-align: center;border: none;"/>
										<span  v-if="!delNode">{{item.abt2}}</span>
										<input type="text" class="span" v-if="delNode" v-model="item.abt2" style="border: none;width: 130px;"/>
									</div>
								</div>
							</div>
						</div>
						<div class="addNode" v-if="delNode">
							<el-button type="primary" icon="el-icon-edit" @click="productTListAdd">添加一块</el-button>
						</div>
					</div>
				</div>
				<!--本月精选推荐产品结束-->
				<div class="discount">
					<div class="discount_content">
						<div class="tableRecommend_h1">
							<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/tableRecommend_left.png"/>
							<span v-if="!delNode">{{data.discountH1}}</span>
							<input type="text" v-if="delNode" v-model="data.discountH1" style="width: 460px;text-align: center;"/>
							<img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/tableRecommend_right.png"/>
						</div>
						<div class="discount_txt">
							<h2 v-if="!delNode">{{data.discountH2}}</h2>
							<input type="text" class="h2" v-if="delNode" v-model="data.discountH2" style="width: 100%;text-align: center;"/>
							<h3 v-if="!delNode">{{data.discountH3}}</h3>
							<input type="text" class="h3" v-if="delNode" v-model="data.discountH2" style="width: 100%;text-align: center;"/>
							<p><img src="http://page-bucket.oiaqye7985.com/land-page/images/module11/jian.png"/></p>
							<a href="javascript:void(0)" v-if="!delNode">{{data.discountabt}}</a>
							<input type="text" class="a" v-if="delNode" v-model="data.discountabt" style="text-align: center;"/>
						</div>
					</div>
				</div>
				<!--结束-->
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
		this.data=this.GLOBAL.m11
		if(this.GLOBAL.m11.honor='undefined'){
			this.GLOBAL.m11.honor=true;
			this.GLOBAL.m11.promise=true;
		}
		this.data=this.GLOBAL.m11
		console.log(this.data.honor)
		console.log(this.data.promise)
		console.log(this.data);
		this.ifpromise=this.data.promise
	},
	updated(){
		
	},
	methods:{
		//你需要考虑？
		considerAdd(){
			this.data.consider.push("装修公司靠不靠谱？")
		},
		considerDel(){
			this.data.consider.pop()
		},
		//一站式解决您的装修烦恼表格
		tbodyAdd(){
			this.data.tbody.push({left:"源头/双甲资质",right:"16年专注打造轻松简洁的办公室空间，行业内AAA资质"},)
		},
		tbodyDel(){
			this.data.tbody.pop()
		},	
		//本月爆款推荐系列 
		burstingListAdd(){
			this.data.burstingList.push({
				h1:"办公装修-会议室",
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module11/tableImg.jpg",
				abt:"点击了解更多 >"
			})
		},
		burstingListDel(index){
			this.data.burstingList.splice(index,1)
		},
		//本月精选推荐产品 
		producthListAdd(){
			this.data.producthList.push({
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module11/monthImg.jpg",
				h1:"百艺宝信息科技办公装修工程",
				p:"简约、严谨、时尚、办公的整体办公空间",
				abt1:"点击询价",
				abt2:"点击了解更多 >"
			})
		},
		producthListDel(index){
			this.data.producthList.splice(index,1)
		},		
		//荣誉资质证书
		certificateListAdd(){
			this.honor=true;
			this.data.honor=true;
			this.data.certificateList.push({
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module11/honor.jpg",
				p:"01 设计甲级资质"
			})
		},
		certificateListDel(index){
			this.data.certificateList.splice(index,1)
		},
		certificateListDelT(){
			this.honor=false
			this.data.honor=false;
			console.log(this.data.honor)
			console.log(this.data)
		},
		//本月精选推荐产品 T
		productTListAdd(){
			this.data.productTList.push({
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module11/monthImg.jpg",
				h1:"百艺宝信息科技办公装修工程",
				p:"简约、严谨、时尚、办公的整体办公空间",
				abt1:"点击询价",
				abt2:"点击了解更多 >"
			})
		},
		productTListDel(index){
			this.data.productTList.splice(index,1)
		},		
		//我们的承诺 
		shapeListTAdd(){
			this.ifpromise=true;
			this.data.promise=true;
			this.data.shapeListT.push({
				p1:"免费",
				p2:"装修报价",
			})
		},
		shapeListTDel(){
			this.data.shapeListT.pop()
		},
		shapeListTDelT(){
			this.ifpromise=false
			this.data.promise=false;
			console.log(this.data.promise)
			console.log(this.data)
		},
		//图片上传
		burstingListEvent(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.burstingList[index].img=str
	    	})
    		input_file.value=''
		},		
		/**/
		producthListEvent(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.producthList[index].img=str
	    	})
    		input_file.value=''
		},		
		/**/
		certificateListEvent(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.certificateList[index].img=str
	    	})
    		input_file.value=''
		},	
		/**/
		productTListEvent(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.productTList[index].img=str
	    	})
    		input_file.value=''
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
                	get_data(image.src);
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
	          duration:1000,
	          message:val,
	          type: type
	        });
	    },
	}
}	
</script>

<style>
.template11 h1,.template11 h2,.template11 p,.template11 ul,.template11 i,.template11 li,.template11 h3,.template11 input{margin: 0;padding: 0;font-family: "微软雅黑";text-decoration: none;list-style: none;font-weight: normal;box-sizing: border-boxs;font-style: normal;}
.template11 input{
	width: auto;
	height: auto;
	background: none;
	border: none;
	display: inline-block;
}
.template11 input:focus {
    border: 1px dotted #1994FF;
    -webkit-box-shadow: none;
    box-shadow: none;
    outline-offset: 0px;
    outline: none;
}
.template11 .alert-danger.topframe{
	border-bottom:1px solid #ebccd1;
}
.template11 .topframe {
	margin: 0;
	padding-left: 15px;
	padding-right: 15px;
	text-align: center;
	border-radius: 0;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 1000;
	color: red;
	font-weight: bold;
	background: #faebcc;
	font-size: 16px;
}

.template11 .topframe.alert-warning {
	border-bottom: 1px solid #faebcc
}

.template11 .topframe.alert-danger {
	border-bottom: 1px solid #ebccd1
}
.template11 .modulePC{
	min-width: 1200px;
	overflow-x: hidden;
}
.template11 .modulePC_content{
}
.template11 .modulePC_content .head{
	text-align: center;
	padding: 90px 0;
	color: #fff;
	background: url(http://page-bucket.oiaqye7985.com/land-page/images/module11/pc_head.jpg);
	background-size: 100% 100%;
	background-color: #4e76d5;
	background-repeat: no-repeat;
	background-position: bottom;
	position: relative;
}
.template11 .modulePC_content .head .head_logo{
	position: absolute;
	top: 5%;
	left: 15%;
	width: 122px;
	height: 69px;
	background: url(http://page-bucket.oiaqye7985.com/land-page/images/module11/logo.png);
	font-size: 22px;
	color: #63f6e6;
	line-height: 89px;
}
.template11 .modulePC_content .head .head_logo span{
	display: inline-block;
	vertical-align:bottom;
}
.template11 .modulePC_content .head .h3,.template11 .modulePC_content .head h3{
	font-size: 30px;
	margin: 0 0 10px;
	letter-spacing: 15px;
}
.template11 .modulePC_content .head .h1,.template11 .modulePC_content .head h1{
	font-size: 120px;
	letter-spacing: 0px;
	font-weight: bold;
}
.template11 .modulePC_content .head .h1 input{
	font-weight: bold;
	font-size: 120px;
	background: linear-gradient(to right, #819fe9, #ffffff);
	background-clip: inherit;
	-webkit-background-clip: text;
	color: transparent;
}
.template11 .modulePC_content .head h2{
	font-size: 28px;
	font-weight: bold;
	letter-spacing: 5px;
	padding-top: 25px;
}
.template11 .modulePC_content .head h2 span{
	display: inline-block;
	height: 28px;
	line-height: 28px;
	vertical-align: top;
	padding: 0 10px;
	border-right: 1px solid #fff;
}
.template11 .modulePC_content .head h2 span:last-child{border: none;}
.template11 .modulePC_content .head .head_abt{
	text-align: center;
	font-size: 28px;
	padding-top: 40px;
}
.template11 .modulePC_content .head .head_abt input,.template11 .modulePC_content .head .head_abt span{
	display: inline-block;
	padding: 15px 25px;
	border-radius: 5px;
	background: #fff;
	color: #4e76d5;
	cursor: pointer;
	min-width: 200px;
	text-align: center;
	margin: 0 15px;
}
.template11 .modulePC_content .problem{
	text-align: center;
	padding: 50px 0;
}
.template11 .modulePC_content .problem .problem_h1{
	color: #4e76d6;
	font-size: 40px;
	height: 39px;
	line-height: 39px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.template11 .modulePC_content .problem .problem_h1 span{
	font-weight: bold;
	margin: 0 20px;
}
.template11 .modulePC_content .problem .problem_txt{
	font-size: 22px;
	color: #4e76d6;
	width: 875px;
	margin: auto;
	line-height: 50px;
	padding: 40px 0;
}
.template11 .modulePC_content .problem .problem_txt span,.template11 .modulePC_content .problem .problem_txt input{
	display: inline-block;
	white-space: normal;
	margin: 0 25px;
	font-weight: bold;
}
.template11 .modulePC_content .problem .proble_click{
	cursor: pointer;
}
.template11 .modulePC_content .tableRecommend{
	width: 100%;
	padding: 60px 0 160px;
	background: url(http://page-bucket.oiaqye7985.com/land-page/images/module11/productTable_bg.jpg);
	background-size: 100% 100%;
	overflow-x: hidden;
}
.template11 .modulePC_content .tableRecommend_h1{
	color: #fff;
    font-size: 40px;
    height: 41px;
    line-height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.template11 .modulePC_content .tableRecommend_h1 span{
	font-weight: bold;
	margin: 0 30px;
}
.template11 .modulePC_content .tableRecommend_table{
	width: 990px;
	margin: auto;
	padding-top: 60px;
}
.template11 .modulePC_content .tableRecommend_table table{
	width: 100%;
	border-color: #4e76d6;
	background: #fff;
	border-radius: 10px;
	overflow: hidden;
}
.template11 .modulePC_content .tableRecommend_table table thead {
	background: #2f57b9;
}
.template11 .modulePC_content .tableRecommend_table table thead th{
	font-weight: bold;
	font-size: 28px;
	color: #fff;
	position: relative;
	text-align: center;
}
.template11 .modulePC_content .tableRecommend_table table thead th .triangle{
	position: absolute;
	display: block;
	width: 0px;
	height: 0px;
	border: 15px solid transparent;
	border-top-color: #1c419a;
	left: 0;
	right: 0;
	margin: auto;
	bottom: -30px;
}
.template11 .modulePC_content .tableRecommend_table table thead .tableRecommend_tableLeft{
	background: #1c419a;
}
.template11 .modulePC_content .tableRecommend_table table .tableRecommend_tableLeft{
	width: 350px;
}
.template11 .modulePC_content .tableRecommend_table table th{
	height: 56px;
	border:1px solid #4e76d6;
	border-bottom: none;
	border-left: none;
	text-align: center;
}
.template11 .modulePC_content .tableRecommend_table table tbody th{
	color: #4c77d6;
	font-size: 22px;
}
.template11 .modulePC_content .tableRecommend_table table tbody .tableRecommend_tableLeft{
	background: #dce7fe;
}
.template11 .modulePC_content  .tableRecommend_h2{
	padding: 43px 0 34px;
}
.template11 .modulePC_content .productTable{
	width: 996px;
	margin: auto;
}
.template11 .modulePC_content .productTable .productTable_box{
	width: 468px;
	height: 482px;
	background: #fff;
	border-radius: 10px;
	padding: 40px 10px 20px;
	text-align: center;
	margin-top: 30px;
}
.template11 .modulePC_content .productTable .productTable_box h1,.template11 .modulePC_content .productTable .productTable_box input{
	font-size: 28px;
	color: #578bee;
	padding-bottom: 25px;
	font-weight: bold;
}
.template11 .modulePC_content .productTable .productTable_box .img{
	width: 446px;
	height: 305px;
	border-radius: 10px;
	background: #e0ecfb;
	padding: 10px;
	overflow: hidden;
}
.template11 .modulePC_content .productTable .productTable_box .img img{width: 100%;}
.template11 .modulePC_content .productTable .productTable_box .abt{
	padding-top: 12px;
}
.template11 .modulePC_content .productTable .productTable_box .abt a,.template11 .modulePC_content .productTable .productTable_box .abt .a{
	background: #578ded;
	color:#fff;
	font-size: 20px;
	text-decoration: none;
	padding: 10px 15px;
	border-radius: 2000px;
}
.template11 .modulePC_content .productMonth {
	width: 1146px;
	margin: auto;
	padding: 60px 0 0;
}
.template11 .modulePC_content .productMonth .problem_h1{
	color: #4e76d6;
	font-size: 40px;
	font-weight: bold;
	text-align: center;
}
.template11 .modulePC_content .productMonth .productMonthP{
	font-size: 22px;
	color: #222222;
	text-align: center;
	padding: 34px 0 48px;
}
.template11 .modulePC_content .productMonth  .productMonthList{
	width: 330px;
	height: 260px;
	background: #4d77d6;
	padding: 12px;
}
.template11 .modulePC_content .productMonth  .productMonthList .productMonthList_img{
	width: 310px;
	height: 196px;
	background: #fff;
	padding: 10px;
}
.template11 .modulePC_content .productMonth  .productMonthList .productMonthList_p{
	text-align: center;
	color: #fff;
	font-size: 20px;
	padding-top: 13px;
}
.template11 .modulePC_content .productMonth   .productMonthListTxt{
	padding: 20px 0 40px;
}
.template11 .modulePC_content .productMonth   .productMonthListTxt .productMonthListTxt_h1{
	font-size: 18px;
	color: #333333;
}
.template11 .modulePC_content .productMonth   .productMonthListTxt .productMonthListTxt_abt {
	text-align: left;
	padding-top: 26px;
}
.template11 .modulePC_content .productMonth   .productMonthListTxt .productMonthListTxt_abt a,.template11 .modulePC_content .productMonth   .productMonthListTxt .productMonthListTxt_abt .a{
	font-size: 18px;
	color: #fff;
	padding: 6px 35px;
	background: #4d77d6;
	border-radius: 2000px;
	text-decoration: none;
	margin-right: 40px;
}
.template11 .modulePC_content .productMonth   .productMonthListTxt .productMonthListTxt_abt span,.template11 .modulePC_content .productMonth   .productMonthListTxt .productMonthListTxt_abt .span{
	text-decoration: underline;
	font-size: 18px;
	color: #333333;
}
.template11 .modulePC_content .productMonth  .honor .honor_h1{
	margin-bottom: 30px;
}
.template11 .modulePC_content .productMonth  .honor_list{
	width: 280px;
	height: 250px;
	border: 1px solid #eee;
	padding: 10px;
}
.template11 .modulePC_content .productMonth  .honor_list .honor_listImg{
	width: 100%;
	height: 177px;
	overflow: hidden;
}
.template11 .modulePC_content .productMonth  .honor_list .honor_listTxt{
	color: #555555;
	font-size: 18px;
	text-align: center;
	padding-top: 20px;
}
.template11 .modulePC_content .productMonth  .promise{
	padding: 53px 0;
}
.template11 .modulePC_content .productMonth  .promise .promise_h1 h1,.template11 .modulePC_content .productMonth  .promise .promise_h1 .h1{
	font-weight: bold;
	font-size: 32px;
	color: #4e76d6;
	padding-top: 15px;
}
.template11 .modulePC_content .productMonth  .promise .promiseList li{
	float: left;
	height: 136px;
}
.template11 .modulePC_content .productMonth  .promise .promiseList .promiseListT{
	width: 120px;
	height: 136px;
	background: url(http://page-bucket.oiaqye7985.com/land-page/images/module11/baing1.png);
	background-size: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: #4e76d6;
	font-size: 20px;
}
.template11 .modulePC_content .productMonth  .promise .promiseList .promiseListT p{padding: 0;margin: 0;}
.template11 .modulePC_content .productMonth  .promise .promiseList .promiseListT input{padding: 0;margin: 0;}
.template11 .modulePC_content .productMonth  .promise .promiseList .promiseListTjia{
	height: 136px;
	font-weight: bold;
	font-size: 34px;
	color: #4e76d6;
	text-align: center;
	display: flex;
	align-items: center;
	margin: 0 10px;
}

.template11 .modulePC_content .productMonth  .promise .promiseList:last-child .promiseListTjia{display: none;}
.template11 .modulePC_content .productMonth  .promise .promiseList:first-child{
	background: #000;
}
.template11 .modulePC_content .productMonthT{
	width: 100%;
	padding: 0;
	background:url(http://page-bucket.oiaqye7985.com/land-page/images/module11/productMonthTBg.jpg);
	background-size: 100% auto;
	background-repeat: no-repeat;
	background-color:#4e76d6 ;
}
.template11 .modulePC_content .productMonthT .productMonthT_content{
	width: 1146px;
	margin: auto;
	padding: 100px 0 0;
}
.template11 .modulePC_content .productMonthT .productMonthT_content .problem_h1{color: #fff;}
.template11 .modulePC_content .productMonthT .productMonthT_content .productMonthP{color: #fff;}
.template11 .modulePC_content .productMonthT .productMonthList{
	background: #fff;
}
.template11 .modulePC_content .productMonthT .productMonthList .productMonthList_p{
	color: #333333;
}
.template11 .modulePC_content .productMonthT .productMonthListTxt .productMonthListTxt_h1{
	color: #fff;
}
.template11 .modulePC_content .productMonthT .productMonthListTxt .productMonthListTxt_abt a,.template11 .modulePC_content .productMonthT .productMonthListTxt .productMonthListTxt_abt .a{color: #4e76d6;background: #fff;}
.template11 .modulePC_content .productMonthT .productMonthListTxt .productMonthListTxt_abt span,.template11 .modulePC_content .productMonthT .productMonthListTxt .productMonthListTxt_abt .span{color: #fff;}
.template11 .discount .discount_content{
	padding: 70px 0 ;
}
.template11 .discount .tableRecommend_h1{
	color: #4e76d6;
	font-size: 40px;
}
.template11 .discount .discount_txt{
	text-align: center;
	padding: 50px 0 0;
}
.template11 .discount .discount_txt h2,.template11 .discount .discount_txt .h2{
	color: #4e76d6;
	font-weight: bold;
	font-size: 40px;
}
.template11 .discount .discount_txt h3,.template11 .discount .discount_txt .h3{
	color: #4e76d6;
	font-weight: bold;
	font-size: 27px;
	line-height: 50px;
}
.template11 .discount .discount_txt p,.template11 .discount .discount_txt .p{
	padding: 15px 0;
	margin: 0;
	cursor: pointer;
}
.template11 .discount .discount_txt a,.template11 .discount .discount_txt .a{
	padding: 8px 15px;
	font-size: 24px;
	color: #ffffff;
	text-decoration: none;
	background: #4e76d6;
	border-radius: 2000px;
}
.template11 .tableRecommendTopImg{display: none;}
	
</style>