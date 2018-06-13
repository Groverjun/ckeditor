<template>
	<div>
		<div class="head MaskHover" v-for="(item,index) in data.banner">
			<a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
				<img v-bind:src="item" width="100%"/>
			</a>
			<div class="MaskBox" v-if="delNode">
				<p>上传文件的宽为1920px</p>
				<p>
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
						<i class="el-icon-upload"></i><span>上传</span>
						<input type="file" v-on:change="head($refs.module4Head[index],index,1920)" ref="module4Head"/>
					</a>
					<a href="javascript:void(0)" type="button" class="el-button el-button--danger"@click="delhead(index)">
						<i class="el-icon-delete"></i><span>删除</span>
					</a>
				</p>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary"  @click="addhead">
				<i class="el-icon-edit"></i><span>添加一张banner</span>
			</a>
		</div>
		<!---->
		<div class="contentBox">
			<div class="product" v-for="(item,index) in data.product">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<h1 class="text-center title_Top">
								<span v-if="!delNode">{{item.h1}}</span>
								<input class="INputAll" type="text" v-if="delNode" v-model="item.h1"/>
								<p><i></i></p>
							</h1>
						</div>
					</div>
					<!---->
					<div class="row">
						<div class="col-md-3" v-for="(item2,index) in item.list">
							<ul class="product_list">
								<li class="MaskHover">
									<a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A"><img v-bind:src="item2.img"/></a>
									<div class="MaskBox" v-if="delNode">
										<p>上传文件的宽为220px</p>
										<p>
											<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
												<i class="el-icon-upload"></i><span>上传</span>
												<input type="file" v-on:change="product($refs.module4product[index],index,220)" ref="module4product" />
											</a>
											<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="delproduct(index)">
												<i class="el-icon-delete"></i><span>删除</span>
											</a>
										</p>
									</div>
								</li>
								<li class="product_listB">
									<span v-if="!delNode">{{item2.p}}</span>
									<input class="INputAll" type="text" v-if="delNode" v-model="item2.p"/>
								</li>
							</ul>
						</div>
					</div>	
					<!---->
					<div class="addNode" v-if="delNode">
						<a href="javascript:void(0)" type="button" class="el-button el-button--primary"  @click="addproduct">
							<i class="el-icon-edit"></i><span>添加产品介绍</span>
						</a>
					</div>
				</div>
			</div>
			<!---->
			<div class="container">
				<div class="introduceB" v-for="(item,index) in data.introduce">
					<div class="row introduce">
						<div class="col-md-6" :style="calcStyle(index)">
							<div class="MaskHover">
								<a href="javascript:void(0)"><img v-bind:src="item.img"/></a>
								<div class="MaskBox" v-if="delNode">
									<p>上传图片的宽为550PX</p>
									<p>
										<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
											<i class="el-icon-upload"></i><span>上传</span>
											<input type="file" v-on:change="introduce($refs.module4introduce[index],index,550)" ref="module4introduce" />
										</a>
										<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="delintroduce(index)">
											<i class="el-icon-delete"></i><span>删除</span>
										</a>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<h1 class="title_right">
								<span v-if="!delNode">{{item.h1}}</span>
								<input class="INputAll" type="text" v-if="delNode" v-model="item.h1"/>
								<i></i>
							</h1>
							<ul class="title_Llist">
								<li v-for="(item2,index) in item.li">
									<span v-if="!delNode">{{item2}}</span>
									<textarea type="text" v-if="delNode"  class="INputAll" v-model="item.li[index]" ></textarea>
									<a href="javascript:void(0)" @click="titleLlist(item.li,index)"  type="button" class="el-button el-button--danger is-circle deleteAll">
										<i class="el-icon-delete"></i>
									</a>
								</li>
							</ul>
							<div class="addNode" v-if="delNode" style="text-align: left;">
								<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addtitleLlist(item.li)">
									<i class="el-icon-edit"></i><span>添加一行</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="addNode" v-if="delNode">
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary"  @click="addintroduce">
						<i class="el-icon-edit"></i><span>添加产品介绍</span>
					</a>
				</div>
			</div>
			<!---->
			<div class="abt MaskHover" v-for="(item,index) in data.abt1">
				<a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A"><img v-bind:src="item" width="100%"/></a>
				<div class="MaskBox" v-if="delNode">
					<p>上传图片的宽为550PX</p>
					<p>
						<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
							<i class="el-icon-upload"></i><span>上传</span>
							<input type="file" v-on:change="abt1($refs.module4abt1[index],index,1920)" ref="module4abt1" />
						</a>
						<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="delabt1(index)">
							<i class="el-icon-delete"></i><span>删除</span>
						</a>
					</p>
				</div>
			</div>
			<div class="addNode" v-if="delNode">
				<a href="javascript:void(0)" type="button" class="el-button el-button--primary"  @click="addabt1">
					<i class="el-icon-edit"></i><span>添加一行横屏banner</span>
				</a>
			</div>
			<div class="classification">
				<div class="container">
					<div class="row" v-for="(item,index) in data.enterpriseT" style="margin-top: 50px;">
						<div class="col-md-6" :style="calcStyle(index)">
							<ul class="classification_list" v-for="(item,index) in item.list">
								<li>
									<p class="clearfix">
										<span v-if="!delNode">{{item.index}}</span>
										<input class="INputAll" type="text" v-if="delNode" v-model="item.index"/>
										&nbsp;
										<span v-if="!delNode">{{item.title}}</span>
										<input class="INputAll" type="text" v-if="delNode" v-model="item.title"/>
									</p>
								</li>
								<li>
									<h1>
										<span v-if="!delNode">{{item.h1}}</span>
										<input class="INputAll" type="text" v-if="delNode" v-model="item.h1"/>
									</h1>
								</li>
								<li>
									<div>
										<span v-if="!delNode">{{item.p}}</span>
										<textarea class="INputAll" type="text" v-if="delNode" v-model="item.p"></textarea>
									</div>
								</li>
							</ul>
						</div>
						<div class="col-md-6">
							<div class="classification_imgT">
								<div class="left">
									<div class="MaskHover">
										<img v-bind:src="item.img1"/>
										<div class="MaskBox" v-if="delNode">
											<p>上传图片的宽为350PX</p>
											<p>
												<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
													<i class="el-icon-upload"></i><span>上传</span>
													<input type="file" v-on:change="classification1($refs.module4classification1[index],index,350)" ref="module4classification1" />
												</a>
												<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="delclassification(index)">
													<i class="el-icon-delete"></i><span>删除</span>
												</a>
											</p>
										</div>
									</div>
								</div>
								<div class="right">
									<div class="MaskHover">
										<img v-bind:src="item.img2"/>
										<div class="MaskBox"  v-if="delNode">
											<p>上传图片的宽为450PX</p>
											<p>
												<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
													<i class="el-icon-upload"></i><span>上传</span>
													<input type="file"v-on:change="classification2($refs.module4classification2[index],index,450)" ref="module4classification2" />
												</a>
												<a href="javascript:void(0)" type="button" class="el-button el-button--danger"  @click="delclassification(index)">
													<i class="el-icon-delete"></i><span>删除</span>
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="addNode" v-if="delNode">
						<a href="javascript:void(0)" type="button" class="el-button el-button--primary"   @click="addenterpriseT">
							<i class="el-icon-edit"></i><span>添加一行企业优势</span>
						</a>
					</div>
					<!---->
					<div class="row" v-for="(item,index) in data.enterpriseB">
						<div class="col-md-6" :style="calcStyle(index)">
							<div class="classification_imgB MaskHover">
								<img v-bind:src="item.img1" width="100%"/>
								<div class="MaskBox"  v-if="delNode">
									<p>上传图片的宽为550PX</p>
									<p>
										<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
											<i class="el-icon-upload"></i><span>上传</span>
											<input type="file" v-on:change="enterpriseB($refs.module4enterpriseB[index],index,550)" ref="module4enterpriseB" />
										</a>
										<a href="javascript:void(0)" type="button" class="el-button el-button--danger"   @click="delenterpriseB(index)">
											<i class="el-icon-delete"></i><span>删除</span>
										</a>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<ul class="classification_list" v-for="(item,index) in item.list">
								<li>
									<p class="clearfix">
										<span v-if="!delNode">{{item.index}}</span>
										<input class="INputAll" type="text" v-if="delNode" v-model="item.index"/>
										&nbsp;
										<span v-if="!delNode">{{item.title}}</span>
										<input class="INputAll" type="text" v-if="delNode" v-model="item.title"/>
									</p>
								</li>
								<li>
									<h1>
										<span v-if="!delNode">{{item.h1}}</span>
										<input class="INputAll" type="text" v-if="delNode" v-model="item.h1"/>
									</h1>
								</li>
								<li>
									<div>
										<span v-if="!delNode">{{item.p}}</span>
										<textarea class="INputAll" type="text" v-if="delNode" v-model="item.p"></textarea>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="addNode" v-if="delNode">
						<a href="javascript:void(0)" type="button" class="el-button el-button--primary"   @click="addenterpriseB">
							<i class="el-icon-edit"></i><span>添加一行企业优势</span>
						</a>
					</div>
					<!---->
				</div>
			</div>
			<div class="Success">
				<div class="container" v-for="(item,index) in data.success">
					<div class="row" >
						<div class="col-md-12">
							<h1 class="text-center title_Top">
								<span v-if="!delNode">{{item.h1}}</span>
								<input class="INputAll" type="text" v-if="delNode" v-model="item.h1"/>
								<p><i></i></p>
							</h1>
						</div>
					</div>
					<div class="row">
						<div class="col-md-3" v-for="(item,index) in item.img">
							<div class="MaskHover successBox">
								<img v-bind:src="item"/>
								<div class="MaskBox"  v-if="delNode">
									<p>上传图片的宽为260PX</p>
									<p>
										<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
											<i class="el-icon-upload"></i><span>上传</span>
											<input type="file" v-on:change="success($refs.module4success[index],index,260)" ref="module4success" />
										</a>
										<a href="javascript:void(0)" type="button" class="el-button el-button--danger"    @click="delsuccess(index)">
											<i class="el-icon-delete"></i><span>删除</span>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="addNode" v-if="delNode">
				<a href="javascript:void(0)" type="button" class="el-button el-button--primary"   @click="addsuccess">
					<i class="el-icon-edit"></i><span>添加一行成功案例</span>
				</a>
			</div>
			<!---->
			<div class="abt MaskHover" v-for="(item,index) in data.abt2">
				<a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A"><img v-bind:src="item" width="100%"/></a>
				<div class="MaskBox"  v-if="delNode">
					<p>上传图片的宽为1920PX</p>
					<p>
						<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
							<i class="el-icon-upload"></i><span>上传</span>
							<input type="file" v-on:change="abt2($refs.module4abt2[index],index,1920)" ref="module4abt2" />
						</a>
						<a href="javascript:void(0)" type="button" class="el-button el-button--danger"    @click="delabt2(index)">
							<i class="el-icon-delete"></i><span>删除</span>
						</a>
					</p>
				</div>
			</div>
			<div class="addNode" v-if="delNode">
				<a href="javascript:void(0)" type="button" class="el-button el-button--primary"  @click="addabt2">
					<i class="el-icon-edit"></i><span>添加一行横屏banner</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
