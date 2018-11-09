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
	  <div id="myChart" :style="{width: '100%', height: '600px'}"></div>
	</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      options: [{
	    value: 1,
	    label: '在线推广客服数'
	  },{
	    value: 2,
	    label: '点击数'
	  }],
	  value: 2,
	  mark:'在线推广客服数',
	  click:[],
	  user:[],
	  time:[],
    }
  },
  mounted(){
   this.dataFunction()
  },
  methods: {
  	dataFunction(){
  		var data=JSON.parse(this.GLOBAL.json)
    	var migdata=data.migdata;
  		for(let i in migdata){
  			this.user.push(migdata[i].account)
    		this.time.push(migdata[i].month)
  			this.click.push({
	  				name:migdata[i].account,
		            type:'line',
		            smooth: true,
		            data:migdata[i].buscost
  				}
  			)//点击数
  		}
  		console.log(migdata)
  		this.time=this.time[0]
  		this.drawLine()
  	},
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
    dedupe(array){
		 return Array.from(new Set(array));
	},
    filterDate(input){
  		var d = new Date(input);
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
        return year+'/'+ month+'.'+day
  	},
    drawLine(){
        let myChart=null
        var value=this.mark
        myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
        	color:['#6699ff', '#f8bb63', '#33cc99', '#cc3366', '#c077db','#f4663a','#2EC7C9','#29acff','#11bef6','#114cf6'],
		     tooltip: {
			    trigger: 'axis'
            },
		    legend: {
		    	type:'plain',
		    	bottom:'0',
		    	itemGap:30,
		        itemHeight:12,
		        itemWidth:18,
		        data:this.user
		    },
		    grid: {
		        left: '1%',
		        right: '4%',
		        bottom: '20%',
		        containLabel: true
		    },
		    xAxis: {
            	type: 'category',
		        boundaryGap: false,
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
                data:this.time
            },
            dataZoom: [{
		        type: 'inside',
		        start: 0,
		        end: 10
		    }, {
		        start: 0,
		        end: 10,
		        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
		        handleSize: '80%',
		        handleStyle: {
		            color: '#fff',
		            shadowBlur: 3,
		            shadowColor: 'rgba(0, 0, 0, 0.6)',
		            shadowOffsetX: 2,
		            shadowOffsetY: 2
		        }
		    }],
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
		    series: this.click
        });
    }
  }
}
</script>

<style>
</style>