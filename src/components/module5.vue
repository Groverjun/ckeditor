<template>
	<div>
		<div class="banner MaskHover" v-for="(item,index) in data.banner">
			<a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
			<img v-bind:src="item" width="100%"/>
			</a>
			<div class="MaskBox" v-if="delNode">
				<p>上传图片的宽为1920PX</p>
				<p>
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
						<i class="el-icon-upload"></i><span>上传</span>
						<input type="file" v-on:change="banner($refs.module5banner[index],index,1920)" ref="module5banner"/>
					</a>
					<a href="javascript:void(0)" type="button" class="el-button el-button--danger"@click="bannerDel(index)">
						<i class="el-icon-delete"></i><span>删除</span>
					</a>
				</p>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addbanner">
				<i class="el-icon-edit"></i><span>添加一张banner</span>
			</a>
		</div>
		<!---->
		<div class="productCenter">
			<div class="container">
				<div class="row" >
					<div class="col-lg-2" id="left">
						<div class="product_left" >
							<dl>
								<dt>
									+
									<span v-if="!delNode">{{data.productCenterLeft.dt}}</span>
									<input class="INputAll" type="text" v-if="delNode" v-model="data.productCenterLeft.dt"/>
									+
								</dt>
								<dd v-for="(item,index) in data.productCenterLeft.dd">
									<a href="javascript:void(0)" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
										<span v-if="!delNode">{{item}}</span>
										<input class="INputAll" type="text" v-if="delNode" v-model="data.productCenterLeft.dd[index]"/>
										<i class="pull-right"></i>
									</a>
								</dd>
							</dl>
							<div class="MaskHover">
								<a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
								<img v-bind:src="data.productCenterLeft.img" width="100%"/>
								</a>
								<div class="MaskBox" v-if="delNode">
									<p>上传图片的宽为200PX</p>
									<p>
										<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
											<i class="el-icon-upload"></i><span>上传</span>
											<input type="file" v-on:change="productLeft($refs.module5productLeft,200)" ref="module5productLeft"/>
										</a>
										<a href="javascript:void(0)" type="button" class="el-button el-button--danger"@click="productLeftDel">
											<i class="el-icon-delete"></i><span>删除</span>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					<!---->
					<div class="col-lg-10">
						<div class="product_right">
							<div class="row">
								<div class="col-md-12">
									<h2>
										<span v-if="!delNode">{{data.productCenterRight.h2}}</span>
										<input class="INputAll" type="text" v-if="delNode" v-model="data.productCenterRight.h2"/>
									</h2>
								</div>
							</div>
							<div class="row">
								<div class="col-md-4" v-for="(item,index) in data.productCenterRight.ul">
									<ul>
										<li class="MaskHover">
											<a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
											<img v-bind:src="item.img"/>
											</a>
											<div class="MaskBox" v-if="delNode">
												<p>上传图片的宽为300PX</p>
												<p>
													<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
														<i class="el-icon-upload"></i><span>上传</span>
														<input type="file" v-on:change="productCenterRight($refs.module5productCenterRight[index],index,300)" ref="module5productCenterRight"/>
													</a>
													<a href="javascript:void(0)" type="button" class="el-button el-button--danger"@click="productRightDel(index)">
														<i class="el-icon-delete"></i><span>删除</span>
													</a>
												</p>
											</div>
										</li>
										<li>
											<p>-
												<span v-if="!delNode">{{item.p}}</span>
												<input class="INputAll text-center" type="text" v-if="delNode" v-model="item.p"/>
												-
											</p>
										</li>
									</ul>
								</div>
							</div>
							<div class="addNode" v-if="delNode">
								<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addproductRightr">
									<i class="el-icon-edit"></i><span>添加一张banner</span>
								</a>
							</div>
							<!---->
						</div>
					</div>
				</div>
			</div>
		</div>
		<!---->
		<div class="advantage">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="advantage_top text-center">
							<span class="one">
								<span v-if="!delNode">{{data.advantage.Topspan}}</span>
								<input class="INputAll text-center" type="text" v-if="delNode" v-model="data.advantage.Topspan"/>
							</span>
							<span class="tow">
								<i style="">
									<span v-if="!delNode">{{data.advantage.Topi}}</span>
									<input class="INputAll text-center" type="text" v-if="delNode" v-model="data.advantage.Topi"/>
								</i>
								<em>
									<span v-if="!delNode">{{data.advantage.Topem}}</span>
									<input class="INputAll text-center" type="text" v-if="delNode" v-model="data.advantage.Topem"/>
								</em>
							</span>
						</div>
					</div>
				</div>
				<div class="row"  v-for="(item,index) in data.advantage.list">
					<div class="col-md-6" :style="calcStyle(index)">
						<div class="clearfix list" v-for="(item2,index) in item.ul">
							<div class="left pull-left">
								<p>
									<span v-if="!delNode">{{item2.index}}</span>
									<input class="INputAll text-center" type="text" v-if="delNode" v-model="item2.index"/>
								</p>
							</div>
							
							<div class="right pull-left">
								<h3>
									<span v-if="!delNode">{{item2.h2}}</span>
									<input class="INputAll text-center" type="text" v-if="delNode" v-model="item2.h2"/>
								</h3>
								<h4>
									<span v-if="!delNode">{{item2.h3}}</span>
									<input class="INputAll text-center" type="text" v-if="delNode" v-model="item2.h3"/>
								</h4>
								<p>
									<span v-if="!delNode">{{item2.p}}</span>
									<!--<textarea cols="40" class="INputAll text-left" type="text" v-if="delNode" v-model="item2.p"></textarea>-->
									<div contenteditable="true" @input="text($refs.txt[index],index,)" ref="txt">{{item2.p}}</div>
								</p>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div  class="MaskHover">
							<a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A"><img  v-bind:src="item.img" width="100%"/></a>
							<div class="MaskBox" v-if="delNode">
								<p>上传图片的宽为550PX</p>
								<p>
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
										<i class="el-icon-upload"></i><span>上传</span>
										<input type="file" v-on:change="advantage($refs.module5advantage[index],index,550)" ref="module5advantage"/>
									</a>
									<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="advantageDel(index)">
										<i class="el-icon-delete"></i><span>删除</span>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="addNode" v-if="delNode">
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addadvantage">
						<i class="el-icon-edit"></i><span>添加一行优势</span>
					</a>
				</div>
			</div>
		</div>
		<!---->
		<div class="abt1 MaskHover" v-for="(item,index) in data.abt1">
			<a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
			<img v-bind:src="item" width="100%"/>
			</a>
			<div class="MaskBox" v-if="delNode">
				<p>上传图片的宽为550PX</p>
				<p>
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
						<i class="el-icon-upload"></i><span>上传</span>
						<input type="file" v-on:change="abt1($refs.module5abt1[index],index,1920)" ref="module5abt1"/>
					</a>
					<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="abt1Del(index)">
						<i class="el-icon-delete"></i><span>删除</span>
					</a>
				</p>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addabt1">
				<i class="el-icon-edit"></i><span>添加一行横屏banner</span>
			</a>
		</div>
		<!---->
		<div class="case">
			<div class="container">
				<div class="row">
					<div class="top">
						<h1>
							<span v-if="!delNode">{{data.Case.h1}}</span>
							<input class="INputAll text-center" type="text" v-if="delNode" v-model="data.Case.h1"/>
							<i></i>
						</h1>
					</div>
				</div>
				<div class="row">
					<div class="col-md-3" v-for="(item,index) in data.Case.ul">
						<ul class="case_ul">
							<li class="MaskHover">
								<img v-bind:src="item.img" width="100%"/>
								<div class="MaskBox" v-if="delNode">
									<p>上传图片的宽为260PX</p>
									<p>
										<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
											<i class="el-icon-upload"></i><span>上传</span>
											<input type="file"v-on:change="caseUl($refs.module5caseUl[index],index,260)" ref="module5caseUl"/>
										</a>
										<a href="javascript:void(0)" type="button" class="el-button el-button--danger"  @click="caseUlDel(index)">>
											<i class="el-icon-delete"></i><span>删除</span>
										</a>
									</p>
								</div>
							</li>
							<li>
								<p>
									-
									<span v-if="!delNode">{{item.p}}</span>
									<input class="INputAll text-center" type="text" v-if="delNode" v-model="item.p"/>
									-
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="addNode" v-if="delNode">
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addcaseUl">
						<i class="el-icon-edit"></i><span>添加一行成功案例</span>
					</a>
				</div>
			</div>
		</div>
		<!---->
		<div class="Reason">
			<div class="container">
				<div class="row">
					<div class="top">
						<h1>
							<span v-if="!delNode">{{data.Reason.h1}}</span>
							<input class="INputAll text-center" type="text" v-if="delNode" v-model="data.Reason.h1"/>
							<i></i>
						</h1>
					</div>
				</div>
				<div class="ReasonBox clearfix">
					<div class="ReasonBox_list clearfix"  v-for="(item,index) in data.Reason.ul">
						<div class="left pull-left">
							<p>0{{index+1}}</p>
							<span>/</span>
						</div>
						<div class="right pull-right">
							<div class="p">
								<div class="MaskHover" style="justify-content: flex-start;align-items: flex-start;padding: 0;height: 120px;background: rgba(0,0,0,0.5);">
								<img v-bind:src="item.img"/>
								<div class="MaskBox" v-if="delNode">
									<p>上传图片的宽为280PX</p>
									<p>
										<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
											<i class="el-icon-upload"></i><span>上传</span>
											<input type="file" v-on:change="Reason($refs.module5Reason[index],index,280)" ref="module5Reason"/>
										</a>
										<a href="javascript:void(0)" type="button" class="el-button el-button--danger"  @click="ReasonDel(index)">
											<i class="el-icon-delete"></i><span>删除</span>
										</a>
									</p>
								</div>
								</div>
							</div> 
							<div class="txt">
								<span v-if="!delNode">{{item.p}}</span>
								<input class="INputAll text-center" type="text" v-if="delNode" v-model="item.p"/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="addNode" v-if="delNode">
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary"  @click="Reasonadd">
						<i class="el-icon-edit"></i><span>添加一个理由</span>
					</a>
			</div>
		</div>
		<!---->
		<div class="enterprise">
			<div class="container">
				<div class="row" v-for="(item,index) in data.enterprise.ul">
					<div class="col-md-6" :style="calcStyle(index)">
						<div class="MaskHover">
							<img v-bind:src="item.img" width="100%"/>
							<div class="MaskBox" v-if="delNode">
									<p>上传图片的宽为550PX</p>
									<p>
										<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
											<i class="el-icon-upload"></i><span>上传</span>
											<input type="file"v-on:change="enterprise($refs.module5enterprise[index],index,550)" ref="module5enterprise"/>
										</a>
										<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="enterpriseDel(index)">
											<i class="el-icon-delete"></i><span>删除</span>
										</a>
									</p>
							</div>
						</div>
					</div>
					<div class="col-md-6 chanpinList">
						<div class="Listtop">
							<h1>
								<span v-if="!delNode">{{item.h1}}</span>
								<input class="INputAll" type="text" v-if="delNode" v-model="item.h1"/>
								<i></i>
							</h1>
						</div>
						<ul>
							<li v-for="(item2,index) in item.list">
								<span v-if="!delNode">{{item2}}</span>
								<textarea class="INputAll " cols="40" type="text" v-if="delNode" v-model="item.list[index]"></textarea>
								
								<a href="javascript:void(0)" @click="titleLlist(item.list,index)" type="button" class="el-button el-button--danger is-circle deleteAll">
									<i class="el-icon-delete"></i>
								</a>
							</li>
						</ul>
						<div class="addNode" v-if="delNode">
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary"@click="addtitleLlist(item.list)">
								<i class="el-icon-edit"></i><span>添加一行</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!---->
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary"@click="addenterprise">
				<i class="el-icon-edit"></i><span>添加一行企业介绍</span>
			</a>
		</div>
		<!---->
		<div class="abt1 MaskHover" v-for="(item,index) in data.abt2">
			<a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
			<img v-bind:src="item" width="100%"/>
			</a>
			<div class="MaskBox" v-if="delNode">
				<p>上传图片的宽为1920PX</p>
				<p>
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
						<i class="el-icon-upload"></i><span>上传</span>
						<input type="file"v-on:change="abt2($refs.module5abt2[index],index,1920)" ref="module5abt2"/>
					</a>
					<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="abt2Del(index)">
						<i class="el-icon-delete"></i><span>删除</span>
					</a>
				</p>
			</div>
		</div>	
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary"@click="addabt2">
				<i class="el-icon-edit"></i><span>添加一行横屏banner</span>
			</a>
		</div>
	</div>
