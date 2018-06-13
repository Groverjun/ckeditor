<template>
	<div>
		<el-select v-model="value" placeholder="请选择" @change="valFun">
	    <el-option
	      v-for="item in options"
	      :key="item.value"
	      :label="item.label"
	      :value="item.value">
	    </el-option>
	  </el-select>
	  <div id="myChart" :style="{width: '1000px', height: '300px'}"></div>
	</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      month:["1月","2月","3月","4月","5月","6月"],
      dataAll:[5, 20, 36, 10, 10, 20],
      options: [{
	    value: 1,
	    label: '在线推广客服数'
	  },{
	    value: 2,
	    label: '点击数'
	  }],
	  value: 2,
	  mark:'在线推广客服数'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
  	valFun(val){
		if(val==1){
			this.mark='在线推广客服数'
	  		this.dataAll=[50, 200, 360, 100, 1000, 200]
	  		this.drawLine();
		}else if(val==2){
			this.mark='点击数'
			this.dataAll=[5, 20, 36, 10, 10, 20];
		 	this.drawLine();
		}
		this.value=val
  	},
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart=null
        var value=this.mark
        myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            tooltip: {
            	trigger: 'item',
            	 formatter: function (params,ticket,callback){
	                return params.name+value+params.value;
	            },
            },
            xAxis: {
            	type: 'category',
		        boundaryGap: true,
		        offset:0,
		        axisTick:{show: false,},
		        nameTextStyle:{
		        	padding: [0, 0, 0, 0]
		        },
		        axisLine:{
		            lineStyle:{
		                color:'#647c9d',
		                width:1,
		            }
		        } ,
                data: this.month
            },
            yAxis: {
			    	name:"",
		            type : 'value',
		            axisTick:{show: false},
		            offset:2,
		            splitLine:{
		            	show: true,
		            	lineStyle: {
		            		type:"double",
					        color: ['#eee']
					    }
		            },
		            axisLine:{
		                lineStyle:{
		                    color:'#647c9d',
		                     width:1,
		                }
		            } ,
		            axisLabel:{formatter:  function (value, index) {
		            	var val=value+''
		            	return value
					}}
            },
            series: [
	            {
	                name: '在线推广客户数',
	                type: 'bar',
	                data: this.dataAll,
	                barWidth : 30,
	                itemStyle: {
	                	 normal: {
	                	 	 color: new this.$echarts.graphic.LinearGradient(
			                        0, 0, 0, 1,
			                        [
			                            {offset: 0, color: '#83bff6'},
			                            {offset: 0.5, color: '#188df0'},
			                            {offset: 1, color: '#188df0'}
			                        ]
			                    )
	                	 },
	                	  emphasis: {
			                    color: new this.$echarts.graphic.LinearGradient(
			                        0, 0, 0, 1,
			                        [
			                            {offset: 0, color: '#2378f7'},
			                            {offset: 0.7, color: '#2378f7'},
			                            {offset: 1, color: '#83bff6'}
			                        ]
			                    )
			                }
		            },
	            }
            ],
	        label: {
		        show: true,
		        position: 'top',
		        color: '#000',
		        formatter:function(val,index){
		        	return val.data
		        }
			}

        });
    }
  }
}
</script>

<style>
</style>