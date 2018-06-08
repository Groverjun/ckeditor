<template>
	<div id="html-content">
		<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="ok">
				<i class="el-icon-edit"></i><span>保存</span>
			</a>
		<div class="banner MaskHover"  v-for="(item,index) in data.banner">
			<a href="javascript:void(0)" class="clickA" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
				<img  v-bind:src="item" width="100%">
			</a> 
			<div class="MaskBox" v-if="delNode">
				<p>上传文件的宽为1920px</p>
				<p>
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
						<i class="el-icon-upload"></i><span>上传</span>
						<input type="file" @change="bannerFile($refs.bannerImg[index],index,1920)" ref="bannerImg"/>
					</a>
					<a href="javascript:void(0)" type="button" class="el-button el-button--danger"@click="bannerDel(index)">
						<i class="el-icon-delete"></i><span>删除</span>
					</a>
				</p>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary"  @click="addbanner">
				<i class="el-icon-edit"></i><span>添加一张banner</span>
			</a>
		</div>
		<!---->
		<div class="b1_list">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 ">
						<div class="title_Top">
							<span v-if="!delNode">{{data.headtop_txt.h1}}</span>
							<input class="INputAll" type="text" v-if="delNode" v-model="data.headtop_txt.h1"/>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-lg-6 col-lg-12" v-for="(item,index) in data.product">
						<ul>
							<li class="Mask_box MaskHover">
								<a href="javascript:void(0)" class="clickA" data-type="co" data-keyword="关键字" data-local="A">
									<img v-bind:src="item.img" width="100%"/>
								</a>
								<div class="MaskBox" v-if="delNode">
									<p>上传文件的宽为370px</p>
									<p>
										<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
											<i class="el-icon-upload"></i><span>上传</span>
											<input type="file" @change="productFile($refs.productImg[index],index,370)" ref="productImg"/>
										</a>
										<a href="javascript:void(0)" type="button" class="el-button el-button--danger"  @click="productDel(index)">
											<i class="el-icon-delete"></i><span>删除</span>
										</a>
									</p>
								</div>
							</li>
							<li>
								<p>
									<i></i>
									<span v-if="!delNode">{{item.p}}</span>
									<input class="INputAll" type="text" v-if="delNode" v-model="item.p"/>
									<i></i>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="productAdd">
				<i class="el-icon-edit"></i><span>添加一块产品推荐</span>
			</a>
		</div>
		<!---->
		<div v-for="(item,index) in data.iso" class="abt1 MaskHover">
			<a href="javascript:void(0)" class="clickA"  onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A">
				<img v-bind:src="item" width="100%"/>
			</a>
			<div class="MaskBox" v-if="delNode">
				<p>上传文件的宽为1920px</p>
				<p>
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
						<i class="el-icon-upload"></i><span>上传</span>
						<input type="file" @change="isoFile($refs.isoImg[index],index,1920)" ref="isoImg"/>
					</a>
					<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="isoDel(index)">
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
		<div class="b2_list ">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 ">
						<div class="title_Top">
							<span v-if="!delNode">{{data.headtop_txt.h2}}</span>
							<input class="INputAll" type="text" v-if="delNode" v-model="data.headtop_txt.h2"/>
						</div>
					</div>
				</div>
				<!---->
				<div class="b2_listB" v-for="(item,index) in data.advantage">
					<div class="row" >
						<div class="col-lg-6 col-lg-12" :style="calcStyle(index)">
							<div class="b2_listUL">
								<div class="b2_listUL_top">
									<h1>
										<span v-if="!delNode">{{item.h1}}</span>
										<input class="INputAll" type="text" v-if="delNode" v-model="item.h1"/>
									</h1>
									<p>
										<span v-if="!delNode">{{item.p}}</span>
										<textarea  cols="30" class="INputAll text-center" type="text" v-if="delNode" v-model="item.p"></textarea>
									</p>
								</div>
								<ul>
									<li v-for="(item2,index) in item.li">
										<span v-if="!delNode">{{item2}}</span>
										<textarea class="INputAll" cols="45" type="text" v-if="delNode" v-model="item.li[index]"></textarea>
										<a href="javascript:void(0)" @click="tokedit(item,index)"  type="button" class="el-button el-button--danger is-circle deleteAll">
											<i class="el-icon-delete"></i>
										</a>
									</li>
								</ul>
								<div class="addNode" v-if="delNode">
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="titleLlist(item)">
										<i class="el-icon-edit"></i><span>添加一行</span>
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-lg-12">
							<div class="MaskHover">
								<img v-bind:src="item.img" width="100%"/>
								<div class="MaskBox" v-if="delNode">
									<p>上传文件的宽为590px</p>
									<p>
										<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
											<i class="el-icon-upload"></i><span>上传</span>
											<input type="file"  @change="advantageFile($refs.advantageImg[index],index,590)" ref="advantageImg"/>
										</a>
										<a href="javascript:void(0)" @click="advantageDel(index)" type="button" class="el-button el-button--danger">
											<i class="el-icon-delete"></i><span>删除</span>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="advantageAdd">
				<i class="el-icon-edit"></i><span>添加一块优势</span>
			</a>
		</div>
		<!--/b2_list-->
		<div v-for="(item,index) in data.steel" class="abt1 MaskHover">
			<a href="javascript:void(0)" class="clickA" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
				<img v-bind:src="item" width="100%"/>
				<div class="MaskBox" v-if="delNode">
					<p>上传文件的宽为1920px</p>
					<p>
						<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
							<i class="el-icon-upload"></i><span>上传</span>
							<input type="file" @change="steelFile($refs.steelImg[index],index,1920)" ref="steelImg"/>
						</a>
						<a href="javascript:void(0)" type="button" class="el-button el-button--danger"  @click="steeloDel(index)">
							<i class="el-icon-delete"></i><span>删除</span>
						</a>
					</p>
				</div>
			</a>
		</div>
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addabt2">
				<i class="el-icon-edit"></i><span>添加一块横屏banner</span>
			</a>
		</div>
		<!---->
		<div class="b3_list">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="title_Top">
							<span v-if="!delNode">{{data.headtop_txt.h3}}</span>
							<input class="INputAll" type="text" v-if="delNode" v-model="data.headtop_txt.h3"/>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-lg-12" v-for="(item,index) in data.successfulCases">
						<ul>
							<li class="MaskHover">
								<img v-bind:src="item.img" width="100%"/>
								<div class="MaskBox" v-if="delNode">
									<p>上传文件的宽为375px</p>
									<p>
										<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
											<i class="el-icon-upload"></i><span>上传</span>
											<input type="file"  @change="fulCasesFile($refs.fulCasesImg[index],index,375)" ref="fulCasesImg"/>
										</a>
										<a href="javascript:void(0)" type="button" class="el-button el-button--danger"  @click="fulCasesDel(index)"> 
											<i class="el-icon-delete"></i><span>删除</span>
										</a>
									</p>
								</div>
								
							</li>
							<li>
								<p>
									<i></i>
										<span v-if="!delNode">{{item.p}}</span>
										<input class="INputAll" type="text" v-if="delNode" v-model="item.p"/>
									<i></i>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="fulCasesAdd">
				<i class="el-icon-edit"></i><span>添加一块成功案例</span>
			</a>
		</div>
		<!---->
		<div class="container" v-if="ALLfoot">
			<div class="row">
				<div class="col-lg-12">
					<div class="title_Top">
						<span v-if="!delNode">{{data.headtop_txt.h4}}</span>
						<input class="INputAll" type="text" v-if="delNode" v-model="data.headtop_txt.h4"/>
					</div>
				</div>
			</div>
		</div>
		<!---->
		<div class="foot" v-if="ALLfoot">
			<div class="container">
				<div class="row" >
					<div class="col-lg-3" v-for="(item,index) in data.foot">
						<p class="text-center MaskHover">
							<img v-bind:src="item.img" width="100%"/>
							<span class="MaskBox" v-if="delNode">
								<p>上传文件的宽为375px</p>
								<p>
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
										<i class="el-icon-upload"></i><span>上传</span>
										<input type="file" @change="footFile($refs.footImg[index],index,280)" ref="footImg"/>
									</a>
									<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="footDel(index)">
										<i class="el-icon-delete"></i><span>删除</span>
									</a>
								</p>
							</span>
						</p>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-lg-12 ">
						<div class="foot_abt text-center">
							<a href="javascript:void(0)"  class="btn btn-default"  onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
								立即咨询
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="footAdd">
				<i class="el-icon-edit"></i><span>添加一块foot</span>
			</a>
			<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="footalldel">
				<i class="el-icon-edit"></i><span>删除foot</span>
			</a>
		</div>
	</div>