</template>

<script>
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
var data='{"status":200,"msg":"OK","data":{"paramMob":{"abt2":["http://page-bucket.oiaqye7985.com/land-page/images/module5/abt2.jpg"],"productCenterRight":{"ul":[{"p":"罗茨风机","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list1.jpg"},{"p":"罗茨风机","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list1.jpg"},{"p":"罗茨风机","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list1.jpg"},{"p":"罗茨风机","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list1.jpg"},{"p":"罗茨风机","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list1.jpg"},{"p":"罗茨风机","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list1.jpg"}],"h2":"热门产品推荐"},"abt1":["http://page-bucket.oiaqye7985.com/land-page/images/module5/abt1.jpg"],"advantage":{"Topi":"引持环保","Topspan":"四大优势","list":[{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list3.jpg","ul":[{"p":"拥有自己的设计团队,技术设计,设备选型,设备制造,安装,调试,售后服务等全套工程总承包技术服务","index":"01","h2":"[完善的检测管理体系]","h3":"保证所生产产品设备技术新颖可靠"},{"p":"拥有自己的设计团队,技术设计,设备选型,设备制造,安装,调试,售后服务等全套工程总承包技术服务","index":"02","h2":"[完善的检测管理体系]","h3":"保证所生产产品设备技术新颖可靠"}]},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list3.jpg","ul":[{"p":"拥有自己的设计团队,技术设计,设备选型,设备制造,安装,调试,售后服务等全套工程总承包技术服务","index":"03","h2":"[完善的检测管理体系]","h3":"保证所生产产品设备技术新颖可靠"},{"p":"拥有自己的设计团队,技术设计,设备选型,设备制造,安装,调试,售后服务等全套工程总承包技术服务","index":"04","h2":"[完善的检测管理体系]","h3":"保证所生产产品设备技术新颖可靠"}]}],"Topem":"最专业的物料运输专家"},"enterprise":{"ul":[{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/g1.jpg","h1":"产品特点","list":["产品质量通过ISO9001质量认证"]}],"h1":"产品特点"},"banner":["http://page-bucket.oiaqye7985.com/land-page/images/module5/banner.jpg"],"productCenterLeft":{"dt":"产品中心","dd":["罗茨风机","罗茨风机","罗茨风机","罗茨风机","罗茨风机","罗茨风机","罗茨风机","罗茨风机"],"img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list_left.jpg"},"Reason":{"ul":[{"p":"产品质量通过ISO9001质量认证","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/f_list1.jpg"},{"p":"产品质量通过ISO9001质量认证","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/f_list2.jpg"},{"p":"产品质量通过ISO9001质量认证","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/f_list3.jpg"},{"p":"产品质量通过ISO9001质量认证","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/f_list4.jpg"},{"p":"产品质量通过ISO9001质量认证","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/f_list4.jpg"}],"h1":"选择我们的五大理由"},"Case":{"ul":[{"p":"华润雪花啤酒罗茨风机及隔音罩","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list4.jpg"},{"p":"华润雪花啤酒罗茨风机及隔音罩","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list4.jpg"},{"p":"华润雪花啤酒罗茨风机及隔音罩","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list4.jpg"},{"p":"华润雪花啤酒罗茨风机及隔音罩","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list4.jpg"}],"h1":"成功案例"}},"paramPC":{"abt2":["http://page-bucket.oiaqye7985.com/land-page/images/module5/abt2.jpg"],"productCenterRight":{"ul":[{"p":"罗茨风机","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list1.jpg"},{"p":"罗茨风机","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list1.jpg"},{"p":"罗茨风机","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list1.jpg"},{"p":"罗茨风机","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list1.jpg"},{"p":"罗茨风机","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list1.jpg"},{"p":"罗茨风机","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list1.jpg"}],"h2":"热门产品推荐"},"abt1":["http://page-bucket.oiaqye7985.com/land-page/images/module5/abt1.jpg"],"advantage":{"Topi":"引持环保","Topspan":"四大优势","list":[{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list3.jpg","ul":[{"p":"拥有自己的设计团队,技术设计,设备选型,设备制造,安装,调试,售后服务等全套工程总承包技术服务","index":"01","h2":"[完善的检测管理体系]","h3":"保证所生产产品设备技术新颖可靠"},{"p":"拥有自己的设计团队,技术设计,设备选型,设备制造,安装,调试,售后服务等全套工程总承包技术服务","index":"02","h2":"[完善的检测管理体系]","h3":"保证所生产产品设备技术新颖可靠"}]},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list3.jpg","ul":[{"p":"拥有自己的设计团队,技术设计,设备选型,设备制造,安装,调试,售后服务等全套工程总承包技术服务","index":"03","h2":"[完善的检测管理体系]","h3":"保证所生产产品设备技术新颖可靠"},{"p":"拥有自己的设计团队,技术设计,设备选型,设备制造,安装,调试,售后服务等全套工程总承包技术服务","index":"04","h2":"[完善的检测管理体系]","h3":"保证所生产产品设备技术新颖可靠"}]}],"Topem":"最专业的物料运输专家"},"enterprise":{"ul":[{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/g1.jpg","h1":"产品特点","list":["产品质量通过ISO9001质量认证"]}],"h1":"产品特点"},"banner":["http://page-bucket.oiaqye7985.com/land-page/images/module5/banner.jpg"],"productCenterLeft":{"dt":"产品中心","dd":["罗茨风机","罗茨风机","罗茨风机","罗茨风机","罗茨风机","罗茨风机","罗茨风机","罗茨风机"],"img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list_left.jpg"},"Reason":{"ul":[{"p":"产品质量通过ISO9001质量认证","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/f_list1.jpg"},{"p":"产品质量通过ISO9001质量认证","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/f_list2.jpg"},{"p":"产品质量通过ISO9001质量认证","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/f_list3.jpg"},{"p":"产品质量通过ISO9001质量认证","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/f_list4.jpg"},{"p":"产品质量通过ISO9001质量认证","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/f_list4.jpg"}],"h1":"选择我们的五大理由"},"Case":{"ul":[{"p":"华润雪花啤酒罗茨风机及隔音罩","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list4.jpg"},{"p":"华润雪花啤酒罗茨风机及隔音罩","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list4.jpg"},{"p":"华润雪花啤酒罗茨风机及隔音罩","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list4.jpg"},{"p":"华润雪花啤酒罗茨风机及隔音罩","img":"http://page-bucket.oiaqye7985.com/land-page/images/module5/list4.jpg"}],"h1":"成功案例"}},"modelType":0}}'
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
	},
	mounted(){
			
			
	},
	updated(){
	},
	methods:{
		text(){
			console.log(0)
		},
		calcStyle(index) {
	        var style = {}
	        if (index % 2 !== 0) {
	            style = {float: 'right'}
	        }
	        return style
		 },
		//内容编辑区
		titleLlist(txt,index){
			txt.splice(index,1)
		},
		addtitleLlist(txt){
			txt.push("保证所生产产品设备技术新颖可靠")
		},
		banner(input_file,index,maxWidth){
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
			this.data.banner.push("http://page-bucket.oiaqye7985.com/land-page/images/module5/banner.jpg")
		},
		productLeft(input_file,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.productCenterLeft.img=str
	    	})
    		input_file.value=''
		},
		productLeftDel(){
			this.data.productCenterLeft.img=null
		},
		productCenterRight(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.productCenterRight.ul[index].img=str
	    	})
    		input_file.value=''
		},
		productRightDel(index){
			this.data.productCenterRight.ul.splice(index,1)
		},
		addproductRightr(){
			this.data.productCenterRight.ul.push(
				{img:"http://page-bucket.oiaqye7985.com/land-page/images/module5/list1.jpg",p:"罗茨风机"}
			)
		},
		advantage(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.advantage.list[index].img=str
	    	})
    		input_file.value=''
		},
		advantageDel(index){
			this.data.advantage.list.splice(index,1)
		},
		addadvantage(){
			this.data.advantage.list.push(
				{
					ul:[
							{
								index:"01",
								h2:"[完善的检测管理体系]",
								h3:"保证所生产产品设备技术新颖可靠",
								p:"拥有自己的设计团队,技术设计,设备选型,设备制造,安装,调试,售后服务等全套工程总承包技术服务"
							},
							{
								index:"02",
								h2:"[完善的检测管理体系]",
								h3:"保证所生产产品设备技术新颖可靠",
								p:"     拥有自己的设计团队,技术设计,设备选型,设备制造,安装,调试,售后服务等全套工程总承包技术服务"
							}
					],
					img:"http://page-bucket.oiaqye7985.com/land-page/images/module5/list3.jpg",
				},
			)
		},
		abt1(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.abt1.splice(index,1,str)
	    	})
    		input_file.value=''
		},
		abt1Del(index){
			this.data.abt1.splice(index,1)
		},
		addabt1(){
			this.data.abt1.push("http://page-bucket.oiaqye7985.com/land-page/images/module5/abt1.jpg")
		},
		abt2(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.abt2.splice(index,1,str)
	    	})
    		input_file.value=''
		},
		abt2Del(index){
			this.data.abt2.splice(index,1)
		},
		addabt2(){
			this.data.abt2.push("http://page-bucket.oiaqye7985.com/land-page/images/module5/abt2.jpg")
		},
		caseUl(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.Case.ul[index].img=str
	    	})
    		input_file.value=''
		},
		caseUlDel(index){
			this.data.Case.ul.splice(index,1)
		},
		addcaseUl(){
			this.data.Case.ul.push({
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module5/list4.jpg",
				p:"华润雪花啤酒罗茨风机及隔音罩"
			})
		},
		Reason(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.Reason.ul[index].img=str
	    	})
    		input_file.value=''
		},
		ReasonDel(index){
			this.data.Reason.ul.splice(index,1)
		},
		Reasonadd(){
			this.data.Reason.ul.push({
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module5/f_list1.jpg",
				p:"产品质量通过ISO9001质量认证"
			})
		},
		enterprise(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.enterprise.ul[index].img=str
	    	})
    		input_file.value=''
		},
		enterpriseDel(index){
			this.data.enterprise.ul.splice(index,1)
		},
		addenterprise(){
			this.data.enterprise.ul.push({
				h1:"产品介绍",
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module5/g1.jpg",
				list:[
					"华润雪花啤酒罗茨风机及隔音罩"
				]
			})
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
.module5{
		background: #fff;
		padding-top: 60px;
}
.Listtop{
  font-size: 34px;
  color: #666666;
  font-weight: bold;
  margin:0  0 10px 0; 
}
.Listtop i {
    display: block;
    width: 50px;
    margin: 10px 0;
    border-bottom: 1px solid #666666; }
.module5 ul,li{
	margin: 0;
	padding: 0;
	list-style: none;
}
*{padding: 0;margin: 0;}
.productCenter {
  margin-top: 40px; }
    .productCenter .product_left input{
    	width: 150px;
    	text-align: center;
    }
  .productCenter .product_left dl {
    text-align: center; }
    .productCenter .product_left dl dt {
      padding: 30px 0;
      background: #0067dc;
      color: #fff;
      margin-bottom: 10px; }
    .productCenter .product_left dl dd {
      background: #eee;
      padding: 5px 5px 10px;
      text-align: left; }
      .productCenter .product_left dl dd a {
        display: block;
        width: 100%;
        padding: 10px 5px;
        background: #fff;
        text-decoration: none;
        color: #999; }
        .productCenter .product_left dl dd a > i {
          display: inline-block;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-left-color: #eee;
          position: relative;
          top: 3px; }
      .productCenter .product_left dl dd a:hover {
        color: #fff;
        background: #0067dc; }
        .productCenter .product_left dl dd a:hover i {
          border-left-color: #fff; }
    .productCenter .product_left dl dd:last-child {
      padding-bottom: 5px; }
  .productCenter .product_right h2 {
    padding: 14px 0;
    color: #666;
    font-weight: bold; }
  .productCenter .product_right ul {
    text-align: center;
    border: 1px solid #999;
    margin-bottom: 20px;
    min-height: 300px;
    text-align: center;
    color: #666; }
    .productCenter .product_right ul img {
      width: 100%; }
    .productCenter .product_right ul p {
      padding: 15px 0; }
      .productCenter .product_right ul p span {
        margin: 0 10px; }

.advantage {
  margin-bottom: 20px; }
  .advantage .advantage_top {
    margin-bottom: 50px;
    margin-top: 30px; }
     .advantage .advantage_top .one  input{
     	width: 300px;
     }
     .advantage .advantage_top .tow  input{
     	width: 150px;
     }
    .advantage .advantage_top .one {
      font-size: 50px;
      color: #0067cb;
      font-weight: bold;
      position: relative;
      top: -15px; }
    .advantage .advantage_top .tow {
      display: inline-block; }
      .advantage .advantage_top .tow i {
        display: inline-block;
        width: 100%;
        color: #fff;
        background-position: center;
        background-image: url(http://page-bucket.oiaqye7985.com/land-page/images/module5/bg.jpg);
        background-repeat: no-repeat;
        padding: 8px 0; }
      .advantage .advantage_top .tow em {
        font-size: 24px;
        color: #333; }
  .advantage .list {
    margin-bottom: 60px; }
  .advantage .left {
    margin-right: 10px; }
    .advantage .left p {
      width: 80px;
      height: 80px;
      line-height: 80px;
      display: inline-block;
      text-align: center;
      font-size: 40px;
      border: 1px solid #ccc;
      margin: 0;
      font-weight: bold;
      color: #c90400; }
      .advantage .left p input{
      	color: #c90400;
      	    width: 50px;
      }
  .advantage .right {
    width: 440px; }
    .advantage .right h3, .advantage .right h4, .advantage .right p {
      margin: 0;
      padding: 0; }
    .advantage .right h3 {
      width: 240px;
      font-size: 20px;
      color: #004fb2;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 4px double #ccc; }
    .advantage .right h4 {
      color: #333;
      font-size: 18px;
      padding: 10px 0; }
    .advantage .right p {
      white-space: pre-line;
      word-wrap: break-word;
      color: #666;
      width: 100%; }
.top {
  font-size: 35px;
  font-weight: bold;
  color: #666;
  text-align: center; }
  .top i {
    display: block;
    width: 40px;
    height: 2px;
    background: #666;
    margin: 20px auto; }

.case {
  margin-bottom: 20px; }
  .case .case_ul p {
    text-align: center;
    padding: 20px 0; }
    .case .case_ul p span {
      margin: 0 10px; }

.Reason {
  padding: 90px 0;
  background: #f6f6f6; }
  .Reason .ReasonBox {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: wrap; }
    .Reason .ReasonBox .ReasonBox_list:nth-child(2), .Reason .ReasonBox .ReasonBox_list:nth-child(5), .Reason .ReasonBox .ReasonBox_list:nth-child(8), .Reason .ReasonBox .ReasonBox_list:nth-child(11) {
      margin: 0 20px 30px; }
    .Reason .ReasonBox .ReasonBox_list {
      width: 360px;
      background: #fff;
      margin-bottom: 30px;
      float: left; }
      .Reason .ReasonBox .ReasonBox_list .left {
        color: #007AFF;
        font-weight: bold;
        font-size: 30px;
        width: 60px;
        text-align: center;}
        .Reason .ReasonBox .ReasonBox_list .left p {
          margin: 0;
          padding: 0; }
        .Reason .ReasonBox .ReasonBox_list .left span {
          width: 100%;
          font-size: 16px;
          display: inline-block;
          text-align: left;
          padding-left: 26px;
          position: relative;
          top: -10px; }
      .Reason .ReasonBox .ReasonBox_list .right .p {
        height: 100px;
        overflow: hidden;
        margin: 0;
        padding: 0; }
      .Reason .ReasonBox .ReasonBox_list .right .txt {
        padding: 20px 0;
        background: #0067DC;
        color: #fff;
        white-space: pre-line;
        word-wrap: break-word;
        text-align: center; }
.enterprise p {
    white-space: pre-line;
    word-wrap: break-word;
    line-height: 25px;
    color: #666; }
.enterprise>div>div{
	margin-top: 20px;
	margin-bottom: 20px;
}
.chanpinList ul li{
	line-height: 30px;
}
@media (max-width: 768px) {
  .Reason .ReasonBox .ReasonBox_list:nth-child(2), .Reason .ReasonBox .ReasonBox_list:nth-child(5), .Reason .ReasonBox .ReasonBox_list:nth-child(8), .Reason .ReasonBox .ReasonBox_list:nth-child(11) {
    margin: 0;}
  .advantage .right {
    width: 100%; } }
@media (min-width: 768px) {
  #left {
    padding: 0; } }
</style>