<template>
 <div>
 	<div class="textEditor" @input="handleInput"> </div>
 	<div class="textEditor1" @input="handleInput"> </div>
 </div>

</template>
<script>
/* eslint-disable no-new */
import MediumEditor from 'medium-editor'
export default {
 props: {
  value: String,
  options: {
   type: Object,
   default: () => ({})
  }
 },
 data () {
  return {
   editor: null // 用来存放 editor 
  }
 },
 watch: {
  // refer: https://github.com/FranzSkuffka/vue-medium-editor/blob/master/index.js
  value (newVal, oldVal) {
   if (newVal !== this.$el.innerHTML) { // 用 $el.innerHTML 来解决 v-html 的光标跳到行首的问题
    this.$el.innerHTML = newVal || ''
    console.log(newVal)
   }
  }
 },
 methods: {
  handleInput (e) {
  	console.log(e.target.innerHTML)
   this.$emit('input', e.target.innerHTML)
  }
 },
 mounted () {
  // 处理初始值的情况
  this.$el.innerHTML = this.value
  // 这里当然可以自定义 options 啦
  this.editor = new MediumEditor(this.$el, Object.assign({}, this.options))
  // medium-editor 的 api，监听内容改变化
  this.editor.subscribe('editableInput', this.handleInput)
 },
 beforeDestroy () {
  this.editor.unsubscribe('editableInput', this.handleInput)
  this.editor.destroy()
 }
}
</script>