</template>

<script>
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
var data='{"status":200,"msg":"OK","data":{"paramMob":{"steel":["http://page-bucket.oiaqye7985.com/img/i/abt2.jpg"],"product":[{"p":"镀锌带方管","img":"http://page-bucket.oiaqye7985.com/img/i/b1_list1.jpg"},{"p":"镀锌带圆管","img":"http://page-bucket.oiaqye7985.com/img/i/b1_list2.jpg"},{"p":"镀锌带方管","img":"http://page-bucket.oiaqye7985.com/img/i/b1_list3.jpg"},{"p":"钢管","img":"http://page-bucket.oiaqye7985.com/img/i/b1_list5.jpg"},{"p":"钢管","img":"http://page-bucket.oiaqye7985.com/img/i/b1_list5.jpg"},{"p":"钢管","img":"http://page-bucket.oiaqye7985.com/img/i/b1_list6.jpg"}],"iso":["http://page-bucket.oiaqye7985.com/img/i/abt1.jpg"],"successfulCases":[{"p":"大棚施工图","img":"http://page-bucket.oiaqye7985.com/img/i/b3_list1.jpg"},{"p":"石油管道施工图","img":"http://page-bucket.oiaqye7985.com/img/i/b3_list1.jpg"},{"p":"穿线施工图","img":"http://page-bucket.oiaqye7985.com/img/i/b3_list1.jpg"},{"p":"防腐工程","img":"http://page-bucket.oiaqye7985.com/img/i/b3_list1.jpg"},{"p":"钢管喷漆图","img":"http://page-bucket.oiaqye7985.com/img/i/b3_list1.jpg"},{"p":"天然气管道施工图","img":"http://page-bucket.oiaqye7985.com/img/i/b3_list1.jpg"}],"advantage":[{"p":"库存充足、保证货期","img":"http://page-bucket.oiaqye7985.com/img/i/b2_list1.jpg","h1":"强大的生产实力","li":["热镀锌带圆管、方管是主导产品，年产量达45万吨;","直缝焊管、热镀锌管、螺旋焊管等产品年销量达65万吨;","产品广泛应用于水暖、大棚、穿线、石油、天然气等;"]},{"p":"保证出厂合格率100%","img":"http://page-bucket.oiaqye7985.com/img/i/b2_list2.jpg","h1":"完善的检测管理体系","li":["公司总资产2亿元，多名资深的检测人员把控；;","完整的物理和化学性能分析检测并出具相关的检测报告；","保证了热镀锌带管从原料入库到成品出库各个环节安全可靠。"]},{"p":"是众多客户选择兆利达的理由","img":"http://page-bucket.oiaqye7985.com/img/i/b3_list3.jpg","h1":"客户至上”的服务理念和行动","li":["只做精品--不接受不良品、不制造不良品、不放行不良品","是多项国家重点工程定点供应单位和多家大型钢铁公司一级经销商 同澳大利亚、加拿大、南美、中东等国家建立贸易关系，构筑起牢 固的世界性经营格局。;"]}],"banner":["http://page-bucket.oiaqye7985.com/img/i/banner.jpg"],"foot":[{"img":"http://page-bucket.oiaqye7985.com/img/i/foot1.jpg"},{"img":"http://page-bucket.oiaqye7985.com/img/i/foot2.jpg"},{"img":"http://page-bucket.oiaqye7985.com/img/i/foot3.jpg"},{"img":"http://page-bucket.oiaqye7985.com/img/i/foot4.jpg"}],"headtop_txt":{"h1":"热销产品推荐","h2":"我们的优势","h3":"成功案例","h4":"荣誉资质"}},"paramPC":{"steel":["http://page-bucket.oiaqye7985.com/img/i/abt2.jpg"],"product":[{"p":"镀锌带方管","img":"http://page-bucket.oiaqye7985.com/img/i/b1_list1.jpg"},{"p":"镀锌带圆管","img":"http://page-bucket.oiaqye7985.com/img/i/b1_list2.jpg"},{"p":"镀锌带方管","img":"http://page-bucket.oiaqye7985.com/img/i/b1_list3.jpg"},{"p":"钢管","img":"http://page-bucket.oiaqye7985.com/img/i/b1_list5.jpg"},{"p":"钢管","img":"http://page-bucket.oiaqye7985.com/img/i/b1_list5.jpg"},{"p":"钢管","img":"http://page-bucket.oiaqye7985.com/img/i/b1_list6.jpg"}],"iso":["http://page-bucket.oiaqye7985.com/img/i/abt1.jpg"],"successfulCases":[{"p":"大棚施工图","img":"http://page-bucket.oiaqye7985.com/img/i/b3_list1.jpg"},{"p":"石油管道施工图","img":"http://page-bucket.oiaqye7985.com/img/i/b3_list1.jpg"},{"p":"穿线施工图","img":"http://page-bucket.oiaqye7985.com/img/i/b3_list1.jpg"},{"p":"防腐工程","img":"http://page-bucket.oiaqye7985.com/img/i/b3_list1.jpg"},{"p":"钢管喷漆图","img":"http://page-bucket.oiaqye7985.com/img/i/b3_list1.jpg"},{"p":"天然气管道施工图","img":"http://page-bucket.oiaqye7985.com/img/i/b3_list1.jpg"}],"advantage":[{"p":"库存充足、保证货期","img":"http://page-bucket.oiaqye7985.com/img/i/b2_list1.jpg","h1":"强大的生产实力","li":["热镀锌带圆管、方管是主导产品，年产量达45万吨;","直缝焊管、热镀锌管、螺旋焊管等产品年销量达65万吨;","产品广泛应用于水暖、大棚、穿线、石油、天然气等;"]},{"p":"保证出厂合格率100%","img":"http://page-bucket.oiaqye7985.com/img/i/b2_list2.jpg","h1":"完善的检测管理体系","li":["公司总资产2亿元，多名资深的检测人员把控；;","完整的物理和化学性能分析检测并出具相关的检测报告；","保证了热镀锌带管从原料入库到成品出库各个环节安全可靠。"]},{"p":"是众多客户选择兆利达的理由","img":"http://page-bucket.oiaqye7985.com/img/i/b3_list3.jpg","h1":"客户至上”的服务理念和行动","li":["只做精品--不接受不良品、不制造不良品、不放行不良品","是多项国家重点工程定点供应单位和多家大型钢铁公司一级经销商 同澳大利亚、加拿大、南美、中东等国家建立贸易关系，构筑起牢 固的世界性经营格局。;"]}],"banner":["http://page-bucket.oiaqye7985.com/img/i/banner.jpg"],"foot":[{"img":"http://page-bucket.oiaqye7985.com/img/i/foot1.jpg"},{"img":"http://page-bucket.oiaqye7985.com/img/i/foot2.jpg"},{"img":"http://page-bucket.oiaqye7985.com/img/i/foot3.jpg"},{"img":"http://page-bucket.oiaqye7985.com/img/i/foot4.jpg"}],"headtop_txt":{"h1":"热销产品推荐","h2":"我们的优势","h3":"成功案例","h4":"荣誉资质"}},"modelType":0}}'
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
			InlineEditor.create(this.$refs.txtAll,{
				language: 'zh-cn',
				toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
			}).catch( error => {});
			
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
		 ok(){
		 	console.log(this.data)
		 },
		//内容编辑区
		bannerFile(input_file,index,maxWidth){
      		var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
		    	function(str){
		    		_this.data.banner.splice(index,1,str)
		    })
    		input_file.value=''
      	},
      	bannerDel(index){
      		this.data.banner.splice(index,1)
	    },
	    addbanner(){
	      	this.data.banner.push("http://page-bucket.oiaqye7985.com/img/i/banner.jpg")
	    },
	    productFile(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    		_this.data.product[index].img=str
	    	})
    		input_file.value=''
		},
		productDel(index){
			this.data.product.splice(index,1)
		},
		productAdd(){
			this.data.product.push({img:"http://page-bucket.oiaqye7985.com/img/i/b1_list1.jpg",p:"镀锌带方管"})
		},
		isoFile(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
		    	function(str){
		    		_this.data.iso.splice(index,1,str)
		    })
    		input_file.value=''
		},
		isoDel(index){
			this.data.iso.splice(index,1)
		},
		addabt1(){
			this.data.iso.push("http://page-bucket.oiaqye7985.com/img/i/abt1.jpg")
		},
		advantageFile(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
		    	function(str){
		    	_this.data.advantage[index].img=str	
		    })
    		input_file.value=''
		},
		advantageDel(index){
			this.data.advantage.splice(index,1)
		},
		titleLlist(txt){
	      	txt.li.push("完整的物理和化学性能分析检测并出具相关的检测报告； ")
	    },
		tokedit(txt,index){
	      	txt.li.splice(index,1)
	    },
		advantageAdd(){
			this.data.advantage.push(
				{h1:"强大的生产实力",p:"库存充足、保证货期",li:["热镀锌带圆管、方管是主导产品，年产量达45万吨;",
				"直缝焊管、热镀锌管、螺旋焊管等产品年销量达65万吨;",	"产品广泛应用于水暖、大棚、穿线、石油、天然气等;", ],
				img:"http://page-bucket.oiaqye7985.com/img/i/b2_list1.jpg",},
			)
		},
		steelFile(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
		    	function(str){
		    		_this.data.steel.splice(index,1,str)
		    })
    		input_file.value=''
		},
		steeloDel(index){
			this.data.steel.splice(index,1)
		},
		addabt2(){
			this.data.steel.push("http://page-bucket.oiaqye7985.com/img/i/abt2.jpg")
		},
		fulCasesFile(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
		    	function(str){
		    	_this.data.successfulCases[index].img=str	
		    })
    		input_file.value=''
		},
		fulCasesDel(index){
			this.data.successfulCases.splice(index,1)
		},
		fulCasesAdd(){
			this.data.successfulCases.push({img:"http://page-bucket.oiaqye7985.com/img/i/b3_list1.jpg",p:"大棚施工图"},)
		},
		footFile(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    		_this.data.foot[index].img=str
	    	})
    		input_file.value=''
		},
		footDel(index){
			this.data.foot.splice(index,1)
		},
		footAdd(){
			this.ALLfoot=true
			this.data.foot.push({img:"http://page-bucket.oiaqye7985.com/img/i/foot1.jpg"})
		},
		footalldel(){
			this.ALLfoot=false
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
	.clickA{display: inline-block;}
	.b1_list ul p input {
    width: 100px;
}
ul{
	list-style: none;
	padding: 0;
	margin: 0;
}
.title_Top input {
width: 200px;
text-align: center;
}
.pageWrapper_box input {
    border: 1px solid #ccc;
}
.title_Top {
  text-align: center;
  background: url(http://page-bucket.oiaqye7985.com/img/i/title_top.jpg) no-repeat;
  width: 784px;
  height: 35px;
  font-weight: 500;
  text-align: center;
  font-size: 32px;
  color: #303030;
  line-height: 35px;
  margin: 80px auto 50px; }

.b1_list ul {
  min-height: 380px;
  text-align: center; }
  .b1_list ul input{text-align: center;}
  .b1_list ul p {
    padding: 15px 0;
    font-size: 20px;
    color: #555555; }
    .b1_list ul  p>i {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: #1994ff;
      border-radius: 50%; }
    .b1_list>ul>p>span {
      margin: 0 20px; }

.b2_list .b2_listUL {
  padding: 0 50px;
  margin-left: 20px; }
  .b2_list .b2_listUL .b2_listUL_top {
   width: 400px;
    height: 125px;
    background: url(http://page-bucket.oiaqye7985.com/img/i/bb2_bg.jpg) no-repeat;
    background-position: 50% 0;
    text-align: left;
    margin-bottom: 40px;
    padding-top: 10px;
    text-align: center;
    
    }
    .b2_list .b2_listUL .b2_listUL_top h1 {
     font-size: 28px;
    color: #303030; }
    .b2_list .b2_listUL .b2_listUL_top p {
      font-size: 14px;
      color: #ff0006;
     }
  .b2_list .b2_listUL ul {
  	text-align: left;
    font-size: 16px;
    color: #555555; }
    .b2_list .b2_listUL ul li {
      margin-bottom: 20px;
      list-style-image: url(http://page-bucket.oiaqye7985.com/img/i/xing.jpg);
       }
.b2_list .b2_listB {
  margin-bottom: 30px; }

.b3_list ul {
min-height: 300px;
  text-align: center; }
  .b3_list ul input{text-align: center;}
  .b3_list ul p {
    padding: 15px 0;
    font-size: 20px;
    color: #555555; }
    .b3_list  ul>li>p>i {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: #1994ff;
      border-radius: 50%; }
    .b3_list>ul>li>p>span {
      margin: 0 20px; }

.foot {
  background: #2799f6;
  padding: 40px 0 50px; }
  .foot p {
    padding: 0 20px; }
  .foot .foot_abt {
    margin-top: 30px; }
    .foot .foot_abt > button {
      background: #fff;
      color: #2799f6;
      border-color: #fff; }

@media (max-width: 800px) {
  .head {
    background: #f1f2f4;
    padding: 20px 0;
    text-align: center; }
    .head ul {
      font-size: 20px;
      color: #303030;
      padding-left: 0px; }

  .b2_list .b2_listUL .b2_listUL_top {
    width: 100%;
    text-align: right; }
    .b2_list .b2_listUL .b2_listUL_top h1 {
      font-size: 16px;
      padding: 30px 0 0 0px; }
    .b2_list .b2_listUL .b2_listUL_top p {
      font-size: 14px;
      padding: 0; }

  .title_Top {
    text-align: center;
    background: url(http://page-bucket.oiaqye7985.com/img/i/title_top.jpg) no-repeat;
    background-position: 50% 50%;
    width: 100%;
    height: 35px;
    text-align: center;
    font-size: 32px;
    color: #303030;
    line-height: 35px;
    margin: 80px auto 50px; } }	

</style>