var data='{"status":200,"msg":"OK","data":{"paramMob":{"product":[{"h1":"产品中心","list":[{"p":"双光束紫外可见分光光度计","img":"http://page-bucket.oiaqye7985.com/land-page/images/module4/list_p1.jpg"},{"p":"KM-B102酶标分析仪","img":"http://page-bucket.oiaqye7985.com/land-page/images/module4/list_p1.jpg"},{"p":"KF-A33超声波清洗机","img":"http://page-bucket.oiaqye7985.com/land-page/images/module4/list_p1.jpg"},{"p":"KDC-II高低温一体循环槽","img":"http://page-bucket.oiaqye7985.com/land-page/images/module4/list_p1.jpg"}]}],"abt2":["http://page-bucket.oiaqye7985.com/land-page/images/module4/banner3.jpg"],"abt1":["http://page-bucket.oiaqye7985.com/land-page/images/module4/banner2.jpg"],"introduce":[{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module4/list_top.jpg","h1":"产品特点","li":["1、可使用普通自来水，酒精，溶剂清洗","2、可使用普通自来水，酒精，溶剂清洗"]}],"success":[{"img":["http://page-bucket.oiaqye7985.com/land-page/images/module4/list_bb1.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module4/list_bb1.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module4/list_bb1.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module4/list_bb1.jpg"],"h1":"成功案例"}],"banner":["http://page-bucket.oiaqye7985.com/land-page/images/module4/banner.jpg"],"enterpriseT":[{"list":[{"p":"励志成为实金室似器方案解决者,自身拥有强大的研发团队,同时与多所高校深度合作、联合开发,确保产品技术行业领先。","index":"01","h1":"研发强 技术强","title":"强"},{"p":"在上海、南京、武汉拥有多个研发和销售中心,全国建立了上百家经销合作伙伴,长期同多家科研单位保持密切的合作关系。","index":"02","h1":"销售中心多 合作伙伴多","title":"多"}],"img2":"http://page-bucket.oiaqye7985.com/land-page/images/module4/z_1.jpg","img1":"http://page-bucket.oiaqye7985.com/land-page/images/module4/z_2.jpg"}],"enterpriseB":[{"list":[{"p":"100%技术和质量保证!获得多个荣誉证书,产品通过国家级检验机构检测,均优于国家标准。拥有ERP企业信息化管理系统、CRM客户关系管理系统、PDM产品生命周期信息管理、OAか公自动化系统。","index":"03","h1":"企业优 管理优","title":"优"},{"p":"售前的一对一沟通,确保产品满足客户真正需求;售后跟踪服务,快速响应让客户无后顾之忧。一次购买、终身服务!","index":"04","h1":"售前 售后诚","title":"诚"}],"img2":"","img1":"http://page-bucket.oiaqye7985.com/land-page/images/module4/list_b1.jpg"}]},"paramPC":{"product":[{"h1":"产品中心","list":[{"p":"双光束紫外可见分光光度计","img":"http://page-bucket.oiaqye7985.com/land-page/images/module4/list_p1.jpg"},{"p":"KM-B102酶标分析仪","img":"http://page-bucket.oiaqye7985.com/land-page/images/module4/list_p1.jpg"},{"p":"KF-A33超声波清洗机","img":"http://page-bucket.oiaqye7985.com/land-page/images/module4/list_p1.jpg"},{"p":"KDC-II高低温一体循环槽","img":"http://page-bucket.oiaqye7985.com/land-page/images/module4/list_p1.jpg"}]}],"abt2":["http://page-bucket.oiaqye7985.com/land-page/images/module4/banner3.jpg"],"abt1":["http://page-bucket.oiaqye7985.com/land-page/images/module4/banner2.jpg"],"introduce":[{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module4/list_top.jpg","h1":"产品特点","li":["1、可使用普通自来水，酒精，溶剂清洗","2、可使用普通自来水，酒精，溶剂清洗"]}],"success":[{"img":["http://page-bucket.oiaqye7985.com/land-page/images/module4/list_bb1.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module4/list_bb1.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module4/list_bb1.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module4/list_bb1.jpg"],"h1":"成功案例"}],"banner":["http://page-bucket.oiaqye7985.com/land-page/images/module4/banner.jpg"],"enterpriseT":[{"list":[{"p":"励志成为实金室似器方案解决者,自身拥有强大的研发团队,同时与多所高校深度合作、联合开发,确保产品技术行业领先。","index":"01","h1":"研发强 技术强","title":"强"},{"p":"在上海、南京、武汉拥有多个研发和销售中心,全国建立了上百家经销合作伙伴,长期同多家科研单位保持密切的合作关系。","index":"02","h1":"销售中心多 合作伙伴多","title":"多"}],"img2":"http://page-bucket.oiaqye7985.com/land-page/images/module4/z_1.jpg","img1":"http://page-bucket.oiaqye7985.com/land-page/images/module4/z_2.jpg"}],"enterpriseB":[{"list":[{"p":"100%技术和质量保证!获得多个荣誉证书,产品通过国家级检验机构检测,均优于国家标准。拥有ERP企业信息化管理系统、CRM客户关系管理系统、PDM产品生命周期信息管理、OAか公自动化系统。","index":"03","h1":"企业优 管理优","title":"优"},{"p":"售前的一对一沟通,确保产品满足客户真正需求;售后跟踪服务,快速响应让客户无后顾之忧。一次购买、终身服务!","index":"04","h1":"售前 售后诚","title":"诚"}],"img2":"","img1":"http://page-bucket.oiaqye7985.com/land-page/images/module4/list_b1.jpg"}]},"modelType":0}}'
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
		calcStyle(index) {
	        var style = {}
	        if (index % 2 !== 0) {
	            style = {float: 'right'}
	        }
	        return style
		 },
		 
		//内容编辑区
		head(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.banner.splice(index,1,str)
	    	})
    		input_file.value=''
		},
		delhead(index){
			this.data.banner.splice(index,1)
		},
		addhead(){
			this.data.banner.push("http://page-bucket.oiaqye7985.com/land-page/images/module4/banner.jpg")
		},
		product(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.product[0].list[index].img=str
	    	})
    		input_file.value=''
		},
		delproduct(index){
			this.data.product[0].list.splice(index,1)
		},
		addproduct(){
			this.data.product[0].list.push({img:"http://page-bucket.oiaqye7985.com/land-page/images/module4/list_p1.jpg",p:"双光束紫外可见分光光度计"})
		},
		introduce(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.introduce[index].img=str
	    	})
    		input_file.value=''
		},
		delintroduce(index){
			this.data.introduce.splice(index,1)
		},
		addintroduce(){
			this.data.introduce.push(
				{
					h1:"公司介绍",
					img:"http://page-bucket.oiaqye7985.com/land-page/images/module4/list_top.jpg",
					li:[
					"我们将坚持以合理的价格、准确的交期为客户提供高质量的产品和服务。"]

					
				}
			)
		},
		titleLlist(txt,index){
			txt.splice(index,1)
		},
		addtitleLlist(txt){
			txt.push("1、可使用普通自来水，酒精，溶剂清洗")
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
			this.data.abt1.push("http://page-bucket.oiaqye7985.com/land-page/images/module4/banner2.jpg")
		},
		classification1(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.enterpriseT[index].img1=str
	    	})
    		input_file.value=''
		},
		classification2(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.enterpriseT[index].img2=str
	    	})
    		input_file.value=''
		},
		delclassification(index){
			this.data.enterpriseT.splice(index,1)
		},
		addenterpriseT(){
			this.data.enterpriseT.push(
				{
					list:[
						{
							index:"01",
							title:"强",
							h1:"研发强 技术强",
							p:"励志成为实金室似器方案解决者,自身拥有强大的研发团队,同时与多所高校深度合作、联合开发,确保产品技术行业领先。",
						},
						{
							index:"02",
							title:"多",
							h1:"销售中心多 合作伙伴多",
							p:"在上海、南京、武汉拥有多个研发和销售中心,全国建立了上百家经销合作伙伴,长期同多家科研单位保持密切的合作关系。",
						},
					],
					img1:"http://page-bucket.oiaqye7985.com/land-page/images/module4/z_2.jpg",
					img2:"http://page-bucket.oiaqye7985.com/land-page/images/module4/z_1.jpg"
				}
			)
		},
		classification2(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.enterpriseT[index].img2=str
	    	})
    		input_file.value=''
		},
		delclassification(index){
			this.data.enterpriseT.splice(index,1)
		},
		addenterpriseT(){
			this.data.enterpriseT.push(
				{
					list:[
						{
							index:"01",
							title:"强",
							h1:"研发强 技术强",
							p:"励志成为实金室似器方案解决者,自身拥有强大的研发团队,同时与多所高校深度合作、联合开发,确保产品技术行业领先。",
						},
						{
							index:"02",
							title:"多",
							h1:"销售中心多 合作伙伴多",
							p:"在上海、南京、武汉拥有多个研发和销售中心,全国建立了上百家经销合作伙伴,长期同多家科研单位保持密切的合作关系。",
						},
					],
					img1:"http://page-bucket.oiaqye7985.com/land-page/images/module4/z_2.jpg",
					img2:"http://page-bucket.oiaqye7985.com/land-page/images/module4/z_1.jpg"
				}
			)
		},
		enterpriseB(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.enterpriseB[index].img1=str
	    	})
    		input_file.value=''
		},
		delenterpriseB(index){
			this.data.enterpriseB.splice(index,1)
		},
		addenterpriseB(){
			this.data.enterpriseB.push(
				{
					list:[
						{
							index:"03",
							title:"优",
							h1:"企业优 管理优",
							p:"100%技术和质量保证!获得多个荣誉证书,产品通过国家级检验机构检测,均优于国家标准。拥有ERP企业信息化管理系统、CRM客户关系管理系统、PDM产品生命周期信息管理、OAか公自动化系统。",
						},
						{
							index:"04",
							title:"诚",
							h1:"售前 售后诚",
							p:"售前的一对一沟通,确保产品满足客户真正需求;售后跟踪服务,快速响应让客户无后顾之忧。一次购买、终身服务!",
						},
					],
					img1:"http://page-bucket.oiaqye7985.com/land-page/images/module4/list_b1.jpg",
					img2:""
				}
			)
		},
		success(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.success[0].img.splice(index,1,str)
	    	})
    		input_file.value=''
		},
		delsuccess(index){
			this.data.success[0].img.splice(index,1)
		},
		addsuccess(){
			this.data.success[0].img.push("http://page-bucket.oiaqye7985.com/land-page/images/module4/list_bb1.jpg")
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
			this.data.abt2.push("http://page-bucket.oiaqye7985.com/land-page/images/module4/banner3.jpg")
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
#pageWrapper_box{
	background: #fff;
	padding-top: 50px;
}
ul,li{
	list-style: none;
	padding: 0;
	margin: 0;
}
.introduceB{
	padding: 20px 0;
}
#page-wrapper{background: #fff;}
.title_Top {
  font-size: 34px;
  color: #666666;
  font-weight: bold;
  margin-bottom: 30px; }
  .title_Top i {
    display: block;
    width: 50px;
    margin: 15px auto 30px;
    border-bottom: 1px solid #666666; }
.title_Top input{
	width: 200px;
	text-align: center;
}
.title_right{
  font-size: 34px;
  color: #666666;
  font-weight: bold;
  margin:0  0 10px 0; 
}
.title_right i {
    display: block;
    width: 50px;
    margin: 10px 0;
    border-bottom: 1px solid #666666; }
.introduce img {
  width: 100%; }
.introduce p {
  font-size: 16px;
  color: #333333;
  line-height: 24px;
  padding-bottom: 20px; }
.introduce textarea{
	width: 100%;
	height: 30px;
	
}
.product {
  padding: 70px 0;
  background: #f4f4f4;
  margin: 30px 0 0; }
  .product .product_list {
  	margin-bottom: 10px;
    padding: 50px 20px 30px;
    background: #fff;
    text-align: center; }
    .product .product_list .product_listB {
      border-top: 2px solid #999;
      padding-top: 30px; }

.classification {
  padding: 70px 0; }
  .classification .classification_list {
    padding-bottom: 50px; }
    .classification .classification_list p {
      /*width: 150px;*/
      height: 60px;
      display: inline-block;
      line-height: 60px;
      background: #3f85df;
      font-size: 34px;
      color: #fff;
      padding: 0 20px;
      margin: 0; }
      .classification .classification_list p input{
      	background:none ;
      	height: 30px;
      	border: 1px solid #ccc;
      	color: #000;
      	width: 50px;
      	border: none;
      	color: #fff;
      }
    .classification .classification_list h1 {
      font-size: 26px;
      color: #666666;
      font-weight: bold; }
    .classification .classification_list div textarea{
    	width: 100%;
    	height: 60px;
    }
    .classification .classification_list div {
      font-size: 16px;
      color: #666666;
      line-height: 24px; }
  .classification .classification_imgT {
    position: relative;
    min-height: 480px; }
    .classification .classification_imgT > .left {
      width: 340px;
      height: 340px;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 120px;
      z-index: 2; }
    .classification .classification_imgT > .right {
      width: 440px;
      height: 440px;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      right: 0;
      top: 0; }
  .classification .classification_imgB {
    margin-bottom: 20px; }
.successBox{
	margin-bottom: 10px;
}
.Success img {
  width: 100%; }

@media (max-width: 768px) {
  .classification_imgT {
    display: none; } }

</style>