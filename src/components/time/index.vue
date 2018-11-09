<template>
<div>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value4"
      type="datetimerange"
      range-separator="至"
      format="yyyy-MM-dd HH"
      :editable="false"
      value-format="yyyy-MM-dd HH:59:59"
      start-placeholder="开始日期"
      :picker-options="pickerOptions2"
      @change="aa"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        value4: [new Date(), new Date()],
    	pickerOptions2: {
			disabledDate(time) {
				return time.getTime() > Date.now(); 这里就是设置当天后的日期不能被点击
			},
		},
      };
    },
    methods:{
    	aa(val){
    		console.log(val)
    	}
    }
  };
</script>