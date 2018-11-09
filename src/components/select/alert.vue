<template>
  <div>
  		<el-button type="text" @click="open2" >点击打开 Message Box</el-button>
  		 <div id="appT" v-drag>       <!--实现用指令形式实现拖拽效果-->
        
    </div>
  </div>
</template>

<script>
  export default {
  	data(){
  		return{
			ifmessage:true
		}
  	},
    methods: {
      open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          confirmButtonClass:'ifmessage'
        }).then(() => {
        	$(".ifmessage").attr("disabled",true)
        	console.log($(".ifmessage").attr("disabled"))
          this.$message({
            type: 'success',
            message: '删除成功!'
            
          });
          console.log($(".ifmessage").attr("disabled",false))
          this.ifmessage=true;
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
  }
</script>
<style>
    #appT{
        position: relative;     /*定位*/
        top: 10px;
        left: 10px;
        width: 200px;
        height: 200px;
        background: #666;       /*设置一下背景*/
    }
</style>