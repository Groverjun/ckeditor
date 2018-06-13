<template>
	<div>
		  <el-select
		    v-model="value11"
		    multiple
		    collapse-tags
		    style="margin-left: 20px;"
		    placeholder="页面名称1">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select><br />
		  	<el-select
		    v-model="value12"
		    multiple
		    collapse-tags
		    style="margin-left: 20px;"
		    placeholder="页面名称2">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select><br />
		  	<el-select
		    v-model="value13"
		    multiple
		    collapse-tags
		    style="margin-left: 20px;"
		    placeholder="页面名称3">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select><br />
	</div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '页面名称'
        }, {
          value: '选项2',
          label: '投放词名称1'
        }, {
          value: '选项3',
          label: '投放词名称2'
        }, {
          value: '选项4',
          label: '投放词名称3'
        }, {
          value: '选项5',
          label: '投放词名称4'
        }],
        value5: [],
        value11: [],
        value12: [],
        value13: [],
      };
    },

    methods: {

    }
  };
</script>

<style>
</style>